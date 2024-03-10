import React from "react";
import useDimensions from "./hooks/useDimensions";

function App() {
  const dimensions = useDimensions();
  return (
    <React.Fragment>
    <div className="bg-yellow-100">
    <h1 className="text-3xl text-center pt-6 font-bold cursor-pointer underline underline-offset-[10px] decoration-wavy">Browser  Window size identifier :</h1> 
    <ul className="h-screen flex justify-around items-center text-2xl font-bold italic underline underline-offset-4 ">
      <li>width : {dimensions.width}</li>
      <li>height : {dimensions.height}</li>
    </ul>
    </div>
    </React.Fragment>
  );
}

export default App;
