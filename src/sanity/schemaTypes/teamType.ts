import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'name',
        type: 'string',
    }),
    defineField({
        name: 'title',
        type: 'string',
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
  }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
        },
    }),
    defineField({
      name: "about",
      title: "About Team Member",
      type: "blockContent",
  }),
    defineField({
        name: 'photo',
        type: 'image',
    }),
  ],
})
