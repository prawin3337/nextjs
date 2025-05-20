"use client";

import { useRouter } from "next/navigation";
import { use } from "react"; // async/await will not work for client component. instead use 'use' hook to get params.

function getRandomInt() {
    return Math.floor(Math.random() * 2);
}

export default function CustomerReviews({ searchParams }: { searchParams: Promise<{ name: string, clientSide: boolean }>}) {
    const router = useRouter();
    const { name, clientSide } = use(searchParams);
    const handleClick = () => {
        router.push('/');
    }
    if (getRandomInt() === 1) {
        throw new Error("Error loading...")
    }
    return(
        <div>
            <button onClick={() => handleClick()}>Back to home</button>
            <br/>
            <h1>Get Customer Reviews</h1>
            <span>Product Name: {name}</span><br/>
            <span>Is clinet side: {clientSide}</span>
        </div>
    )
}