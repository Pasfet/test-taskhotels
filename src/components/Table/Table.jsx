import { ScrollTable, TableStyled } from './TableStyled';
import { memo } from 'react';
import TableItem from '../TableItem/TableItem';
import PropTypes from 'prop-types';

const Table = ({ list, checkIn, addHandler, height, sidebar = false, limitDays }) => {
  return (
    <ScrollTable height={height}>
      <TableStyled>
        <tbody>
          {list &&
            list?.map(item => (
              <TableItem
                key={item?.hotelId}
                item={item}
                checkIn={checkIn}
                addHandler={addHandler}
                favorite={sidebar}
                limitDays={limitDays}
              />
            ))}
        </tbody>
      </TableStyled>
    </ScrollTable>
  );
};

Table.propTypes = {
  list: PropTypes.array,
  checkIn: PropTypes.string,
  addHandler: PropTypes.func,
  height: PropTypes.string,
  sidebar: PropTypes.bool,
  limitDays: PropTypes.number,
};

export default memo(Table);
