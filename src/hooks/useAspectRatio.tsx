import { useState, useEffect } from 'react';

export function useAspectRatio(containerRef: any) {
  const [aspectRatio, setAspectRatio] = useState(0.0095);

  useEffect(() => {
    const updateAspectRatio = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        const newAspectRatio = containerWidth / containerHeight;
        setAspectRatio(newAspectRatio);
      }
    };

    window.addEventListener('resize', updateAspectRatio);
    updateAspectRatio(); // Call it initially to set the correct aspect ratio

    return () => {
      window.removeEventListener('resize', updateAspectRatio);
    };
  }, [containerRef]);

  return aspectRatio;
}