import { useEffect, useState } from "react";
import { API } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <section>
      <h2>Our Projects</h2>
      {projects.map(p => (
        <div key={p._id}>
          <img src={p.image} width="200" />
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <button>Read More</button>
        </div>
      ))}
    </section>
  );
}
