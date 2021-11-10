import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  padding: 36px 32px;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const MainHeaderTitle = styled.h1`
  color: #424242;
  font-weight: 500;
  font-size: 2rem;
  line-height: 28px;
`;

export const MainHeaderLogout = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: #41522e;
  font-size: 1.1rem;
  font-weight: 400;

  & > svg {
    margin-left: 10px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 360px) minmax(300px, 670px);
  grid-gap: 25px;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const SideBar = styled.aside`
  display: grid;
  grid-template-rows: repeat(2, minmax(360px, 470px));
  grid-gap: 25px;
`;

export const MainContentWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 48px 32px;
`;

export const MainContentSlider = styled.section`
  margin: 30px 0;
`;

export const MainHotelFavoriteCount = styled.p`
  display: block;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #424242;
  margin: 12px 0;
`;

export const MainHotelFavoriteCountSpan = styled.span`
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.2rem;
  letter-spacing: -0.408px;
`;
