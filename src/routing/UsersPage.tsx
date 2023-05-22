import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import UserList from "./UserList";

const UsersPage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="row">
      <div className="col-6">
        <UserList />
      </div>
      <div className="col-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
