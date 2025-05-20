"use client"

import { useState } from "react"

export default function CounterClient() {
    const [cnt, setCnt] = useState(0);
    return <div>
        <div>{cnt} Clicks</div>
        <button onClick={() => setCnt(cnt => cnt+1)}>Click</button>
    </div>
}