import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  const renderComponent = props => {
    return render(<Form {...props} />);
  };

  const mockProps = {
    onSubmit: jest.fn(),
    validFormData: false,
    formTitle: 'Form title',
    inputList: [
      {
        id: 1,
        label: 'label',
        placeholder: 'PlaceHolder',
        type: 'text',
        data: { name: 'email', value: '', error: '' },
        changeHandler: jest.fn(),
      },
    ],
    buttonText: 'send',
  };

  it('Render label and placeholder', () => {
    const { getByLabelText, getByPlaceholderText } = renderComponent(mockProps);

    expect(getByLabelText(/label/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });

  it('Render formTitle', () => {
    const { getByText } = renderComponent(mockProps);

    expect(getByText(/form title/i)).toBeInTheDocument();
  });

  it('Render value form', () => {
    const { getByDisplayValue } = renderComponent({
      ...mockProps,
      inputList: [{ ...mockProps.inputList[0], data: { value: 'inputValue' } }],
    });

    expect(getByDisplayValue(/inputValue/i)).toBeInTheDocument();
  });

  it('Call changeHandler when change input', () => {
    const { getByPlaceholderText } = renderComponent(mockProps);

    fireEvent.change(getByPlaceholderText(/PlaceHolder/i), { target: { value: 'mail' } });

    expect(mockProps.inputList[0].changeHandler).toHaveBeenCalledWith('email', 'mail');
  });

  it('Call onSubmit when form submit', () => {
    const { getByText } = renderComponent(mockProps);

    fireEvent.submit(getByText(/send/i));

    expect(mockProps.onSubmit).toHaveBeenCalled();
  });
});
