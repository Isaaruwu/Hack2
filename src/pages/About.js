import React from "react";
import BdayPicker from "../components/BdayPicker"

export default function About() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-14">Select Your Birthyear</h1>
      <BdayPicker></BdayPicker>
    </div>
  );
}
