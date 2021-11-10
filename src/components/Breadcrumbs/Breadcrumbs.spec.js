import { render } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {
  const renderComponent = props => {
    return render(<Breadcrumbs {...props} />);
  };

  const mockProps = {
    location: 'Moscow',
    checkIn: '2021-10-12',
  };

  it('Render Breadcrumbs location', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/отели/i)).toBeInTheDocument();
    expect(getByText(/Moscow/i)).toBeInTheDocument();
  });

  it('Render breadcrumbs checkIn', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/12\.10\.2021/i)).toBeInTheDocument();
  });
});
