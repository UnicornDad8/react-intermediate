import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();

  return (
    <div>
      <p>User {params.id}</p>
    </div>
  );
};

export default UserDetail;
