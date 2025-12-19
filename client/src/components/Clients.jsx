import { useEffect, useState } from "react";
import { API } from "../api";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get("/clients").then(res => setClients(res.data));
  }, []);

  return (
    <section>
      <h2>Happy Clients</h2>
      {clients.map(c => (
        <div key={c._id}>
          <img src={c.image} width="150" />
          <p>{c.description}</p>
          <strong>{c.name}</strong>
          <p>{c.designation}</p>
        </div>
      ))}
    </section>
  );
}
