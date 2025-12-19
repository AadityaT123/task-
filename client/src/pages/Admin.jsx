import { API } from "../api";

export default function Admin() {

  const addProject = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await API.post("/projects", formData);
    alert("Project added");
  };

  return (
    <>
      <h1>Admin Panel</h1>

      <form onSubmit={addProject}>
        <h2>Add Project</h2>
        <input type="file" name="image" />
        <input name="name" placeholder="Name" />
        <input name="description" placeholder="Description" />
        <button>Add</button>
      </form>
    </>
  );
}
