import {
  ItemActionBtn,
  ItemActionWrapper,
  ItemCheckIn,
  ItemCol,
  ItemContentWrapper,
  ItemImageWrapper,
  ItemPrice,
  ItemPriceLabel,
  ItemRatingWrapper,
  ItemRow,
  ItemTitle,
} from './TableItemStyled';
import { ReactComponent as HotelIcon } from '../../assets/house-icon.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import PropTypes from 'prop-types';

const TableItem = ({ item, checkIn, addHandler, favorite, limitDays }) => {
  const normalizeDate = inputDate => {
    const date = inputDate.split('-').reverse();
    return date.join('.');
  };

  return (
    <ItemRow>
      {!favorite && (
        <ItemCol width="10%" data-testid="hotelImg">
          <ItemImageWrapper>
            <HotelIcon />
          </ItemImageWrapper>
        </ItemCol>
      )}
      <ItemCol width="50%">
        <ItemContentWrapper>
          <ItemTitle> {item?.hotelName} </ItemTitle>
          <ItemCheckIn>
            {normalizeDate(checkIn)} - {item?.limitDays || limitDays} дней
          </ItemCheckIn>
          <ItemRatingWrapper>
            {Array.from({ length: 5 }, (_, i) => i + 1).map(star =>
              item?.stars < star ? (
                <StarIcon key={star} />
              ) : (
                <StarIcon key={star} className="gold" />
              ),
            )}
          </ItemRatingWrapper>
        </ItemContentWrapper>
      </ItemCol>
      <ItemCol width="30%">
        <ItemActionWrapper>
          <ItemActionBtn onClick={() => addHandler(item)} data-testid="addToFavorite">
            <FavoriteIcon />
          </ItemActionBtn>
          <ItemPrice>
            <ItemPriceLabel>Price:</ItemPriceLabel>
            {item?.priceFrom.toFixed(0)} ₽
          </ItemPrice>
        </ItemActionWrapper>
      </ItemCol>
    </ItemRow>
  );
};

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
  checkIn: PropTypes.string,
  addHandler: PropTypes.func,
  favorite: PropTypes.bool,
  limitDays: PropTypes.number,
};

export default TableItem;
