import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UsersPage = () => {
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
