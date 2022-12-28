import { useRouter } from "next/router";

function ProductDetails() {
    const router = useRouter();
    // console.log(router);
    const queryres = router.query.productId;
    return (
        <h1>
            Details about Product {queryres}
        </h1>
    );
}

export default ProductDetails;