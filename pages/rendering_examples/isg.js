// incremental static regeneration
// import { YOUR_API_URL } from '../lib/api';

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("https://63aafbc3fdc006ba60520169.mockapi.io/name");
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 5, // In seconds
  };
}