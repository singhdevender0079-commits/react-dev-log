import Title from "./Title";
import "./Card.css";
import Description from "./Description";
function Card(){
    let options = ["hi-tech","durable","fast"];
    return(
        <div className="Card">
   <Title  title="Pen"/>
   <Description description="Toten makes worlds best ball pen" features={options} features2={{a:"good",b:"best",c:"excellent"}}/>
      <Title title="car"/>
   <Description description="Rubicon makes worlds best car" features2={{a:"good",b:"best",c:"excellent"}}/>
   </div>
    );
}

export default Card;