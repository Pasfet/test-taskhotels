import styled from 'styled-components';
import BgImg from '../../assets/background-image.jpg';

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: inherit;
    height: inherit;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
  }
`;
