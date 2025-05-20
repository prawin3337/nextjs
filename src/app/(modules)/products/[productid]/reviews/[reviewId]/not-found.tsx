// Does not accept the props
"use client"

import {usePathname} from "next/navigation"

export default function NotFound() {
    const pathname = usePathname();

    return <h1>Review not found.. {pathname}</h1>
}