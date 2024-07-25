

import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Banner from "../Components/Banner";
import Shop from "../Components/Shop";
import Logo from "../Components/Logo";
import Even from "../Components/Even";
import Living from "../Components/Living";
import Fasion from "../Components/Fasion";
import Email from "../Components/Email";
import Footer from "../Components/Footer";
const Home = () => {
    return (
      <>
        <Main className="container">
          <Navbar/>
        <Banner/>
         
          <Shop/>
          <Logo/>
          <Even/>
          <Living/>
          <Fasion/>
          <Email/>
          <Footer/>
        </Main>
      </>
    );
  };
  
  export default Home;
  
  const Main = styled.div`
   max-width: 100%;
    width: 100%;
   
   
  `;
  