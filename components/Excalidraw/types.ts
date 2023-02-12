export type Comment = {
  x: number;
  y: number;
  value: string;
  id?: string;
};

export type PointerDownState = {
  x: number;
  y: number;
  hitElement: Comment;
  onMove: any;
  onUp: any;
  hitElementOffsets: {
    x: number;
    y: number;
  };
};
