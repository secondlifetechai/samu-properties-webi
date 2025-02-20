import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: "aboutUs",
        type: "blockContent",
    }),
    defineField({
        name: "mission",
        type: "blockContent",
    }),
    defineField({
        name: "vision",
        type: "blockContent",
    }),
    defineField({
        name: 'slug',
        type: 'slug',
    }),
    defineField({
        name: 'aboutPhoto',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],
})
