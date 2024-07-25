

import styled from "styled-components";
import image1 from "../Images/alvarez_marsal.jpg";
import image2 from "../Images/liberty-insurance.jpg";
import image3 from "../Images/sanctum.jpg";
import image4 from "../Images/waterfield.jpg";
import image5 from "../Images/mumbai_city.jpg";

const Logo = ()=>{


    return(


        <>
            <Maincontainer>
           
            <div className="diplaycontainer">
            <img src={image1}></img>
      <img src={image2}></img>
      <img src={image3}></img>
      <img src={image4}></img>
      <img src={image5}></img>

            </div>

            </Maincontainer>
        
        </>
    )
}
export default Logo;


const Maincontainer = styled.div`
   max-width: 1370px;
   width:100%;
   height:auto;
  
   
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

  .diplaycontainer{
    display:grid;
         grid-template-columns: repeat(5, 1fr);
         grid-template-rows:1fr;
        gap:2px;
        img{
          width:120px;

           @media (max-width: 375px) {
             width:200px;
            
             padding:5px;
             margin-left:90px;
           }
              @media (max-width: 320px) {
             width:270px;
             padding:5px;
             margin-left:20px;
           }
        }
             @media (max-width: 1024px) {
    height: auto;
  }
    @media (max-width: 768px) {
    height: auto;
  }
    @media (max-width: 425px) {
    height: auto;
    grid-template-columns: repeat(3, 1fr);
         grid-template-rows:repeat(2, 1fr);
        gap:10px;
  }
         @media (max-width: 375px) {
    height: auto;
    grid-template-columns: 1fr;
         grid-template-rows:repeat(5, 1fr);
        gap:10px;
  }

  }
`;

