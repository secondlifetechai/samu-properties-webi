import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
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
        name: 'email',
        type: 'string',
    }),
    defineField({
        name: 'phone',
        type: 'string',
    }),
    defineField({
        name: 'title',
        type: 'string',
    }),
    defineField({
        name: 'enquiry',
        type: 'text',
    }),
    defineField({
        name: 'budget',
        type: 'string',
    }),
  ],
})
