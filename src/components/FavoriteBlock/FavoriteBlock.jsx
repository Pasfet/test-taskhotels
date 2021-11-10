import {
  FavoriteBlockActions,
  FavoriteBlockActionsButton,
  FavoriteBlockTitle,
  FavoriteBlockWrapper,
} from './FavoriteBlockStyled';
import { ReactComponent as SortIcon } from '../../assets/arrows-sort.svg';
import Table from '../Table/Table';
import PropTypes from 'prop-types';

const FavoriteBlock = ({ list, checkIn, limitDays, addHandler, sortFavoriteHotelsHandler }) => {
  return (
    <FavoriteBlockWrapper>
      <FavoriteBlockTitle>Избранное</FavoriteBlockTitle>
      <FavoriteBlockActions>
        <FavoriteBlockActionsButton onClick={() => sortFavoriteHotelsHandler('stars')}>
          Рейтинг
          <SortIcon />
        </FavoriteBlockActionsButton>
        <FavoriteBlockActionsButton onClick={() => sortFavoriteHotelsHandler('priceFrom')}>
          Цена
          <SortIcon />
        </FavoriteBlockActionsButton>
      </FavoriteBlockActions>
      <Table
        list={list}
        limitDays={limitDays}
        checkIn={checkIn}
        addHandler={addHandler}
        height={'250px'}
        sidebar={true}
      />
    </FavoriteBlockWrapper>
  );
};

FavoriteBlock.propTypes = {
  list: PropTypes.array,
  checkIn: PropTypes.string,
  limitDays: PropTypes.number,
  addHandler: PropTypes.func,
  sortFavoriteHotelsHandler: PropTypes.func,
};

export default FavoriteBlock;