import { useState } from "react";
import { API } from "../api";

export default function ContactForm() {
  const [form, setForm] = useState({});

  const submit = async e => {
    e.preventDefault();
    await API.post("/contact", form);
    alert("Submitted");
  };

  return (
    <form onSubmit={submit}>
      <h2>Contact Us</h2>
      <input placeholder="Full Name" onChange={e => setForm({...form, fullName:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input placeholder="Mobile" onChange={e => setForm({...form, mobile:e.target.value})} />
      <input placeholder="City" onChange={e => setForm({...form, city:e.target.value})} />
      <button>Submit</button>
    </form>
  );
}
