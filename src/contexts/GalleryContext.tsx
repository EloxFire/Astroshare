import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getImages } from '../scripts/helpers/api/gallery/getImages';
import { Image } from '../scripts/types/Image';

const GalleryContext = createContext<any>({});

export function useGallery() {
  return useContext(GalleryContext);
}

interface GalleryProviderProps {
  children: ReactNode
}

export function GalleryProvider({ children }: GalleryProviderProps) {
  const [pictures, setPictures] = useState<Image[]>([]);
  const [picturesLoading, setPicturesLoading] = useState<boolean>(true);


  useEffect(() => {
    (async () => {
      await updateGallery();
    })()
  }, []);

  const updateGallery = async () => {
    const data = await getImages();
    setPicturesLoading(true);
    let tempPictures: Image[] = [];
    data.docs.forEach((doc: any) => {
      tempPictures.push(doc.data());
    })
    const orderedPictures = tempPictures.sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    // console.log("Found pictures :", orderedPictures.length);
    setPictures(orderedPictures);
    setPicturesLoading(false);
  }


  const value = {
    pictures,
    picturesLoading,
    updateGallery
  }

  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  )
}