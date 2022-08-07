import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <button className="submit" align="center">
          Sign in
        </button>
        <h4 className="forgot" align="center">
          <p >Forgot Password? </p>
        </h4>
      </form>
    </div>
  );
}

export default Form;