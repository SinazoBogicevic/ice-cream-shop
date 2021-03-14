import {
  Container,
  InnerContainer,
  ListContainer,
  NavItem,
  LogoContainer,
  Logo,
} from "./navbar.elements";
import logo from "../../assets/ice cream cups/logo.png";

const Navbar = () => {
  return (
    <Container>
      <InnerContainer>
        <ListContainer>
          <NavItem>menu</NavItem>
          <NavItem>rewards</NavItem>
          <NavItem>gifts</NavItem>
        </ListContainer>
        <LogoContainer>
          <Logo src={logo} alt="colourful ice-cream cone" />
        </LogoContainer>
        <ListContainer>
          <NavItem>delivery</NavItem>
          <NavItem>discount cards</NavItem>
          <NavItem>About us</NavItem>
        </ListContainer>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
