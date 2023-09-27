import React, { useEffect, useState } from "react";

const OnlyImages = () => {
  const [images, setImages] = useState([]);

  const fetchOnlyImages = async () => {
    const res = await fetch("http://localhost:8080/api/v1/s3images");
    const data = await res.json();
    setImages(data.reverse());
    // console.log(data);
  };

  useEffect(() => {
    fetchOnlyImages();
  }, []);

  return images.map((image) => {
    return (
      <div key={image} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-96 object-cover"
          src={image}
          alt="Images from S3"
        />
      </div>
    );
  });
};

export default OnlyImages;
