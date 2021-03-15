import {
  Container,
  Slider,
  Arrow,
  SlideShow,
  ImgBox,
  Img,
} from "./slide.elements";

const Slide = (props) => {
  const data = props.data;
  const ices = data.map(({ url, color, alt }, index) => {
    return (
      <ImgBox key={index} style={{ borderColor: { color } }}>
        <Img src={url} alt={alt} style={{ borderColor: `${color}` }} />
      </ImgBox>
    );
  });

  return (
    <Container>
      <Slider>
        <Arrow right={false} />
        <SlideShow>{ices}</SlideShow>
        <Arrow right={true} />
      </Slider>
    </Container>
  );
};

export default Slide;
