import React, { useState } from "react";
import "./index.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];

  const Img_fun = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => Img_fun(image)}
            className="img_cl"
          />
        ))}
      </div>
      {selectedImage && (<img className="modal-content" src={selectedImage} alt="Selected" />)}
    </div>
  );
};

export default Gallery;
