import React, { useState } from 'react';

function Form() {

  const [list, setList] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setList({ ...list, [event.target.name]: event.target.value })
  }

  return (
    <form className="form">
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={list.name}
        onChange={changeHandler}
      />

      <label htmlFor="text">Email Address</label>
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={list.email}
        onChange={changeHandler}
      />

      <label htmlFor="">Role</label>
      <input
        type="text"
        name="role"
        placeholder="Enter Role"
        value={list.role}
        onChange={changeHandler}
      />
      <button type="submit">Add to Team</button>
    </form>
  )
}

export default Form;
