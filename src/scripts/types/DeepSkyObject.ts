export type DeepSkyObject = {
  ra: number;
  dec: number;
  type: string;
  constellation: string;
  magnitude: number;
  name: string;
  ra_rad: number;
  dec_rad: number;
  id: number;
  r1: number;
  r2: number;
  angle: number;
  dso_source: number;
  id1: number;
  cat1: string;
  id2: number;
  cat2: string;
  dup_id: number;
  dup_cat_name: string;
  disp_mag: number;
  image_url?: string;
}