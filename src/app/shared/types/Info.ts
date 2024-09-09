export type Info = {
  title: string;
  subTitle: string;
  paraText?: string;
  containesText?: boolean;
  linkItems?: Link[];
  containsLinks?: boolean;
};

export type Link = {
  title: string;
  url: string;
};
