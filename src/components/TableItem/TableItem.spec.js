import { render, fireEvent } from '@testing-library/react';
import TableItem from './TableItem';

describe('TableItem', () => {
  const renderComponent = props => {
    return render(
      <table>
        <tbody>
          <tr>
            <TableItem {...props} />
          </tr>
        </tbody>
      </table>,
    );
  };

  const mockProps = {
    item: { hotelId: '1', hotelName: 'HotelName', limitDays: 2, stars: 3, priceFrom: 8000 },
    checkIn: '2021-10-12',
    limitDays: 1,
    addHandler: jest.fn(),
    favorite: true,
  };

  it('Render tableItem', () => {
    const { getByText, queryByTestId } = renderComponent(mockProps);

    expect(queryByTestId('hotelImg')).not.toBeInTheDocument();
    expect(getByText(/hotelName/i)).toBeInTheDocument();
    expect(getByText(/8000/i)).toBeInTheDocument();
    expect(getByText(/12\.10\.2021/i)).toBeInTheDocument();
    expect(getByText(/2/i)).toBeInTheDocument();
  });

  it('Render hotelImage if favorite === false', () => {
    const { getByTestId } = renderComponent({ ...mockProps, favorite: false });

    expect(getByTestId('hotelImg')).toBeInTheDocument();
  });

  it('Call addHandler when click addToFavorite button', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('addToFavorite'));

    expect(mockProps.addHandler).toHaveBeenCalledWith(mockProps.item);
  });
});
