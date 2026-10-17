export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  content: string;
};

export type SocialLink = {
  platform: string;
  url: string;
};
