import { memo } from 'react';
import { ButtonWrap } from './ButtonStyled';
import PropTypes from 'prop-types';

const Button = ({ text, disabled, type }) => {
  return (
    <ButtonWrap disabled={disabled} type={type ? type : 'button'}>
      {text}
    </ButtonWrap>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default memo(Button);
