import styled from "styled-components";

export const MainContainer = styled.section`
  padding: 42px 36px;
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 300px;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const PricesContainer = styled.div`
  display: flex;
  font-family: "Work Sans", sans-serif;
`;

export const PriceContainer = styled.div`
  display: flex;
  &:nth-child(1) {
    margin-right: 1.5rem;
  }
`;

export const Dollar = styled.p`
  color: ${({ sale }) => (sale ? "var(--starbucks-green)" : "var(--disable)")};
  font-size: ${({ sale }) => (sale ? "3rem" : "2rem")};
  font-weight: 900;
`;

export const Price = styled.p`
  color: ${({ sale }) => (sale ? "var(--starbucks-green)" : "var(--disable)")};
  font-size: ${({ sale }) => (sale ? "3.5rem" : "2.5rem")};
  font-weight: 900;
  -webkit-text-decoration: ${({ sale }) => (sale ? "none" : "line-through")};
  text-decoration: ${({ sale }) => (sale ? "none" : "line-through")};
`;

export const Featured = styled.h3`
  color: var(--starbucks-green);
  text-transform: capitalize;
`;

export const Slogan = styled.h1`
  font-size: 2rem;
  font-family: "Work Sans", sans-serif;
  text-transform: capitalize;
`;

export const SalesPitch = styled.p`
  color: var(--pitch-color);
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const ImgContainer = styled.div``;

export const Image = styled.img`
height: 100%;
width: 100%:
`;
