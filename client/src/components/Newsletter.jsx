import { useState } from "react";
import { API } from "../api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    await API.post("/subscribers", { email });
    alert("Subscribed");
  };

  return (
    <section>
      <h2>Newsletter</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={subscribe}>Subscribe</button>
    </section>
  );
}
