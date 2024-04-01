import { SanityAsset, SanityImageObject } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'sanity';

import { Author } from '@/types/author';
import { Category } from '@/types/category';
import { SEO } from '@/types/seo';
import { Tag } from '@/types/tag';

export type Post = {
  _id: string;
  publishedAt: string;
  title: string;
  slug: {
    current: string;
  };
  cover?: Omit<SanityImageObject, 'asset'> & { asset: SanityAsset };
  author: Author;
  categories: Category[];
};

export type PromotedPost = Post & {
  lead: string;
};

export type SinglePost = PromotedPost & {
  contentRaw: PortableTextBlock[];
  tags: Tag[];
  seo: SEO | null;
};
