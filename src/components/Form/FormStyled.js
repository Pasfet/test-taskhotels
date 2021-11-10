import styled from 'styled-components';

export const FormWrapper = styled.form`
  background: #ffffff;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  max-width: 410px;
  width: 100%;
  padding: 32px;
`;

export const FormTitle = styled.h1`
  color: #424242;
  font-weight: 500;
  font-size: 2rem;
  line-height: 28px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin: ${props => props.title && '32px 0'};
`;
