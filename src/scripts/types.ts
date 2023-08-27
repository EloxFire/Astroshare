export type Ressource = {
  slug: string;
  name: string;
  downloadNames: string[];
  subtitle?: string;
  description: string;
  notes?: string;
  level: string;
  format?: string[];
  image?: string;
  links?: string[];
  tags?: string[];
  creadted?: Date;
  updated: Date;
}