"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const navLinks = [
        { label: 'Home', href: '/blog' },
        { label: 'Product 1', href: '/products/1?name=Product 1' },
        { label: 'Product 2', href: '/products/2' },
        { label: 'Product 3', href: '/products/3' },
        { label: 'Custome reviews', href: '/products/customer-reviews?name=Product 1&&clientSide=true' }
      ];
    return <div>
        <h2>LHN</h2>
        <ul>
            {navLinks.map(nav => {
                const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && (nav.href !== "/"))
                return <li key={nav.label}>
                    <Link className={isActive ? "font-bold" : "text-blue-500"} href={nav.href}>{nav.label}</Link>
                </li>
            })}
        </ul>
        {children}
    </div>
}