import React, { useState } from "react";

const Task = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");

  const addData = () => {
    if (newData.trim() !== ""){
        setData((data) => [...data, newData]);
        setNewData("");
    }
  };

  const deleteData = (index) => {
    const updatedTasks = data.filter((_, i) => i !== index);
    // console.log(updatedTasks)
    setData(updatedTasks);
  };

  const moveUp = (index)  => {
    if (index > 0) {
        const updatedTasks = [...data];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
        setData(updatedTasks);
    }
  }
  
  const moveDown = (index)  => {
    if (index < data.length - 1) {
        const updatedTasks = [...data];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setData(updatedTasks);
    }
  }

  return (
    <>
    <header style={{fontSize: "2rem"}}>To Do List</header>
      <section>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
        />
        <button onClick={() => addData(newData)}>Add To List</button>
      </section>
      <section>
        <ol style={{ listStyle: "none" }}>
          {data.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteData(index)}>Delete</button>
              <button onClick={() => moveUp(index)}>Move Up</button>
              <button onClick={() => moveDown(index)}>Move Down</button>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export { Task };
