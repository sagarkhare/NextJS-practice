import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

//For rendering examples
// export default function Home() {
//   return (
//     <>
//     <Link href='rendering_examples/csr'>CSR Page</Link><br/>
//     <Link href='rendering_examples/ssr'>SSR Page</Link><br/>
//     <Link href='rendering_examples/ssg'>SSG Page</Link><br/>
//     <Link href='rendering_examples/isg'>ISG Page</Link><br/>
//     </>
//   )
// }

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('routingTut/product');
    // router.replace('routingTut/product');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='routingTut/blog'>Blog</Link><br/>
      <Link href='routingTut/product'>Products</Link><br/>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
