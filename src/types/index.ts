export interface CssClassObj {
  [prop: string]: boolean;
}

export interface CarouselProps {
  images: string[];
  delay: number;
}

export interface ImageProps {
  src: string;
  active: boolean;
  classess: string;
}

export interface IconProps {
  size: number;
}

export type ImageArray = { src: string; classess: string }[];
