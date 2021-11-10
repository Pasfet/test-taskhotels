import { render, fireEvent } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  const renderComponent = props => {
    return render(<Table {...props} />);
  };

  const mockProps = {
    list: [{ hotelId: '1', hotelName: 'HotelName', limitDays: 2, stars: 3, priceFrom: 8000 }],
    checkIn: '2021-10-12',
    limitDays: 1,
    addHandler: jest.fn(),
    sortFavoriteHotelsHandler: jest.fn(),
  };

  it('Render tableItem', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/hotelName/i)).toBeInTheDocument();
    expect(getByText(/8000/i)).toBeInTheDocument();
    expect(getByText(/12\.10\.2021/i)).toBeInTheDocument();
    expect(getByText(/2/i)).toBeInTheDocument();
  });

  it('Call addHandler when click addToFavorite button', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('addToFavorite'));

    expect(mockProps.addHandler).toHaveBeenCalledWith(mockProps.list[0]);
  });
});
