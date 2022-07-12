import "./App.css";
import React, { useState } from "react";

export default function MyComponent() {
  const [message] = useState("Welcome to Techmojo!");
  const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>;
  };
  return (
    <div>
      <Child state="default"></Child>
      <Child state="bar"></Child>
      <Child state="foo"></Child>
      <h3>What date is it?</h3>
      <CurrentDate date={Date()} />
      <h1>{message} </h1>

      <h1>To Do Lists</h1>
      <h2>Today</h2>
      <List tasks={["Walk", "Cook", "Bake"]} />
      <h2>Tomorrow</h2>
      <List tasks={["Study", "Code", "Eat"]} />
    </div>
  );
}

const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is: {props.date}</p>
      {/* Change code above this line */}
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <h1>{props.state.toUpperCase()}</h1>
    </div>
  );
};
