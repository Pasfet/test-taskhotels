import { render, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  const renderComponent = props => {
    return render(<TextField {...props} />);
  };

  const mockProps = {
    label: 'label',
    placeholder: 'placeholder',
    inputData: {
      value: '',
      name: 'name',
      error: null,
    },
    type: 'text',
    changeHandler: jest.fn(),
  };

  it('Render label', () => {
    const { getByLabelText } = renderComponent(mockProps);

    expect(getByLabelText(mockProps.label)).toBeInTheDocument();
  });

  it('Render placeholder', () => {
    const { getByPlaceholderText } = renderComponent(mockProps);

    expect(getByPlaceholderText(mockProps.placeholder)).toBeInTheDocument();
  });

  it('Has value on input', () => {
    const { getByDisplayValue } = renderComponent({ ...mockProps, inputData: { value: 'test' } });

    expect(getByDisplayValue('test')).toBeInTheDocument();
  });

  it('Call changeHandler when change inputValue', () => {
    const { getByPlaceholderText } = renderComponent({
      ...mockProps,
      inputData: { ...mockProps.inputData, value: 'test' },
    });

    fireEvent.change(getByPlaceholderText(mockProps.placeholder), { target: { value: 'test1' } });

    expect(mockProps.changeHandler).toHaveBeenCalledWith(mockProps.inputData.name, 'test1');
  });

  it('Render error', () => {
    const { getByText } = renderComponent({ ...mockProps, inputData: { error: 'Error' } });

    expect(getByText(/error/i)).toBeInTheDocument();
  });
});
