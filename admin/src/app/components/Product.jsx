"use client";
import Image from "next/image";
import { useState } from "react";
import imageCompression from "browser-image-compression";

export default function Product() {
  const [images, setImages] = useState([]);
  const [price, setPrice]  =useState(null)
  const [category, setCategory] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState("");

  async function uploadImage(event) {
    const imageFile = event.target.files[0];
    const options = {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 1920,
    };
    try {
      console.log("original - ", imageFile.size / 1024 / 1024);
      const compressedFile = await imageCompression(imageFile, options);
      console.log("compressed - ", compressedFile.size / 1024 / 1024);
      setImages(...images, compressedFile);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <form className="my-4" action="">
      <label>Product Name</label>
      <input
        className="form-field" type="text" placeholder="Tecno Camon 19" name="product-name" />
      <label>Category</label>
      <input
        className="form-field" type="text" placeholder="phone" name="product-category" />
      <label>Product Price</label>
      <input
        className="form-field" type="number" min={0} placeholder="20,000" name="product-price" />
      <label>Product Images</label>
      <br />

      <div className="flex gap-1">
        <ul id="images" className="h-20 rounded-md overflow-hidden">
          {/* {imageList.length > 0 && console.log(imageList)} */}
        </ul>
        <div className="form-file-upload flex gap-1 ">
          <label className="flex flex-col justify-center items-center w-20 h-20 rounded-md bg-slate-800  text-white">
            <input
              hidden
              onChange={uploadImage}
              type="file"
              name="product-images"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
              <path
                strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload
          </label>
        </div>
      </div>

      <br />
      <br />
      <label>Product Description</label>
      <textarea className="form-field" />
    </form>
  );
}
