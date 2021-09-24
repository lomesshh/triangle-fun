import React, { useState } from "react";

const Area = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    if (firstValue !== "" && secondValue !== "") {
      var finalResult = 0.5 * (firstValue * secondValue);
      console.log(finalResult);
      setMessage("Area of Triangle is : " + finalResult + " square meters");
    } else {
      setMessage("Please fill all fields properly");
    }
  };

  return (
    <div>
      <div>
        <h1>Lets Check the Area of Triangle </h1>
        <h1>Enter Base Value for Area :</h1>
        <input
          type="number"
          onChange={(e) => {
            setFirstValue(e.target.value);
          }}
        />
        <h1>Enter Height value for Area : </h1>
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

export default Area;
