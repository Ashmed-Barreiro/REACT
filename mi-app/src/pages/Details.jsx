import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Details() {
  const  userId  = Number(useParams().id);
  const [users, setUsers] = useState([]);

useEffect(() => {
    const loadUsers = async () => {
        // Este fetch coge los datos desde public en local
      const res = await fetch("/data/db.json");
      const data = await res.json();
      setUsers(data);
    };

    loadUsers();
  }, []);
    const user = users.find(u => u.id === userId)
    if(!user) {return(<><p>Usuario no encontrado...</p></>)}

  return (
    <div><h1>Details</h1>
    <p>Nombre: {user.name}</p>
    <p>username: {user.username}</p>
    <p>Company: {user.company.name}</p>
    </div>)
  
}
