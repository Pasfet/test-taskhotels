import styled, { css } from 'styled-components';

export const ButtonWrap = styled.button`
  width: 100%;
  background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
  border: 1.5px solid #41522e;
  border-radius: 4px;
  color: #ebf4f8;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 20px;
  transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  &:active {
    border: 1.5px solid #334024;
  }

  ${props =>
    props.disabled &&
    css`
      background: #dbe2ea;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
      color: #2c2738;
      opacity: 0.5;
    `}
`;
