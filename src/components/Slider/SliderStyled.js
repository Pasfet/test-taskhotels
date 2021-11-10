import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 160px;
  height: 150px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`;
