import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import SubmitButton from "./SubmitButton";
import SubHeading from "./SubHeading";
import InputQuery from "./InputQuery";
const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubmitButton />
      <SubHeading />
      < InputQuery/>
    </div>
  )
}

export default App;


