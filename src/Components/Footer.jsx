


import styled from "styled-components";


const Footer = ()=>{

    return(

        <>
         <Maincontainer>

         <div className="displaycontainer">
  <div className="box1">
  <h3>Navigate</h3>
            <p>Shop</p>
            <p>Sustainability</p>
          <ul className="box2inner">
            <li>Our Planet</li>
            <li>Our people</li>
            <li>Our partners</li>
            <li>Green story</li>
            <li>certification</li>
           
          </ul>
  </div>
  <div className="box2">
  <div>
  <h3>About</h3>
            <ul className="box2inner">
             <li>Our story</li>
             <li>Our story</li>
             <li>Our Philosopy</li>
             
            </ul>
            <p>Custom Craft</p>
            <p>Corporate</p>
            </div>
  <div>
            <ul>
            <li>Atelier</li>
            <li>Journal</li>
            <li>Press & media</li>
         </ul>
         </div>
  </div>
  <div className="box3">
    <div>
  <ul>
            <li>Atelier</li>
            <li>Journal</li>
            <li>Press & media</li>
         </ul>
         </div>
         <div>
         <h3>Social</h3>
         </div>

  </div>
  <div className="box4">
    <h3>beez</h3>
  </div>
 
</div>

       

         </Maincontainer>
        </>
    )
}
export default Footer;

const Maincontainer = styled.div`
max-width: 1370px;
   width:100%;
   height:auto;
     background-color: #4b3f2da9;
 
   
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 15px;

   @media (max-width: 425px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
    height: auto;
  }

  @media (max-width: 375px) {
   display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
    height: auto;
  }

  @media (max-width: 320px) {
   display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
    height: auto;
  }
}

.displaycontainer > div {

  height: 200px; 
 
 
  
}
  .box1{
    text-align:left;

  }
     .box1 h3{
          font-family: 'Times New Roman', Times, serif;
           color: rgba(255, 255, 255, 0.729);
      }
           p{
            color: rgba(255, 255, 255, 0.474);
           }
  .box2{
    display:flex;
   justify-content: space-between;
   text-align:left;

   
 

  @media (max-width: 320px) {
    height: auto;
  }
  }
   .box2 h3{
          font-family: 'Times New Roman', Times, serif;
           color: rgba(255, 255, 255, 0.729);
      }
   .box3{
     display:flex;
     justify-content:space-evenly;
     text-align:left;
      @media (max-width: 375px) {
        justify-content:space-between;
    height: auto;
  }
     @media (max-width: 320px) {
        justify-content:space-between;
    height: auto;
  }
   }
     .box3 h3{
          font-family: 'Times New Roman', Times, serif;
           color: rgba(255, 255, 255, 0.729);


      }
 .box4 h3{
          font-family: 'Times New Roman', Times, serif;
           color: rgba(255, 255, 255, 0.729);
             @media (max-width: 375px) {
        text-align:left;
    height: auto;
  }
     @media (max-width: 320px) {
       text-align:left;
    height: auto;
}
             
      }
`;

