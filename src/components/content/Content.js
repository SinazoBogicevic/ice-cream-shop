import {
  MainContainer,
  InnerContainer,
  TextContainer,
  PricesContainer,
  PriceContainer,
  Dollar,
  Price,
  Featured,
  Slogan,
  SalesPitch,
  ButtonsContainer,
  ImgContainer,
  Image,
} from "./content.elements";
import { Button } from "../../global.elements";
import hazelnut from "../../assets/ice cream cups/hazelnut.png";
import Slide from "../Slide/Slide";

const Content = (props) => {
  return (
    <MainContainer>
      <InnerContainer>
        <TextContainer>
          <PricesContainer>
            <PriceContainer>
              <Dollar sale={true}>$</Dollar>
              <Price sale={true}>2.50</Price>
            </PriceContainer>
            <PriceContainer>
              <Dollar sale={false}>$</Dollar>
              <Price sale={false}>3.00</Price>
            </PriceContainer>
          </PricesContainer>
          <Featured>featured ice-cream</Featured>
          <Slogan>smooth soft serve</Slogan>
          <SalesPitch>
            premium fresh-made soft serve ice-cream. Ice-cream is a natural,
            wholesome, frozen dairy product. Our product is creamier and
            smoother in texture.{" "}
          </SalesPitch>
          <ButtonsContainer>
            <Button fill={true}>order</Button>
            <Button fill={false}>nutritional information</Button>
          </ButtonsContainer>
        </TextContainer>
        <ImgContainer>
          <Image src={hazelnut} alt="hazelnut icream in a cup" />
        </ImgContainer>
        <Slide data={props.data} />
      </InnerContainer>
    </MainContainer>
  );
};

export default Content;
