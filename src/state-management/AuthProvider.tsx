import React, { ReactNode, useReducer } from "react";
import AuthContext from "./contexts/authContext";
import authReducer from "./reducers/authReducer";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;