import { useContext } from "react";
import AuthContext from "./authContext";
import useAuth from "./useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "ceci.benitez" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;