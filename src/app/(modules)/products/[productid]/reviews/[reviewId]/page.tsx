import { notFound } from "next/navigation";

type Params = { params: Promise<{ productid: string, reviewId: string }> };

export default async function Review({ params }: Params) {
    const {productid, reviewId} = await params;

    if(parseInt(reviewId) > 100) {
        notFound();
    }

    return <h1>Review {reviewId} Product {productid}</h1>
}