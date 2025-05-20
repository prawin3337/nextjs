type Params = { params: Promise<{ productid: string }> };

export default async function ProductDetails({ params }: Params) {
    const { productid } = await params;
    return <h1>Product details: {productid}</h1>
}