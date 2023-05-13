export interface CardProps {
  id: string;
  url: string;
  title: string;
  types: Array<{
    type: {
      name: string,
      url: string,
    }
  }>;
}