import { defineCollection, z } from "astro:content";

export enum PressType {
  article = 'article',
  event = 'event',
};

export const collections = {
  press: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string().optional(),
      site: z.string(),
      date: z.coerce.date(),
      link: z.string().url(),
      type: z.nativeEnum(PressType),
    })
  })
};
