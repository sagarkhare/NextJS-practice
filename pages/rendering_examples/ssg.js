// static site generation
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
  
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
  export async function getStaticProps() {
    const res = await fetch("https://63aafbc3fdc006ba60520169.mockapi.io/name");
    const data = await res.json();
  
    return {
      props: {
        data, // will be passed to the page component as props
      },
    };
  }