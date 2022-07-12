import React from 'react'

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};
export default function ToDO() {
  return (
    <div>
      <h1>To Do Lists</h1>
      <h2>Today</h2>
      <List tasks={["Walk", "Cook", "Bake"]} />
      <h2>Tomorrow</h2>
      <List tasks={["Study", "Code", "Eat"]} />
    </div>
  );
}
