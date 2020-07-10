export interface IComment {
  id: string;
  text: string;
  user: string;
  replies?: IComment[],
}