'use client';
import Image from "next/image";
import Link from "next/link"
import ProductCard from "./component/ProductCard"

export default function Home() {
  return (
   <main>
    <h1>Hello World</h1>
    <Link href="/user">user</Link>
    <ProductCard/>
   </main>
  ); 
}
