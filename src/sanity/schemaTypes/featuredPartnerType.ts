import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const featuredPartnerType = defineType({
  name: 'featuredPartners',
  title: 'Featured Partner',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'title',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
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
        name: 'logo',
        title: 'Featured Logo',
        type: 'image',
    }),
  ],
})
