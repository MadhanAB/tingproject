

import styled from "styled-components";
import image1 from "../Images/oh__demo3__1-min.jpg";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner =()=>{
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
    return(
        <>
        
        <Maincontainer>
         <Imagecontainer>
            <div className="maintitle">

                <p data-aos="slide-up">Some people talk about</p>
                <p data-aos="slide-up" >Saving the world</p>
                <p data-aos="slide-up">Some act</p>
            </div>
            <div className="image">
            <img src={image1}></img>
            </div>
         </Imagecontainer>
        </Maincontainer>
        </>
    )
}
export default Banner;

const Maincontainer = styled.div`
     max-width: 1370px;
   width:100%;
   height:auto;
   
   box-sizing: border-box;
   overflow:hidden;
    @media (max-width: 1024px) {
    max-height: 400px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 425px) {
    max-height: 400px;
  }

  @media (max-width: 375px) {
    max-height: 300px;
  }

  @media (max-width: 320px) {
    max-height: 400px;
    
  }
  

`;

const Imagecontainer = styled.div`

  width:100%;
  height:700px;
   position:relative;
   .image{
      width:100%;
    height:700px;
    img{
    width:100%;
    height:700px;
  }
   }
 
  .maintitle{
    width:30%;
    height:150px;
  
    position:absolute;  
    top:100px;
    left:150px;

     @media (max-width: 1024px) {
     width:50%;
    max-height: 400px;

  
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 425px) {
    max-height: 400px;
  }

  @media (max-width: 375px) {
    max-height: 300px;
  }

  @media (max-width: 320px) {
    max-height: 300px;
 
   
  }
  }
 .maintitle p{
 text-align:left;
 font-size:35px;
 font-family: 'Times New Roman', Times, serif;
  color: rgba(255, 255, 255, 0.557);
   line-height: 1.2;
    letter-spacing: 1.2px;
     @media (max-width: 425px) {
      font-size:25px;
  }

  @media (max-width: 375px) {
     font-size:25px;
  }

  @media (max-width: 320px) {
    font-size:25px;
   
   
  }
 }
`;