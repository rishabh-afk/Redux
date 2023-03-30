import React from "react";

const Error = () => {
  return (
    <div className="h-screen">
      <div className="text-9xl flex flex-col translate-y-full items-center">
        <h1 className="font-semibold text-cyan-500">404 Error</h1>
        <p className="text-6xl text-cyan-600">Page Not Found!</p>
      </div>
    </div>
  );
};

export default Error;
