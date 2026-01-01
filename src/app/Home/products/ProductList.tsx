import Image from "next/image";
import Link from "next/link";


interface Props {
  items: any[];
}

const ProductList = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center"
        >
          <Link href="">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={200}
              className="object-contain mb-4 cursor-pointer"
            />
          </Link>

          <h2 className="font-semibold text-sm text-center">
            {item.title}
          </h2>

          <p className="text-orange-500 font-bold mt-2">
            ${item.price}
          </p>

          <div>
            <Link href={`/product/${item.id}`}>
              <button className="mt-2 bg-orange-500 text-white font-bold px-4 py-2 rounded hover:bg-orange-600 transition">
               View
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
