import React, { useState } from "react";
import Heading from "./App/Heading";

const data = [
  {
    id: 1,
    name: "Hadi",
    age: "23",
    status: "Developer",
  },
  {
    id: 2,
    name: "Wali",
    age: "23",
    status: "Python Developer",
  },
  {
    id: 3,
    name: "Sherazi",
    age: "20",
    status: "AI Developer",
  },
];

const defaultValues = {
  name: "",
  status: "",
  age: "",
};

const App = () => {
  const [list, setList] = useState(data);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState("");

  const addElementInListArr = () => {
    if (name === "" || status === "" || age === "") {
      alert("Name, Status & Age are required to add Info");
    } else {
      const newPerson = {
        name,
        status,
        age,
        id: new Date(),
      };

      setList([...list, newPerson]);

      setName(defaultValues.name);
      setStatus(defaultValues.status);
      setAge(defaultValues.age);
    }
  };

  const deleteInfo = (id) => {
    const updatedList = list.filter((x) => x.id !== id);
    setList(updatedList);
  };

  const AddName = (inputProp) => {
    setName(inputProp.target.value);
  };

  const AddStatus = (inputProp) => {
    setStatus(inputProp.target.value);
  };

  const AddAge = (inputProp) => {
    setAge(inputProp.target.value);
  };

  return (
    <div className="container">
      <Heading />
      <div className="inbox">
        <input className="box inputs" placeholder="Enter your Name" value={name} onChange={AddName} />
        <input className="box inputs" placeholder="Enter your Status" value={status} onChange={AddStatus} />
        <input type="number" className="box inputs" placeholder="Enter your Age" value={age} onChange={AddAge} />
      </div>
      <button className="box btns" onClick={addElementInListArr}>
        Add Info
      </button>

      {list.map((x) => {
        return (
          <div key={x.id} className="box">
            {x.name} - {x.status} - {x.age}
            <button className="delete-btn" onClick={() => deleteInfo(x.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
