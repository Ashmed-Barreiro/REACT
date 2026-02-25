import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
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
      <button onClick={loadUsers} disabled={loading}>
        {loading ? "Cargando..." : "Cargar usuarios"}
      </button>

      <ul>
        {users.map((user) =>( 
          <li key={user.id}>
            Nombre: {user.name}<br></br>
            Email: {user.email}<br></br>
            <NavLink to ="/details/{}">Detalles </NavLink>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
