import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <div className="bg-black w-fll h-full p-10 relative z-10">
        <div className="bg-white w-1/2 mx-auto p-5 rounded-md shadow-lg shadow-cyan-500/50">
          TEST
        </div>
      </div>

      <div className="bg-black w-[100vw] h-[100vh] fixed inset-0 z-0" />
    </>
  );
};

export default App;
