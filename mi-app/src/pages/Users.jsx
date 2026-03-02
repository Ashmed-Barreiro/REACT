import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      // Este fetch coge los datos desde public en local
      const res = await fetch("/data/db.json");
      const data = await res.json();
      setUsers(data);
    };

    loadUsers();
  }, []);

  return (
    <div className="users-page">
      <h1 className="users-title">Users</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li className="user" key={user.id}>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <img
              src={"/img/" + user.name + ".png"}
              alt={user.name + " Image"}
            />
            {/**
             * <img 
                src="product-800.webp"
                srcset="
                   product-400.webp 400w,
                   product-800.webp 800w,
                   product-1200.webp 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Producto ejemplo"
                loading="lazy">
             */}
            <NavLink to={"/details/" + user.id}>Detalles </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
