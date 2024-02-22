import { useLoaderData } from "react-router-dom";
import SingleUser from "../components/SingleUser";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>Our User list : {users.length}</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {users.map((user) => (
          <SingleUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
