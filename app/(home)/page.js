import Products from "./_components/product.jsx";
import Sidenav from "./_components/sidenav.jsx";
export default function Home() {
  return (
    <div className="flex gap-6 my-6 px-12">
      <div className="flex-1/3">
        <Sidenav />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
