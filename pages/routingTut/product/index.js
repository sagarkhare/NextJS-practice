import Link from "next/link";

//Dynamic Routes
export default function ProductList({productId = 100}) {
    return (
        <div>
            <h1><Link href='/routingTut/product/1'>Product 1</Link></h1>
            <h1><Link href='/routingTut/product/2'>Product 2</Link></h1>
            <h1><Link href='/routingTut/product/3' replace>Product 3</Link></h1>
            <Link href = {`/routingTut/product/${productId}`}>Product 100</Link>
        </div>
    );
}