import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const partnerType = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'name',
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
      name: 'website',
      title: 'Patner Website',
      type: 'string',
    }),
    defineField({
        name: "description",
        type: "blockContent",
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      description: "Feature it on the home page?",
      initialValue: false,
    }),
    defineField({
        name: 'logo',
        type: 'image',
    }),
  ],
})
