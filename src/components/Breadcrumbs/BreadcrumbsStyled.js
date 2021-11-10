import styled from 'styled-components';

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BreadcrumbsLeftText = styled.div`
  font-weight: 500;
  font-size: 2rem;
  color: #424242;

  & > svg {
    width: 9px;
    height: 17px;
    margin: 0 20px;
  }

  @media (max-width: 1020px) {
    font-size: 1.2rem;
  }
`;

export const BreadcrumbsRightText = styled.div`
  font-size: 2rem;
  color: #41522e;

  @media (max-width: 1020px) {
    font-size: 1.2rem;
  }
`;
