export type bigPicture = {
  name: string;
  image: string;
};

export type professionalEvent = {
  name: string;
  image: string;
};

export type socialEvent = {
  name: string;
  images: [{ name: string; image: string }];
};

export type EventInfoProps = {
  big_event?: string;
  big_pictures: bigPicture[];
  professional_event: professionalEvent[];
  social_event: socialEvent[];
};

export type SelectedEventData = {
  big_event?: string;
  big_pictures?: { name: string; image: string }[];
  professional_event?: { name: string; image: string }[];
  social_event?: {
    name: string;
    images: { name: string; image: string }[];
  }[];
};
