export interface ServiceImageProps {
  img: string;
  name: string;
  service: string;
  description: string;
}

export interface ServiceLinkProps {
  service: string;
  description: string;
  href: string;
  img: string;
  id: string;
}
export interface ServiceLinkArr {
  links: ServiceLinkProps[];
}
