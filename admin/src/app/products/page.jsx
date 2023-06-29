"use client"
import { useRouter } from "next/navigation";

export default function Page() {
const route = useRouter()
  return (
    <div className="">
    <button onClick={()=>route.push("products/new")} className="btn-primary">Add Product</button>
    </div>
  );
}
