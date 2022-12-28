// client side rendered
import { useEffect, useState } from "react";
// import { YOUR_API_URL } from '../lib/api';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);
  async function getData() {
    const res = await fetch("https://63aafbc3fdc006ba60520169.mockapi.io/name");
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}
