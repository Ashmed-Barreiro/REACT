import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      // Este fetch coge los datos de una web externa
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={loadUsers}>Cargar Usuarios</button>

      <ul>
        {users.map((user) =>( 
          <li key={user.id}>
            Nombre: {user.name}<br></br>
            Email: {user.email}<br></br>
            <NavLink to={"/details/" + user.id} >Detalles </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
