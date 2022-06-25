import { useState } from "react";

// function components
export const Card = ({ chibaku, show }) => {
  // State - biến = useState()

  const getData = () => {
    return <div>tuanh</div>;
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (evt) => {
    // evt.target.value
    console.log(evt.target.value);
    setUsername(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    // evt.target.value
    // evt.target = document.quey..('')
    console.log(evt.target);
    console.log(evt.currentTarget);
    setPassword(evt.target.value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  };

  // render
  return (
    <>
      {getData()}
      <div className="tuanh">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button type="submit">Submit</button>
        </form>
        {show === true ? <div>Tao là nhất</div> : <div>Rõ ràng luôn</div>}
      </div>
    </>
  );
};
