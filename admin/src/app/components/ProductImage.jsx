"use client";
import Image from "next/image";
import { useState } from "react";
import imageCompression from "browser-image-compression";

export default function ProductImage() {
  let [image, setImage] = useState(null);

  async function uploadImage(event) {
    const imageFile = event.target.files[0];
    const options = {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 1920,
    };
    try {
      console.log("original - ",imageFile.size / 1024 / 1024);
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressed - ',compressedFile.size / 1024 / 1024);
      setImage(compressedFile);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </label>
      </div>
    </div>
  );
}
