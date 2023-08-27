import { Image } from "../types";

export const images: Image[] = [
  {
    url: '/images/gallery/01.min.jpg',
    alt: "Ceinture d'Orion",
    resolution: '6000x3368',
    fileFormat: 'jpg',
    date: new Date('2021-03-09'),
    cameraSettings: {
      name: 'Canon EOS 2000D',
      iso: 1600,
      aperture: "f/6.3",
      shutter: "30s",
      focalLength: "18mm",
    }
  },
  {
    url: '/images/gallery/02.min.jpg',
    alt: 'Comète Neowise',
    date: new Date('2020-07-18'),
    resolution: '1440x1440',
    fileFormat: 'jpg',
    processingSettings: {
      software: 'OnePlus 7T Pro Night Mode'
    }
  },
  {
    url: '/images/gallery/03.min.jpg',
    alt: 'Mon setup',
    date: new Date('2020-09-11'),
    resolution: '4000x3000',
    fileFormat: 'jpg',
    cameraSettings: {
      name: 'OnePlus 7T Pro',
      iso: 20000,
      aperture: "f/1.6",
      shutter: "1/3s",
      focalLength: "4.76mm",
    },
    processingSettings: {
      software: 'OnePlus 7T Pro Night Mode'
    }
  },
  {
    url: '/images/gallery/04.min.jpg',
    alt: 'Mon setup aux AAAOV',
    date: new Date('2021-05-27'),
    resolution: '3000x4000',
    fileFormat: 'jpg',
    cameraSettings: {
      name: 'OnePlus 7T Pro',
      iso: 125,
      aperture: "f/1.6",
      shutter: "1/1129",
      focalLength: "4.76mm",
    }

  },
  {
    url: '/images/gallery/05.min.jpg',
    alt: 'Super Lune',
    date: new Date('2023-08-01'),
    resolution: '1920x1280',
    fileFormat: 'jpg',
    cameraSettings: {
      name: 'Canon EOS 2000D',
      iso: 800,
      aperture: "f/25",
      shutter: "1/30",
      focalLength: "300mm",
    }
  },
  {
    url: '/images/gallery/06.min.jpg',
    alt: 'Super Lune',
    date: new Date('2023-08-01'),
    resolution: '1920x1280',
    fileFormat: 'jpg',
    cameraSettings: {
      name: 'Canon EOS 2000D',
      iso: 400,
      aperture: "f/11",
      shutter: "1/40",
      focalLength: "300mm",
    }
  },
  {
    url: '/images/gallery/07.min.jpg',
    alt: 'Saturne',
    date: new Date('2023-07-09'),
    resolution: '6020x4015',
    fileFormat: 'RAW',
    cameraSettings: {
      name: 'Canon EOS 2000D',
      iso: 6400,
      shutter: "1/5",
      focalLength: "50mm"
    },
    scopeSettings: {
      name: 'Omegon 150/750',
      mount: 'Omegon EQ-320',
      focal: 750,
      diameter: 150,
      focalRatio: 'f/5',
      eyePiece: 'Cronus 6mm',
      eyePieceMagnification: 125,
    }
  },
]