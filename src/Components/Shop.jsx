

import styled from "styled-components";
import image2 from "../Images/banner-1.jpg";
import image3 from "../Images/banner-2.jpg";
import image4 from "../Images/banner-3.jpg";
import image5 from "../Images/banner-3.jpg";
import image6 from "../Images/blog-3.jpg";
import image7 from "../Images/slider1_bg.jpg";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Shop =()=>{

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
 
  

    return(
        <>
        <Maincontainer>
       <div className="flex">
        <div className="subcontainer">
      <h2 data-aos="slide-up" >The earth seems</h2>
      <h2 data-aos="slide-up">Pretty Pleased</h2>
      </div>
      <div className="subcontainer2">
      <p data-aos="slide-up">Shop now</p>
    </div>
    </div>

    <div className="displaycontainer">
      <div className="box1"><img src={image2}></img></div>
      <div className="box2"><img src={image3}></img></div>
      <div className="box3"><img src={image4}></img></div>
      <div className="box4"><img src={image5}></img></div>
      {/* <div className="box5"><img src={image3}></img></div> */}
      {/* <div className="box6"><img src={image4}></img></div> */}

    </div>

    <div className="flex">
        <div className="subcontainer">
      <h2 data-aos="slide-up" >From earth we came to</h2>
      <h2 data-aos="slide-up">her returneth</h2>
      </div>
      <div className="subcontainer2">
      <p data-aos="slide-up">our materials</p>
    </div>
    </div>

    <Displaycontainer>
            <div className="displayitem">
              <div data-aos="zoom-out" className="khesh">
            <img src={image2}></img>
            </div>
            <div  className="khesh2">
              <h2 data-aos="slide-up">Khesh</h2>
              <p data-aos="slide-up">Khesh is a traditional form of weaving that finds its root in the Bhirbum district of westbengal.
                 The beauty about khesh is that no two materials look the same and only once the fabric is woven 
                 can it be appreciated in its full beauty
              </p>
              <Link style={{color:"rgba(0, 0, 0, 0.638)"}} to={"/Knowmore"}>Know more</Link>
            </div>
            </div>
            <div className="displayshop">
            <div data-aos="zoom-out" className="khesh">
            <img src={image2}></img>
            </div>
            <div className="khesh2">
              <h2 data-aos="slide-up">Eco Friendly Packaging</h2>
              <p data-aos="slide-up">Khesh is a traditional form of weaving that finds its root in the Bhirbum district of westbengal.
                 The beauty about khesh is that no two materials look the same and only once the fabric is woven 
                 can it be appreciated in its full beauty
              </p>
              <Link style={{color:"rgba(0, 0, 0, 0.638)"}} to={"/Knowmore"}>Know more</Link>
            </div>
            </div>
           </Displaycontainer> 
          
        </Maincontainer>
        </>
    )
}
export default Shop;

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
.flex{
  display:flex;
  justify-content:space-between;
  
}
  .subcontainer h2{
      
     font-size:45px;
      font-family: 'Times New Roman', Times, serif;
      color: rgba(255, 255, 255, 0.557);
     line-height: 1.0;
     letter-spacing: 1.5px;
     word-spacing: 6px; 
     text-align:left;
     margin-left:20px;
      @media (max-width: 425px) {
        font-size:25px;
         letter-spacing: 0.2px;
      }
         
      @media (max-width: 375px) {
        font-size:20px;
         letter-spacing: 0.2px;
      }
         
      @media (max-width: 320px) {
      width:180px;
        font-size:16px;
         letter-spacing: 0.2px;
      }
   
  }
      .subcontainer{
    padding:10px;
   }
    .subcontainer2{
    width:150px;
    height:50px;
    margin-top:30px;
    margin-right:30px;
       border:2px solid white;
       background-color:white;
         @media (max-width: 425px) {
         width:100px;
         height:30px;
      }
         
      @media (max-width: 375px) {
         width:100px;
         height:25px;
      }
         
      @media (max-width: 320px) {
         width:100px;
         height:25px;
         margin-top:20px;
      }
       
    }
      .subcontainer2 p{
    
     font-family: 'Times New Roman', Times, serif;
     font-size:20px;
      line-height: 1.4;
     letter-spacing: 0.1px;
  
    

     @media (max-width: 425px) {
        font-size:12px;
         letter-spacing: 0.2px;
         line-height:1.6;
      }
         
      @media (max-width: 375px) {
        font-size:14px;
         letter-spacing: 0.2px;
      }
         
      @media (max-width: 320px) {
        font-size:12px;
         letter-spacing: 0.2px;
         line-height:1.2;
      }
      }
     .displaycontainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 

  gap: 10px; 
  padding: 15px;
  margin-bottom:60px;

   @media (max-width: 425px) {
     display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px; 
  padding: 15px;
  }

  @media (max-width: 375px) {
     display: grid;
  grid-template-columns: repeat(1, 1fr); 
  gap: 10px; 
  padding: 15px;
  }

  @media (max-width: 320px) {
     display: grid;
  grid-template-columns: repeat(1, 1fr); 
  gap: 10px; 
  padding: 15px;
  }
}

.displaycontainer > div {
  width: 100%; 
  height: 300px; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  
}

.displaycontainer img {
  width: 100%; 
  height: 300px; 
  
  transition: 0.3s ease-in-out;

  
}

.displaycontainer > div:hover img {
  transform: scale(1.1);
}
  
`;



const Displaycontainer = styled.div`
  display:flex;

  
  gap:60px;
   @media (max-width: 425px) {
   width:100%;
    flex-wrap:wrap;
    height:auto
  }
  .displayitem{
  display:flex;
     width:50%;
     height:300px;
      @media (max-width: 425px) {
      width:100%;
    flex-wrap:wrap;
    height:auto
  }

  @media (max-width: 375px) {
    height: auto;
  }

  @media (max-width: 320px) {
    height: auto;
  }
  
  }
     .displayshop{
  display:flex;
     width:50%;
     height:300px;
      @media (max-width: 425px) {
      width:100%;
    flex-wrap:wrap;
    height:auto
  }
   
  }
     .khesh{
      width:50%;
      height:150px;

     
     }
      .khesh img{
      width:100%;
      height:250px;
      padding:20px;
      }
       .khesh2{
      width:50%;
      height:250px;
      text-align:left;
      line-height:1.6;
      margin-top:20px;
      h2{
        color: rgba(255, 255, 255, 0.729);
         font-family: 'Times New Roman', Times, serif;
        line-height:1.8;
         color: rgba(0, 0, 0, 0.852);
          @media (max-width: 768px) {
         font-size:15px;
  }
         }   

       p{
        font-family: 'Times New Roman', Times, serif;
         line-height: 1.4;
         font-size:18px;
         color: rgba(0, 0, 0, 0.638);

          @media (max-width: 768px) {
         font-size:15px;
  }

  @media (max-width: 425px) {
    height: auto;
  }

  @media (max-width: 375px) {
    height: auto;
  }

  @media (max-width: 320px) {
   font-size:14px;
    height: auto;
  }
      }
     }
`;