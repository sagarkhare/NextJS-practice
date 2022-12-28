import { useRouter } from "next/router";

function ReviewDetails() {
    const router = useRouter();
    const { productId, reviewId } = router.query;
    return (
        <h1>
            Product {productId} Review Details {reviewId}
        </h1>
    );
}

export default ReviewDetails;