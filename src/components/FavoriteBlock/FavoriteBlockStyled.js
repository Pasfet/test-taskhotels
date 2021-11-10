import styled from 'styled-components';

export const FavoriteBlockWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 32px;
`;

export const FavoriteBlockTitle = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #424242;
`;

export const FavoriteBlockActions = styled.div`
  display: flex;
  align-items: center;
  margin: 37px 0;
`;

export const FavoriteBlockActionsButton = styled.button`
  border: 1px solid #41522e;
  border-radius: 4px;
  font-size: 0.8rem;
  line-height: 20px;
  letter-spacing: -0.408px;
  color: #41522e;
  background: transparent;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 0px #5a5a5a;
  }

  & > svg {
    margin-left: 5px;
    width: 16px;
    height: 16px;
    transform: rotate(${props => (props.ascending === 'ascending' ? '0' : '180deg')});
  }
`;
