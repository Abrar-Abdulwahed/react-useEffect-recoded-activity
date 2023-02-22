import DogList from "./DogList";
import Form from "./Form";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [numberOfDogs, setNumberOfDogs] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.message);
      });
  }, [numberOfDogs]);

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={setNumberOfDogs} />
      {/* Uncomment <Form /> */}
      {/* This component should receive the images array */}
      <DogList dogsList={data} />
    </div>
  );
}
