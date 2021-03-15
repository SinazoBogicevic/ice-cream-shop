import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.5);
  background: var(--white);
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
`;

export const ListContainer = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  position: relative;
  webkit-transfrom-text: uppercase;
  -ms-transfrom-text: uppercase;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  list-style-type: none;
  margin-right: 2rem;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 0px;
    height: 2px;
    background: green;
    transition: width 0.4s linear;
  }

  &:hover {
    color: green;
    &:after {
      width: 100%;
    }
  }
`;

export const LogoContainer = styled.div`
  max-width: 80px;
`;

export const Logo = styled.img`
  width: 100%;
  cursor: pointer;
`;
