import styled from 'styled-components';

export const ItemRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  max-height: 100px;
  padding: 16px;
`;

export const ItemCol = styled.td`
  width: ${props => (props.width ? props.width : '20%')};
`;

export const ItemImageWrapper = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(65, 82, 46, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    width: 25px;
    height: 25px;
  }
`;

export const ItemImage = styled.img`
  width: inherit;
  height: inherit;
`;

export const ItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ItemTitle = styled.h3`
  font-weight: 300;
  font-size: 1.05rem;
  line-height: 1.4rem;
  letter-spacing: -0.408px;
  color: #424242;
`;

export const ItemCheckIn = styled.span`
  font-size: 0.8rem;
  line-height: 1.3rem;
  letter-spacing: -0.408px;
  color: #878787;
`;

export const ItemRatingWrapper = styled.div`
  & > svg {
    fill: #6c6845;
  }
  & > svg.gold {
    fill: #cdbc1e;
  }
`;

export const ItemActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: calc(100px - 32px);
  padding-right: 10px;
`;

export const ItemActionBtn = styled.button`
  width: 21px;
  height: 18px;
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemPriceLabel = styled.span`
  font-weight: 300;
  font-size: 0.7rem;
  line-height: 1.4rem;
  letter-spacing: -0.408px;
  color: #878787;
  margin-right: 10px;
`;
export const ItemPrice = styled.p`
  display: flex;
  font-size: 1.1rem;
  line-height: 1.4rem;
  text-align: right;
  letter-spacing: -0.408px;
  color: #424242;
`;
