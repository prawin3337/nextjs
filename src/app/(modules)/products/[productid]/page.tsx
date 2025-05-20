import { Metadata } from "next";

type TParams = { params: Promise<{ productid: string }>, searchParams: Promise<{name: string}> };

export const generateMetadata = async ({ params }: TParams): Promise<Metadata> => {
    const { productid } = await params;
    return {
        title: `Product Id ${productid}`
    }
}

export default async function ProductDetails({ params, searchParams }: TParams) {
    const { productid } = await params;
    const { name } = await searchParams;
    return <h1>Product details: {productid} Name: {name}</h1>
}