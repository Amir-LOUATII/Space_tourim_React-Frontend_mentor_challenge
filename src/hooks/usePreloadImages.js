import { useState, useEffect } from "react";

function usePreloadImages(imageUrls) {
  const [loadedImages, setLoadedImages] = useState([]);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;

    let loadedCount = 0;
    const images = [];

    imageUrls.forEach((src, index) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedCount++;
        images[index] = src;

        if (loadedCount === imageUrls.length) {
          setAllLoaded(true);
          setLoadedImages(images);
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setAllLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  return { loadedImages, allLoaded };
}
export default usePreloadImages;
