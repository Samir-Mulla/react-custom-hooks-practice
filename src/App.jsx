import React from "react";
import useDimensions from "./hooks/useDimensions";

function App() {
  const dimensions = useDimensions();
  return (
    <>
    <h1 className="text-3xl text-center mt-10">Browser  Window size identifier :</h1>
    <ul className="h-screen flex justify-center items-center gap-96 text-2xl font-bold italic underline underline-offset-4">
      <li>width : {dimensions.width}</li>
      <li>height : {dimensions.height}</li>
    </ul>
    </>
  );
}

export default App;
