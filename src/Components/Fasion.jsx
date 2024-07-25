

import styled from "styled-components";
import image1 from "../Images/banner-1.jpg";
import image2 from "../Images/banner-2.jpg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Fasion =()=>{

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
return(

    <>
    <Maincontainer>
     <Subcontainer>
     <div className="box1">
     <h1>When Fasion made</h1>
     <h1>another statement</h1>
     </div>
     <div className="box2">
      <p>Katha</p>
     </div>

     </Subcontainer>

     <div className="displaycontainer">
      <div className="box3">
         <img src={image1}></img>
         <div className="box5">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>5 simple wayss to get started with a more consious way of living</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      </div>
      <div className="box4"> 
         <img src={image2}></img>
         <div className="box6">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Easy tips for a consious closet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div> 
         </div>

     </div>




    </Maincontainer>
    
    </>

)
}
export default Fasion;


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
  
      .displaycontainer {
      height:400px;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 30px; 
  padding:15px;
   margin-top:20px;
   margin-bottom:30px;
   @media (max-width: 1024px) {
  
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 30px; 
  padding:15px;
    height: auto;
  }

  @media (max-width: 768px) {
    
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 10px; 
  padding:15px;
    height: auto;
  }

   @media (max-width: 425px) {

    height: auto;
     display: grid;
  grid-template-columns:  1fr; 
  gap: 30px; 
  padding:15px;
  }

  @media (max-width: 375px) {
    height: auto;
     display: grid;
  grid-template-columns:  1fr; 
  gap: 30px; 
  padding:15px;
  }

  @media (max-width: 320px) {
    height: auto;
     display: grid;
  grid-template-columns:  1fr; 
  gap: 30px; 
  padding:15px;
  }
  

 
}
   
.displaycontainer img {
  width: 600px;
  height: 400px;
  display: block;
   @media (max-width: 1024px) {
    width:470px;
    height: auto;
    
  }
     @media (max-width: 768px) {
    width:370px;
    height: auto;
    
  }

   @media (max-width: 425px) {
    width:400px;
    height: auto;
    
  }

  @media (max-width: 375px) {
    width:350px;
    height: auto;
     
  }

  @media (max-width: 320px) {
   width:300px;
    height: auto;
    
  }
  
  
}
   .box3{
    position:relative;
    width:600px;
    @media (max-width: 425px) {
     width:400px
    height: auto;
    
  }
     @media (max-width: 1024px) {
    width:470px;
    height: auto;
    
  }
     @media (max-width: 768px) {
    width:370px;
    height: auto;
    
  }
     @media (max-width: 425px) {
    width:400px;
    height: auto;
    
  }


  @media (max-width: 375px) {
  width:350px;
    height: auto;
     
  }

  @media (max-width: 320px) {
   width:300px;
    height: auto;
    
  }
  
   }
    .box4{
     position:relative;
       width:600px;
        @media (max-width: 1024px) {
    width:470px;
    height: auto;
    
  }
     @media (max-width: 768px) {
    width:370px;
    height: auto;
    
  }
     @media (max-width: 425px) {
    width:400px;
    height: auto;
    
  }
     @media (max-width: 375px) {
   width:350px;
    height: auto;
    
  }
     @media (max-width: 320px) {
   width:300px;
    height: auto;
    
  }
    

    }



   
   }
     .box5{
      position:absolute;
      bottom:10px;
     }
    
      .box6{
      position:absolute;
      bottom:10px;
    }

`;

const Subcontainer = styled.div`

  display:flex;
  justify-content: space-between;
   padding:30px;
     @media (max-width: 425px) {
    gap:20px;
  }
  .box1{
     width:700px;
   
    
     text-align:left;
      @media (max-width: 425px) {
      width:390px;
    height: auto;
  }

     h1{
     font-size:49px;
        font-family: 'Times New Roman', Times, serif;
      color: rgba(255, 255, 255, 0.557);
     line-height: 1.0;
     letter-spacing: 1.8px;
     text-align:left;
       @media (max-width: 425px) {
      font-size:23px;
  }
    
     }
  }
     .box2{
      width:100px;
      height:50px;
     background-color:white;
      margin-right:60px;
     margin-top:15px;
       @media (max-width: 425px) {
       margin-top:10px;
       margin-right:20px;
      height:40px;
      padding:5px;
  }
      p{
      font-size:20px;
         font-family: 'Times New Roman', Times, serif;
      color: black;
     line-height: 2.0;
     letter-spacing: 1.8px;
      }
     }
`;

// // const Displaycontainer = styled.div`
  
// //   height:300px;
// //   display:flex;
// //   padding:10px;
// //   margin-top:50px;
 
// //   justify-content:space-between;

// //   .box3{
// //     width:650px;
// //     height:auto;
// //     position:relative;

// //     img{
    
// //     width:650px;
// //     height:300px;
// //     }
// //   }
// //     .box5{
// //      position:absolute;
// //      bottom:-15px;
// //     }
// //     .box4{
// //     width:650;
// //     height:auto;
// //    position:relative;

// //      img{
    
// //     width:650px;
// //     height:300px;
// //     }
// //   }
// //      .box6{
// //      position:absolute;
// //      bottom:-15px;
// //     }

// // `;