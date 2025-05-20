import Link from "next/link";

export default function Home() {
  const navLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Products', href: '/products' }
  ];
  return (
    <ul>
      {navLinks.map(nav => {
        return <li key={nav.label}><Link href={nav.href}>{nav.label}</Link></li>
      })}
    </ul>
  );
}
