import Image from "next/image";
import Banner from "./Home/component/Banner";
import Pentspages from "./Home/products/productpages";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl py-10">
      <Banner/>
      
      <Pentspages />
    </div>
    
    </>
  );
}
