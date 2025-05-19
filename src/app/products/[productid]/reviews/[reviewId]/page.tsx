type Params = { params: Promise<{ productid: string, reviewId: string }> };

export default async function Review({ params }: Params) {
    const {productid, reviewId} = await params;
    return <h1>Review {reviewId} Product {productid}</h1>
}