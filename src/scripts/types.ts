export type Ressource = {
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  notes?: string;
  level: string;
  format?: string[];
  image?: string;
  link?: string;
  tags?: string[];
  creadted?: Date;
  updated: Date;
}