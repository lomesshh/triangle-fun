import React, { useState } from "react";

const Valid = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [message, setMessage] = useState("");

  const clickHandler = () => {
    if (firstValue !== "" && secondValue !== "" && thirdValue !== "") {
      var finalResult = +firstValue + +secondValue + +thirdValue;
      // console.log(finalResult);
      if (finalResult === 180) {
        setMessage("Congrats Your Triangle is Perfectly Valid");
      } else {
        setMessage("Sorry ! But Your Triangle is Not valid");
      }
    } else {
      setMessage("Please fill all fields properly");
    }
  };

  return (
    <div>
      <div>
        <h1>Lets Check Triangle is Valid or Not</h1>
        <h1>Enter First Angle :</h1>
        <input
          type="number"
          onChange={(e) => {
            setFirstValue(e.target.value);
          }}
        />
        <h1>Enter Second Angle : </h1>
        <input
          type="number"
          onChange={(eve) => {
            setSecondValue(eve.target.value);
          }}
        />
        <h1>Enter Third Angle : </h1>
        <input
          type="number"
          onChange={(event) => {
            setThirdValue(event.target.value);
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

export default Valid;
