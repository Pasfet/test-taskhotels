import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const renderComponent = props => {
    return render(<Button {...props} />);
  };

  it('Render Button text', () => {
    const { getByText } = renderComponent({ text: 'Send' });

    expect(getByText(/send/i)).toBeInTheDocument();
  });

  it('Disabled button', () => {
    const { getByText } = renderComponent({ text: 'Send', disabled: true });

    expect(getByText(/send/i).hasAttribute('disabled')).toBe(true);
  });

  it('Does not disabled button', () => {
    const { getByText } = renderComponent({ text: 'Send', disabled: false });

    expect(getByText(/send/i).hasAttribute('disabled')).toBe(false);
  });
});
