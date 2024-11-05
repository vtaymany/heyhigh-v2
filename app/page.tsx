// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  attributes: {
    name: string;
    main_image: string;
    thc: { amount: string };
    unit_price: { amount: number };
    discount_price?: { amount: number };
    flower_type: string;
    brand: { data: { attributes: { name: string } } };
  };
}

interface ProductData {
  data: Product[];
}

const productData: ProductData = {
  data: [
    {
      id: 389044,
      attributes: {
        name: "Strawberry Champagne (H) | 1g Pod | Plugplay",
        main_image:
          "https://tymber-blaze-products.imgix.net/f759f174-c256-42ad-b0bb-ed1c37a9f6a3.jpeg",
        thc: { amount: "88.29" },
        unit_price: { amount: 3200 },
        discount_price: { amount: 2816 },
        flower_type: "Hybrid",
        brand: { data: { attributes: { name: "PlugPlay" } } },
      },
    },
    {
      id: 389043,
      attributes: {
        name: "Mango Mang (H) | 1g Pod | Plugplay",
        main_image:
          "https://tymber-blaze-products.imgix.net/68cfef08-7469-4933-9989-7bb71d89bf9b.jpeg",
        thc: { amount: "87.48" },
        unit_price: { amount: 3200 },
        discount_price: { amount: 2816 },
        flower_type: "Hybrid",
        brand: { data: { attributes: { name: "PlugPlay" } } },
      },
    },
    {
      id: 244227,
      attributes: {
        name: "Skywalker OG (H) | 1g pod | Stiiizy",
        main_image:
          "https://tymber-blaze-products.imgix.net/f759f174-c256-42ad-b0bb-ed1c37a9f6a3.jpeg",
        thc: { amount: "87.64" },
        unit_price: { amount: 3000 },
        discount_price: { amount: 2700 },
        flower_type: "Hybrid",
        brand: { data: { attributes: { name: "Stiiizy" } } },
      }
    }
    // Add more product data here as needed
  ],
};

export default function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredProducts = productData.data.filter(
    (product) =>
      product.attributes.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (filterType === "all" ||
        product.attributes.flower_type.toLowerCase() === filterType)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Cannabis Products</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Label htmlFor="type-filter">Filter by Type</Label>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger id="type-filter">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="indica">Indica</SelectItem>
              <SelectItem value="sativa">Sativa</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.attributes.main_image || "/placeholder.svg"}
                  alt={product.attributes.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">
                {product.attributes.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {product.attributes.brand.data.attributes.name}
              </p>
              <p className="text-sm mb-2">
                THC: {product.attributes.thc.amount}%
              </p>
              <p className="text-sm mb-2">
                Type: {product.attributes.flower_type}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                  $
                  {(product.attributes.discount_price?.amount ||
                    product.attributes.unit_price.amount) / 100}
                </p>
                {product.attributes.discount_price && (
                  <p className="text-sm line-through text-gray-500">
                    ${product.attributes.unit_price.amount / 100}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
