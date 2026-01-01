import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const products = await getProducts();
  const query = searchParams.q?.toLowerCase() || "";

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto max-w-7xl py-10 px-4">
      <Link href="/" className="text-xl font-bold mb-10">
        ← Back
      </Link>
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{searchParams.q}"
      </h1>

      {filteredProducts.length === 0 && (
        <p className="text-red-500 font-semibold">
          No products found ❌
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredProducts.map((item: any) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="border p-4 rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain mx-auto"
            />
            <h2 className="mt-2 font-bold text-sm">
              {item.title}
            </h2>
            <p className="text-orange-500 font-semibold">
              ${item.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
