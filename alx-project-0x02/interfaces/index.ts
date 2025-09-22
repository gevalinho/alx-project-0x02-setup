export interface CardProps{
    title: string;
    content: string;
}

export interface CardModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}