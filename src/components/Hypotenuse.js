import React, { useState } from "react";

const Hypotenuse = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    if (firstValue === "" && secondValue === "") {
      setMessage("Please fill all fields properly");
    } else {
      var finalResult = firstValue * firstValue + secondValue * secondValue;
      const final = Math.sqrt(finalResult);
      console.log(final);
      setMessage("Hypotenuse of Triangle is : " + final + " inches");
    }
  };

  return (
    <div>
      <div>
        <h1>Lets Check the Hypotenuse of Triangle </h1>
        <h1>Enter Base Value for Hypotenuse :</h1>
        <input
          type="number"
          onChange={(e) => {
            setFirstValue(e.target.value);
          }}
        />
        <h1>Enter Height value for Hypotenuse : </h1>
        <input
          type="number"
          onChange={(eve) => {
            setSecondValue(eve.target.value);
          }}
        />
        <br />
        <br />
        <h1>{message}</h1>
        <button onClick={clickHandler}>Click to Check</button>
      </div>
    </div>
  );
};

export default Hypotenuse;
