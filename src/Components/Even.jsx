

import styled from "styled-components";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Even =()=>{
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

return(

    <>
   

    <Maincontainer>

      <div className="subcontainer">
      <h2 data-aos="slide-up" >Consiousnes.Mindfull.Responsible</h2>
      <h2 data-aos="slide-up">Even when no one is watching</h2>
      </div>
      <div className="subcontainer2">
    <p data-aos="slide-up">Beej is a metaphor for the origin of all creation. it symbolises to respect towards</p>
    <p data-aos="slide-up">every life form and works as a guidelineprinciple of every business decision we make </p>
    </div>

    <div className="displaycontainer">
     
    <div className="display1">
      <h2 data-aos="slide-up" style={{color:" rgba(0, 128, 0, 0.737)"}}>show me some love</h2>
      
      <p data-aos="slide-up">Our deep commitment to being mindfull of the world to live in and its fats depleting 
        resources reflects in every single material we work with. Every element of our product 
        from the inner linnings to the zipper and even the packaging is sustainable in some from making it a
        100% suitable supply chain
      </p>
    <p data-aos="slide-up">our planet +</p>
      </div>
      <div className="display1">
      <h2 style={{color:"rgba(255, 166, 0, 0.696)"}}>the power of plenty</h2>
      
      <p data-aos="slide-up">An empowered team with a common purpose fuels the passion we bring to our work
        Our team of artists has consiousness made a shift to the world of sustainable fashion and take
        pride in the contribution they are making individually we practice fair pay and demand 
        the same of the partners we work with it.
      </p>
    
      <p data-aos="slide-up">our planet +</p>
      </div>
      <div className="display1">
      <h2 data-aos="slide-up" style={{color:"rgba(0, 0, 255, 0.794)"}}>birds of a feather</h2>
       <p data-aos="slide-up">Right from the onset, it was important for us to collaborate with us 
        with brands and partners that share the same value system as ours we only work with 
        business that are consious of their practices and committed to sustainability both environmentally
        and socially environmentally
        and socially</p>
    <p data-aos="slide-up">our planet +</p>
      </div>


    </div>

    </Maincontainer>
    </>
)
}
export default Even;

const Maincontainer = styled.div`
 max-width: 1370px;
   width:100%;
   height:auto;
     background-color: #4b3f2d55;
 
   
   box-sizing: border-box;
   overflow:hidden;
    @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 425px) {
    height: auto;
  }

  @media (max-width: 375px) {
    height: auto;
  }

  @media (max-width: 320px) {
    height: auto;
  }
   .subcontainer{
    padding:10px;
   }
    .subcontainer2{
     padding:10px;
    }
  .subcontainer h2{
      
     font-size:45px;
      font-family: 'Times New Roman', Times, serif;
      color: rgba(255, 255, 255, 0.557);
     line-height: 0.6;
     letter-spacing: 1.5px;
     word-spacing: 6px; 
     text-align:left; 
     padding:10px;

      @media (max-width: 425px) {
        font-size:28px;
         letter-spacing: 0.2px;
      }
         
      @media (max-width: 375px) {
        font-size:23px;
         letter-spacing: 0.2px;
      }
         
      @media (max-width: 320px) {
        font-size:20px;
         letter-spacing: 0.2px;
      }
   
  }
      .subcontainer2 p{
    
     font-family: 'Times New Roman', Times, serif;
     font-size:20px;
      line-height: 0.6;
     letter-spacing: 0.1px;
     word-spacing:1px;
    text-align:left;
    padding:10px;

     @media (max-width: 425px) {
        font-size:12px;
         letter-spacing: 0.2px;
         line-height:1.6;
      }
         
      @media (max-width: 375px) {
        font-size:19px;
         letter-spacing: 0.2px;
      }
         
      @media (max-width: 320px) {
        font-size:20px;
         letter-spacing: 0.2px;
      }
      }


      .displaycontainer{
        display:grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows:1fr;
        gap:10px;
        padding: 10px 20px;
        text-align:left;
        margin-bottom:30px;
        
         @media (max-width: 425px) {
            grid-template-columns: repeat(2, 1fr);
         grid-template-rows:repeat(2,1fr);
         }
          @media (max-width: 375px) {
            grid-template-columns: repeat(1, 1fr);
         grid-template-rows:repeat(3,1fr);
         }
       
      }
      
        .display1 p{
         
          
        font-family: 'Times New Roman', Times, serif;
         line-height: 1.2;
         font-size:18px;
         color: rgba(0, 0, 0, 0.638);
        }
         .display1 h2{
     font-family: 'Times New Roman', Times, serif;
         line-height: 1.4;
  }

  
`;
