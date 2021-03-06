import {
  MainContent,
  MainContentSlider,
  MainContentWrapper,
  MainHeader,
  MainHeaderLogout,
  MainHeaderTitle,
  MainHotelFavoriteCount,
  MainHotelFavoriteCountSpan,
  MainWrapper,
  SideBar,
} from './MainPageContainerStyled';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as LogOutIcon } from '../../assets/logout-icon.svg';

import {
  addToFavorite,
  fetchHotels,
  removeFromFavorite,
  sortFavoriteHotels,
} from '../../store/hotelsReducer/hotelsReducer';
import { logOut } from '../../store/authReducer/authReducer';
import { getHotelImg } from '../../store/hotelImgReducer/hotelImgSelectors';

import Form from '../../components/Form/Form';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Slider from '../../components/Slider/Slider';
import Table from '../../components/Table/Table';
import {
  getFavoriteHotelsList,
  getFavoriteHotelsListLength,
  getHotelsList,
} from '../../store/hotelsReducer/hotelsSelectors';
import FavoriteBlock from '../../components/FavoriteBlock/FavoriteBlock';
import { sortedHelper } from './useSortedTable';
import { declOfNum, findElement, getLimitDays } from '../../utils/utils';

const MainPageContainer = () => {
  const dispatch = useDispatch();
  const hotelsList = useSelector(getHotelsList);
  const favoriteHotelsList = useSelector(getFavoriteHotelsList);
  const favoriteHotelsListLength = useSelector(getFavoriteHotelsListLength);
  const hotelsImg = useSelector(getHotelImg);

  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth() + 1;
  const day = dateNow.getDate();

  const [ascending, setAscending] = useState('ascending');
  const [searchForm, setSearchForm] = useState({
    location: { name: 'location', value: 'Moscow' },
    checkIn: { name: 'checkIn', value: `${year}-${month}-${day}` },
    checkOut: { name: 'checkOut', value: `${year}-${month}-${day + 1}` },
    limitDays: { name: 'limitDays', value: 1 },
  });

  const changeHandler = (name, value) => {
    if (name !== 'location') {
      if (name === 'limitDays') {
        setSearchForm(prevState => ({
          ...prevState,
          limitDays: { ...prevState.limitDays, value },
          checkOut: { ...prevState.checkOut, value: `${year}-${month}-${day + +value}` },
        }));
      } else {
        const changedCheckInInput = name === 'checkIn' ? true : false;
        setSearchForm(prevState => ({
          ...prevState,
          [name]: { ...prevState[name], value },
          limitDays: {
            ...prevState.limitDays,
            value: getLimitDays(
              (changedCheckInInput && value) || searchForm.checkIn.value,
              (changedCheckInInput === false && value) || searchForm.checkOut.value,
            ),
          },
        }));
      }
    } else {
      setSearchForm(prevState => ({ ...prevState, location: { ...prevState.location, value } }));
    }
  };

  const inputList = [
    {
      id: 1,
      label: '??????????????',
      type: 'text',
      data: searchForm.location,
      changeHandler,
    },
    {
      id: 2,
      label: '???????? ??????????????????',
      type: 'date',
      data: searchForm.checkIn,
      changeHandler,
    },
    {
      id: 3,
      label: '???????? ??????????????',
      type: 'date',
      data: searchForm.checkOut,
      changeHandler,
    },
    {
      id: 4,
      label: '???????????????????? ????????',
      type: 'number',
      data: searchForm.limitDays,
      changeHandler,
    },
  ];

  const onSubmit = e => {
    e.preventDefault();
    dispatch(fetchHotels(searchForm));
  };

  const addToFavoriteHandler = hotel => {
    const find = findElement(hotel.hotelId, 'hotelId', favoriteHotelsList);
    if (find) {
      dispatch(removeFromFavorite(find.hotelId));
    } else {
      dispatch(
        addToFavorite({ ...hotel, limitDays: searchForm.limitDays.value, inFavorite: true }),
      );
    }
  };

  const sortFavoriteHotelsHandler = sortBy => {
    const sortedList = sortedHelper(sortBy, ascending, favoriteHotelsList);
    if (ascending === 'ascending') {
      setAscending('descending');
    } else {
      setAscending('ascending');
    }

    dispatch(sortFavoriteHotels(sortedList));
  };

  useEffect(() => {
    dispatch(fetchHotels(searchForm));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <MainWrapper>
      <MainHeader>
        <MainHeaderTitle>Simple Hotel Check</MainHeaderTitle>
        <MainHeaderLogout onClick={() => dispatch(logOut())}>
          ?????????? <LogOutIcon />
        </MainHeaderLogout>
      </MainHeader>

      <MainContent>
        <SideBar>
          <Form
            inputList={inputList}
            onSubmit={onSubmit}
            validFormData={true}
            buttonText={'??????????'}
          />
          <FavoriteBlock
            list={favoriteHotelsList}
            limitDays={searchForm.limitDays.value}
            checkIn={searchForm.checkIn.value}
            addHandler={addToFavoriteHandler}
            sortFavoriteHotelsHandler={sortFavoriteHotelsHandler}
            ascending={ascending}
          />
        </SideBar>
        <MainContentWrapper>
          <Breadcrumbs location={searchForm.location.value} checkIn={searchForm.checkIn.value} />
          <MainContentSlider>
            <Slider slides={hotelsImg} />
          </MainContentSlider>
          <MainHotelFavoriteCount>
            ?????????????????? ?? ??????????????????:{' '}
            <MainHotelFavoriteCountSpan>{favoriteHotelsListLength}</MainHotelFavoriteCountSpan>{' '}
            {declOfNum(favoriteHotelsListLength, ['??????????', '??????????', '????????????'])}
          </MainHotelFavoriteCount>
          <Table
            list={hotelsList}
            limitDays={searchForm.limitDays.value}
            checkIn={searchForm.checkIn.value}
            addHandler={addToFavoriteHandler}
            favoriteHotelsList={favoriteHotelsList}
          />
        </MainContentWrapper>
      </MainContent>
    </MainWrapper>
  );
};

export default MainPageContainer;
