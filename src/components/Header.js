import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="m-12">
      <div className="p-3 bg-purple-500 rounded-3xl border-2 border-purple-800">
        <h1 className="text-purple-200 text-3xl animate-pulse">
          Fun With Triangles
        </h1>
        <h1 className="text-purple-200 text-2xl">
          I have created this small informative app related to triangles. I hope
          you will enjoy it !
        </h1>
      </div>
      <div className="p-3 bg-purple-500 rounded-3xl mt-6 border-2 border-purple-800">
        <h1 className="text-purple-200 text-2xl mb-4 animate-pulse">
          Select what you want to play ?
        </h1>
        <div className="flex items-center justify-around animate-bounce ml-4 mr-4 mb-4 text-purple-300 ">
          <Link to="/quiz">
            <button className="p-2 bg-purple-700 rounded-lg border-2 border-purple-800">
              🛆 Quiz
            </button>
          </Link>
          <Link to="/hypotenuse">
            <button className="p-2 bg-purple-700 rounded-lg border-2 border-purple-800">
              Hypotenuse of 🛆
            </button>
          </Link>

          <Link to="/area">
            <button className="p-2 bg-purple-700 rounded-lg border-2 border-purple-800">
              Area of 🛆
            </button>
          </Link>

          <Link to="/valid">
            <button className="p-2 bg-purple-700 rounded-lg border-2 border-purple-800">
              valid 🛆 or not ?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
