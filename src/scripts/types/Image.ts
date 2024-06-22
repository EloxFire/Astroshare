import { Dayjs } from "dayjs";

export type Image = {
  ref?: string
  url?: string; // url to the image
  file?: any; // file of the image
  alt: string; // alt text for the image
  date: Dayjs | string | undefined; // date of the image
  resolution?: string; // resolution of the image
  fileFormat?: string; // file format of the image
  tags?: string; // tags for the image to use with filters bar
  cameraSettings?: {
    name?: string; // Canon EOS 2000D
    iso?: number; // 6400
    shutter?: string; // 1/30
    aperture?: string;  // f-1.4
    fps?: number; // 60,
    focalLength?: string; // 50mm
  },
  scopeSettings?: {
    name?: string; // Omegon 150/750
    mount?: string; // Omegon EQ-320
    focal?: number; // 750mm
    diameter?: number; // 150mm
    focalRatio?: string; // f-5
    eyePiece?: string; // Cronus 6mm
    eyePieceMagnification?: number; // 125x
    barlow?: string; // 2x
  },
  processingSettings?: {
    software?: string; // Photoshop
    stacking?: string; // Oui / Non
    stackingSoftware?: string; // DeepSkyStacker
    stackingFrames?: number; // 100
    stackingTime?: string; // 1h - per frame
    stackingTimeTotal?: string; // 100h
  },
  viewers?: number; // number of downloads
}