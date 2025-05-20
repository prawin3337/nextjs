"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    const [input, setInput] = useState(''); // in layout file state does not change in navigation, it preserved.
    return (
        <html lang="en">
            <body>
                <div>
                    <input onChange={(event) => setInput(event.target.value)} value={input}/>
                </div>
                <ul>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/forgot-password">Forgot Password</Link></li>
                </ul>
                {children}
            </body>
        </html>
    );
}
