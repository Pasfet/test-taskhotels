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
import { declOfNum } from '../../utils/utils';

const TableItem = ({ item, checkIn, addHandler, favorite, limitDays, inFavorite }) => {
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
            {normalizeDate(checkIn)} - {isNaN(limitDays) ? 0 : item?.limitDays || limitDays}{' '}
            {declOfNum(item?.limitDays || limitDays, ['день', 'дня', 'дней'])}
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
          <ItemActionBtn
            onClick={() => addHandler(item)}
            data-testid="addToFavorite"
            favorite={(item?.inFavorite || inFavorite) && true}
          >
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
  limitDays: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inFavorite: PropTypes.bool,
};

export default TableItem;
