import { Metadata } from "next";

type Params = { params: Promise<{ productid: string }> };

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
    const { productid } = await params;
    return {
        title: `Product Id ${productid}`
    }
}

export default async function ProductDetails({ params }: Params) {
    const { productid } = await params;
    return <h1>Product details: {productid}</h1>
}