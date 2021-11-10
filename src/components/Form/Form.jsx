import { FormTitle, FormWrapper, InputWrapper } from './FormStyled';
import TextField from '../Controls/TextField/TextField';
import Button from '../Controls/Button/Button';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, validFormData, inputList, buttonText, formTitle = '' }) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      {formTitle && <FormTitle> {formTitle} </FormTitle>}
      <InputWrapper title={formTitle && 'true'}>
        {inputList?.map(input => (
          <TextField
            key={input.id}
            label={input?.label}
            placeholder={input?.placeholder}
            type={input?.type}
            inputData={input.data}
            changeHandler={input.changeHandler}
          />
        ))}
      </InputWrapper>
      <Button text={buttonText} type="submit" disabled={validFormData ? false : true} />
    </FormWrapper>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  validFormData: PropTypes.bool,
  inputList: PropTypes.array,
  buttonText: PropTypes.string,
  formTitle: PropTypes.string,
};

export default Form;
