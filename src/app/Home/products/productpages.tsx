import Banner2 from "../component/Banner2";
import Banner3 from "../component/Banner3";
import ProductList from "./ProductList";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();
 
  const clothes = products.filter(
    (item: any) =>
      item.category === "men's clothing" ||
      item.category === "women's clothing"
  );
 
  const jewelry = products.filter(
    (item: any) => item.category === "jewelery"
  );
 
  const electronics = products.filter(
    (item: any) => item.category === "electronics"
  );

  return (
    <div className="container mx-auto max-w-7xl py-10 space-y-16">
 
      <section>
        <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">
          Clothes Collection
        </h1>
        <ProductList items={clothes} />
      </section>

   <Banner2 />
 
      <section>
        <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">
          Jewelry Collection
        </h1>
        <ProductList items={jewelry} />
      </section>
 
 <Banner3 />
      <section>
        <h1 className="text-3xl font-bold mb-6 text-orange-500 text-center">
          Electronics Collection
        </h1>
        <ProductList items={electronics} />
      </section>

    </div>
  );
}
