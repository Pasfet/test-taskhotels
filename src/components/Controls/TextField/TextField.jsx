import PropTypes from 'prop-types';
import { memo } from 'react';
import { ErrorMessage, Input, InputLabel } from './TextFieldStyled';

const TextField = ({ inputData, changeHandler, label, placeholder, type }) => {
  return (
    <InputLabel error={inputData?.error && 'error'}>
      {label}
      <Input
        type={type}
        placeholder={placeholder}
        value={inputData?.value}
        onChange={e => changeHandler(inputData?.name, e.target.value)}
      />
      {inputData?.error && <ErrorMessage>{inputData?.error}</ErrorMessage>}
    </InputLabel>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputData: PropTypes.object,
  changeHandler: PropTypes.func,
  type: PropTypes.string,
};

export default memo(TextField);
