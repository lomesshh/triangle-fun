import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [firstQue, setFirstQue] = useState("");
  const [secondQue, setSecondQue] = useState("");
  const [thirdQue, setThirdQue] = useState("");
  const [fourthQue, setFourthQue] = useState("");
  const [fifthQue, setFifthQue] = useState("");
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState("none");

  const incOp = () => {
    if (
      firstQue !== "" &&
      secondQue !== "" &&
      thirdQue !== "" &&
      fourthQue !== "" &&
      fifthQue !== ""
    ) {
      firstQue === "3"
        ? setCount((prev) => prev + 1)
        : setCount((prev) => prev);
      secondQue === "right angle"
        ? setCount((prev) => prev + 1)
        : setCount((prev) => prev);
      thirdQue === "acute angle"
        ? setCount((prev) => prev + 1)
        : setCount((prev) => prev);
      fourthQue === "pythagoras"
        ? setCount((prev) => prev + 1)
        : setCount((prev) => prev);
      fifthQue === "3"
        ? setCount((prev) => prev + 1)
        : setCount((prev) => prev);
      setStyle("block");
      setMessage("Your Score is : ");
    } else {
      setMessage("Please fill all fields properly");
    }
  };

  return (
    <div className="App">
      <div>
        <div>
          <form>
            <h1>Lets Play the Triangle Quiz !</h1>
            <h1>How many acute angles must an acute triangle have ? Ans: 3</h1>
            <input
              type="text"
              onChange={(eve) => {
                setFirstQue(eve.target.value);
              }}
            />
            <h1>
              An angle whose measure is exactly 90 degrees ? ans:right angle
            </h1>
            <input
              type="text"
              onChange={(eve) => {
                setSecondQue(eve.target.value);
              }}
            />
            <h1>An angle which measures less than 90 is ? ans: acute angle</h1>
            <input
              type="text"
              onChange={(eve) => {
                setThirdQue(eve.target.value);
              }}
            />
            <h1>
              Which ancient Greek philosopher studied triangles ? ans:
              pythagoras
            </h1>
            <input
              type="text"
              onChange={(eve) => {
                setFourthQue(eve.target.value);
              }}
            />
            <h1>How many sides does a triangle have ? ans: 3</h1>
            <input
              type="text"
              onChange={(eve) => {
                setFifthQue(eve.target.value);
              }}
            />
          </form>
          <br />
          <br />
          <h1>
            {message}
            <span style={{ display: style }}>{count}</span>
          </h1>
          <button onClick={incOp}>Click To Check Your Score</button>
        </div>
      </div>
    </div>
  );
};

export default App;
