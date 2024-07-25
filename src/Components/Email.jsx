

import styled from "styled-components";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const { Search } = Input;


const Email =()=>{
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
        <h1 data-aos="slide-up">Join the Beez community</h1>
        <p data-aos="slide-up">and explore the world of sustainability, get updates on our collection,
            collaboation,and more!

        </p>
       </div>
       <div className="box2">
       <Space direction="vertical" size="large">
       <Space.Compact
      style={{
        width: '100%',
       
      }}
    >
      <Input defaultValue="Email" />
      <button style={{backgroundColor:"#4b3f2da3",color:"white",border:"none",borderRadius:"0 10px 10px 0",padding:"10px"}} type="primary " >Submit</button>
    </Space.Compact>
    </Space>
       </div>
       </Subcontainer>
        </Maincontainer>
        </>
    )
}
export default Email;

const Maincontainer = styled.div`
max-width: 1370px;
   width:100%;
   height:120px;
      background-color: #4b3f2dc2;
 
   
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
`;

const Subcontainer = styled.div`
 
  display:flex;
  justify-content:space-between;

  .box1{
    width:50%;
    height:auto;
  
    text-align:left;

     @media (max-width: 768px) {
      width:60%;
    height: auto;
  }

  @media (max-width: 425px) {
   width:40%;
    height: auto;
  }

  @media (max-width: 375px) {
    height: auto;
  }

  @media (max-width: 320px) {
    height: auto;
  }

    h1{
       font-size:40px;
        font-family: 'Times New Roman', Times, serif;
      color: rgba(255, 255, 255, 0.557);
     line-height: 1.3;
     letter-spacing: 1.2px;
     text-align:left;
       @media (max-width: 768px) {
      font-size:35px;
    height: auto;
  }

  @media (max-width: 425px) {
  font-size:22px;
    height: auto;
  }

  @media (max-width: 375px) {
    height: auto;
  }

  @media (max-width: 320px) {
    height: auto;
  }
    
    }
     p{
       font-family: 'Times New Roman', Times, serif;
         line-height: 1.0;
         font-size:20px;
         @media (max-width: 425px) {
  font-size:15px;
    height: auto;
  }
     }
  }
    .box2{
      width:40%;
      height:70px;
    
      margin-top:20px;
      
     @media (max-width: 768px) {
      width:30%;
    height: auto;
  }

  @media (max-width: 425px) {
     width:40%;
    height: auto;
  }

  @media (max-width: 375px) {
    height: auto;
  }

  @media (max-width: 320px) {
    height: auto;
  }
    }
`;