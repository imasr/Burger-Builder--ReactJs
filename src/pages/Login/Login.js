import * as React from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.scss";
import AppLogo from "../../assets/images/app_logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [form, setState] = React.useState({
    email: "",
    password: "",
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setState(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
    sessionStorage.setItem("isLogin", true);
    navigate("/");
  };

  return (
    <div className="Login">
      <form onSubmit={onSubmitForm} className="form">
        <label>
          <div>
            <img src={AppLogo} alt="logo_app" />
          </div>
          <div>Sign In</div>
        </label>
        <div className="p1">
          <TextField
            required
            label="Email"
            name="email"
            type="text"
            onChange={onUpdateField}
          />
        </div>
        <div className="p1">
          <TextField
            required
            name="password"
            label="Password"
            type="password"
            onChange={onUpdateField}
          />
        </div>
        <div className="p1">
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
