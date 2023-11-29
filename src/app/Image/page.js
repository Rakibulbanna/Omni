
"use client"
import React, { useState } from "react";

const ImageGallery = () => {
    const [images, setImages] = useState([
        { id: 1, url: "image-1.webp", feature: true },
        { id: 2, url: "image-2.webp", feature: false },
        { id: 3, url: "image-3.webp", feature: false },
        { id: 4, url: "image-4.webp", feature: false },
        { id: 5, url: "image-5.webp", feature: false },
        { id: 6, url: "image-6.webp", feature: false },
        { id: 7, url: "image-7.webp", feature: false },
        { id: 8, url: "image-8.webp", feature: false },
        { id: 9, url: "image-9.webp", feature: false },
        { id: 10, url: "image-10.jpeg", feature: false },
        { id: 11, url: "image-11.jpeg", feature: false },
        // Add more images here
    ]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [draggedImage, setDraggedImage] = useState(null);

    const handleImageClick = (selected, image) => {
        if (!selected) {
            setSelectedImages(selectedImages.filter((id) => id !== image.id));
        } else {
            setSelectedImages([...selectedImages, image.id]);
        }
    };

    const handleImageDragStart = (image) => {
        setDraggedImage(image);
    };

    const handleImageDragOver = (image) => {
        if (draggedImage === image) return;
        const updatedImages = [...images];
        const draggedIndex = images.indexOf(draggedImage);
        const targetIndex = images.indexOf(image);
        updatedImages.splice(draggedIndex, 1);
        updatedImages.splice(targetIndex, 0, draggedImage);

        setImages(updatedImages);
    };

    const handleImageDrop = () => {
        setDraggedImage(null);
    };


    const handleDeleteSelectedImages = () => {
        const updatedImages = images.filter((image) => !selectedImages.includes(image.id));
        setImages(updatedImages);
        setSelectedImages([]);
    };

    return (
        <div className="main-container">
            <div className="controls">
                <div>{selectedImages.length} File Selecetd </div>
                <a onClick={handleDeleteSelectedImages}>
                    Delete Files
                </a>
            </div>
            <div className="main-container image-gallery">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`image-container ${selectedImages.includes(image.id) ? "selected" : ""}`}
                        //   onClick={() => handleImageClick(image)}
                        onDragStart={() => handleImageDragStart(image)}
                        onDragOver={() => handleImageDragOver(image)}
                        onDrop={handleImageDrop}
                        draggable
                        style={{
                            transition: 'transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                        }}
                    >
                        <img src={image.url} alt={`Image ${image.id}`} />
                        <input type="checkbox" onChange={(e) => handleImageClick(e.target.checked, image)} class="checkbox"></input>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ImageGallery;
