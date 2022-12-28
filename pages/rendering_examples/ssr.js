// server side rendering
// import { YOUR_API_URL } from '../lib/api';

export default function ServerSideRendered({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://63aafbc3fdc006ba60520169.mockapi.io/name");
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}