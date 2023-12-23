import React, { useContext, useState, useEffect, ReactNode, createContext } from 'react';
import { getImages } from '../scripts/helpers/api/gallery/gallery';
import { Image } from '../scripts/types';

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
    async function fetchStats() {
      const data = await getImages();
      // console.log(data.docs);

      data.docs.forEach((doc: any) => {
        setPictures((pictures: Image[]) => [...pictures, doc.data()]);
      })
      setPicturesLoading(false);
    }

    fetchStats().catch((err) => {
      console.log(err);
    })
  }, []);


  const value = {
    pictures,
    picturesLoading,
  }

  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  )
}