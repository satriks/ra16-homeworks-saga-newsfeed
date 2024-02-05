export interface DataItem {
  id: string;
  name: string;
  text: string;
  date: string;
  comments: { count: string };
  likes: { count: string };
  reposts: { count: string };
  views: { count: string };
}
