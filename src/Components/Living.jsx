import image1 from "../Images/banner-3.jpg";
import image2 from "../Images/banner-2.jpg";
import image3 from "../Images/slider1_bg.jpg";
import styled from "styled-components";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Living=()=>{
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
    return(

        <>
         <Maincontainer>
         <div className="subcontainer">
      <h2 data-aos="slide-up" >Living upto earth - earth standard</h2>
    
      </div>

    
           <Subtopics>
           <div  data-aos="fade-right" className="sub1"> 
            <img src={image1}></img>
            <div className="box1">
              <h3>Custom craft</h3>
              <p>Giving a sustainable craft to creatvie version</p>
            </div>
            </div>
           <div data-aos="fade-left" className="sub2">
            <img src={image2}></img>
            <div className="box2">
              <h3>atelier</h3>
              <p>A Sustainable production unit to craft your next eco-consious collection</p>
            </div>
            </div>
           </Subtopics>
           <Majortopic>
            <div data-aos="slide-up" className="box3">
           <img src={image3}></img>
           <div className="box4">
              <h3>Corporate gifting</h3>
              <p>When consious working translates to consious gifting</p>
            </div>
           </div>
           </Majortopic>
         </Maincontainer>
        </>
    )
}

export default Living;

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
    margin-left:25px;
   }
     .subcontainer h2{
      
     font-size:45px;
      font-family: 'Times New Roman', Times, serif;
      color: rgba(255, 255, 255, 0.557);
     line-height: 1.0;
     letter-spacing: 1.5px;
     word-spacing: 6px; 
     text-align:left;

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
     
       
      
`;


const Subtopics = styled.div`

  display:flex;
  
   gap:10px;
  padding:40px;

   @media (max-width: 375px) {
    flex-wrap:wrap
    
  }
   
  .sub1{
  
  
  height:auto;
  position:relative;
  overflow:hidden;



  img{
    width:700px;
    height:350px;
    transition: 0.3s ease-in-out;
     @media (max-width: 1024px) {
     width:600px;
    
  }

  @media (max-width: 768px) {
   width:400px;
  }

  @media (max-width: 425px) {
    width:200px;
  }

  @media (max-width: 375px) {
  width:350px;
    flex-wrap:wrap
  }

  @media (max-width: 320px) {
    width:250px;
  }
  
  }
    &:hover img{
      transform: scale(1.1);
     
    }
       &:hover p {
    transform: translateY(0);
    opacity: 1;
  }
  }

  .box1{
     position:absolute;
     width:40%;
     height:70px;
   
     top:20px;
     left:10px;
     text-align:left;
     
     h3{
       line-height:1.6;
       font-size:20px;
       font-family: 'Times New Roman', Times, serif;
     }
       p{
        font-family: 'Times New Roman', Times, serif;
         line-height: 1.0;
         opacity:0;
  
     color: rgba(255, 255, 255, 0.557);
     transform: translateY(100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    
       }

    
  }

  .sub2{
  
    
    position:relative;
    overflow:hidden;
    img{
    width:700px;
    height:350px;
    transition: 0.3s ease-in-out;

     @media (max-width: 1024px) {
     width:600px;
    
  }
      @media (max-width: 768px) {
   width:400px;
  }
   
  @media (max-width: 425px) {
    width:200px;
  }
    @media (max-width: 375px) {
    width:350px;
    flex-wrap:wrap
  }
    @media (max-width: 320px) {
    width:250px;
    flex-wrap:wrap
  }
    
  }
     &:hover img{
      transform: scale(1.1);
    }
       &:hover p {
    transform: translateY(0);
    opacity: 1;
  }

  }

  .box2{
     position:absolute;
     width:50%;
     height:70px;
   
     top:20px;
     left:10px;
     text-align:left;
     
     h3{
       line-height:1.6;
       font-size:20px;
       font-family: 'Times New Roman', Times, serif;
     }
       p{
         font-family: 'Times New Roman', Times, serif;
         line-height: 1.0;
         opacity:0;
           transform: translateY(100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  
     color: rgba(255, 255, 255, 0.557);
       }
  }
    
       .
`;
const Majortopic = styled.div`
width: 100%;
height: auto;
margin-top:-70px;
padding: 40px;

.box3 {
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 350px;
    transition: 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover p {
    transform: translateY(0);
    opacity: 1;
  }
}

.box4 {
  position: absolute;
  width: 30%;
  height: 80px;
  top: 20px;
  left: 10px;
  text-align: left;

  h3 {
    line-height: 1.6;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
  }

  p {
    font-family: 'Times New Roman', Times, serif;
    line-height: 1.0;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    color: rgba(255, 255, 255, 0.557);
  }
}
`;