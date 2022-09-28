export type Thumbnail = {
  path: string;
  extension: string;
};

export type Character = {
  id: string;
  name: string;
  thumbnail: Thumbnail;
};

export type Comic = {
  id: string;
  title: string;
  thumbnail: Thumbnail;
};
