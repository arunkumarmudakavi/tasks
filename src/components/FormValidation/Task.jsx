import React from "react";

const Task = () => {
  return (
    <>
      <form>
        <section className="flex p-5 bg-gray">
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter Email" />
          <input type="text" placeholder="Enter Mobile Number" />
        </section>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export { Task };
