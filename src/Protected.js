import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const isLogin = sessionStorage.getItem("isLogin");
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (sessionStorage.getItem("isLogin")) {
    return <Component />;
  } else return;
};
export default Protected;
