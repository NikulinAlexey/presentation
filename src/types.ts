export interface ISlide {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface PresentationProps {
  slides: ISlide[];
}
