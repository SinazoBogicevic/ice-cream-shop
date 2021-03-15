import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 500px;
`;

export const Slider = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-column-gap: 8px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Arrow = styled.div`
position: relative;
width: 25px;
height: 25px;
border: 1px solid var(--starbucks-green);
border-radius: 50%;
cursor: pointer;

&:after{
position: absolute;
top: 10px;
left: 10px;
width: 50%;
content: ${({ right }) => (right ? ">" : "<")}
background: var(--starbucks-green);
}
`;

export const SlideShow = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 120px);
  grid-row-gap: 12px;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  list-style-type: none;
`;

export const ImgBox = styled.li`
  border: 1px solid;
  width: 80%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
