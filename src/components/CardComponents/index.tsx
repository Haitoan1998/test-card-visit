import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardFour from "./CardFour";
import CardThree from "./CardThree";
interface Card {
  template: number;
  name: string;
  job: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  id: number;
  imageFront: string;
  imageBack: string;
}

const CardComponents = (props: Card) => {
  console.log(typeof props.template , props.template)
  const returnCard = () => {
    switch (Number(props.template)) {
      case 1:
        return <CardOne {...props} />;
      case 2:
        return <CardTwo {...props} />;
      case 3:
        return <CardThree {...props} />;
      case 4:
        return <CardFour {...props} />;
      default:
        return <CardOne {...props} />;
    }
  };
  return <div>{returnCard()}</div>
};

export default CardComponents;
