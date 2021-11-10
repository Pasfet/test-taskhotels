import styled, { css } from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  color: #424242;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 21px;

  ${props =>
    props.error &&
    css`
      color: #eb1717;
      & > input {
        border-color: #eb1717;
        color: #eb1717;
        &:focus {
          outline: 1px solid #eb1717;
        }
      }
    `}
`;

export const Input = styled.input`
  margin: 8px 0;
  padding: 16px;
  font-size: 16px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
  color: #424242;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    color: #424242;
    opacity: 0.8;
  }

  &:focus {
    outline: 1px solid #424242;
  }
`;

export const ErrorMessage = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 18px;
  color: #eb1717;
  margin: 8px 0;
`;
