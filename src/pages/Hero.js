import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";
import { data } from "./data";

const Hero = () => {
  return (
    <header>
      <Navbar />
      <Content data={data} />
    </header>
  );
};

export default Hero;
