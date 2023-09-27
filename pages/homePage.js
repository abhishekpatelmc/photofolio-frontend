import React, { useState } from "react";
import Post from "./post";
import OnlyImages from "./onlyImages";

const homePage = () => {
  const [Image, setImage] = useState(null);

  const onImageChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", Image);

    const res = await fetch(`http://localhost:8080/api/v1/image/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await res;
    // console.log(data);
  };

  return (
    <div className="m-10">
      <div className="flex justify-between align-middle">
        <div>
          <h1 className="font-bold text-3xl tracking-wide text-blue-700">
            PhotoFolio
          </h1>
        </div>
        <div className="flex">
          <input
            type="file"
            onChange={(e) => {
              onImageChange(e);
            }}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-blue-700 hover:file:bg-violet-100"
          />
          {Image && (
            <button
              onClick={() => uploadImage()}
              type="button"
              className="block w-fit mr-4 py-2 px-6 rounded-full border-0 text-sm font-semibold bg-violet-300 text-blue-700 hover:bg-violet-100 hover:text-blue-700"
            >
              Upload
            </button>
          )}
        </div>
      </div>
      <div className="mt-8 grid gap-y-8 xl:grid-cols-4 md:grid-cols-2 md:gap-x-8">
        <OnlyImages />
      </div>
    </div>
  );
};

export default homePage;
