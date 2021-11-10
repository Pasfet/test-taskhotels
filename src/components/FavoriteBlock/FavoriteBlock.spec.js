import { render, fireEvent } from '@testing-library/react';
import FavoriteBlock from './FavoriteBlock';

describe('FavoriteBlock', () => {
  const renderComponent = props => {
    return render(<FavoriteBlock {...props} />);
  };

  const mockProps = {
    list: [{ hotelId: '1', hotelName: 'HotelName', limitDays: 2, stars: 3, priceFrom: 8000 }],
    checkIn: '2021-10-12',
    limitDays: 1,
    addHandler: jest.fn(),
    sortFavoriteHotelsHandler: jest.fn(),
  };

  it('Render title and button', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/Избранное/i)).toBeInTheDocument();
    expect(getByText(/Рейтинг/i)).toBeInTheDocument();
    expect(getByText(/Цена/i)).toBeInTheDocument();
  });

  it('Render tableItem', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/hotelName/i)).toBeInTheDocument();
    expect(getByText(/8000/i)).toBeInTheDocument();
    expect(getByText(/12\.10\.2021/i)).toBeInTheDocument();
    expect(getByText(/2/i)).toBeInTheDocument();
  });

  it('Call sortFavoriteHotelsHandler when click on rating', () => {
    const { getByText } = renderComponent(mockProps);

    fireEvent.click(getByText(/Рейтинг/i));

    expect(mockProps.sortFavoriteHotelsHandler).toHaveBeenCalledWith('stars');
  });

  it('Call sortFavoriteHotelsHandler when click on price', () => {
    const { getByText } = renderComponent(mockProps);

    fireEvent.click(getByText(/Цена/i));

    expect(mockProps.sortFavoriteHotelsHandler).toHaveBeenCalledWith('priceFrom');
  });
});
