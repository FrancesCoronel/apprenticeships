export interface Apprenticeship {
  slug: string;
  company: string;
  description: string;
  image: string;
  link: string;
  location: string[];
  content?: string;
}

export interface Contributor {
  user: string;
  avatar: string;
  url: string;
}
