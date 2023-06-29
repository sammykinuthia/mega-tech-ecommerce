import Product from "../../components/Product";
export default function Page() {
  return (
    <div className="">
      <h1 className="border-b-2 font-extrabold text-3xl px-2 py-2">
        New product
      </h1>
      <div className=" mx-4">
        <Product />
      </div>
    </div>
  );
}
