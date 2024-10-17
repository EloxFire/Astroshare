export type Ressource = {
  ref?: string;
  type: string
  name: string;
  slug: string;
  category: string;
  downloadNames: string[];
  level: string;
  description: string;
  visibility: boolean;
  mardownContent?: string;
  filePreview?: any;
  subtitle?: string;
  notes?: string;
  format?: string;
  image?: string;
  links?: string[];
  tags?: string;
  files?: any[];
  totalDownloads?: number;
  updatesCount?: number;
  creadtedAt?: any;
  updatedAt?: any;
}