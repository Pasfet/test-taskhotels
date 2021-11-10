import { ScrollTable, TableStyled } from './TableStyled';
import { memo } from 'react';
import TableItem from '../TableItem/TableItem';
import PropTypes from 'prop-types';
import { findElement } from '../../utils/utils';

const Table = ({
  list,
  checkIn,
  addHandler,
  height,
  sidebar = false,
  limitDays,
  favoriteHotelsList,
}) => {
  return (
    <ScrollTable height={height}>
      <TableStyled>
        <tbody>
          {Array.isArray(list) &&
            list?.map(item => (
              <TableItem
                key={item?.hotelId}
                item={item}
                checkIn={checkIn}
                addHandler={addHandler}
                favorite={sidebar}
                limitDays={limitDays}
                inFavorite={findElement(item?.hotelId, 'hotelId', favoriteHotelsList) && true}
              />
            ))}
        </tbody>
      </TableStyled>
    </ScrollTable>
  );
};

Table.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  checkIn: PropTypes.string,
  addHandler: PropTypes.func,
  height: PropTypes.string,
  sidebar: PropTypes.bool,
  limitDays: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  favoriteHotelsList: PropTypes.array,
};

export default memo(Table);
