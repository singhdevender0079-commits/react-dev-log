import Title from "./Title";
import "./Card.css";
import Description from "./Description";
function Card(){
    return(
     
        <div className="Card">
   <Title  title="Pen"/>
   <Description description="Toten makes worlds best ball pen"/>

   
      <Title title="car"/>
   <Description description="Rubicon makes worlds best car"/>
   </div>
      
    );
}

export default Card; 