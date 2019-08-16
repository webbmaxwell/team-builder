import React from 'react';

function Form() {

  const [list, setList] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setList({ ...note, [event.target.name]: event.target.value })
  }

  return (
    <form>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={note.name}
        onChange={changeHandler}
      />

      <label htmlFor="text">Email Address</label>
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={note.email}
        onChange={changeHandler}
      />
      
      <label htmlFor="">Role</label>
      <input
        type="text"
        name="role"
        placeholder="Enter Role"
        value={note.role}
        onChange={changeHandler}
      />
      <button type="submit">Add to Team</button>
    </form>
  )
}

export default Form;
