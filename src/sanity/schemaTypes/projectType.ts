import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'name',
        title: 'Project Name',
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
      name: 'price',
      title: 'Project Price',
      type: 'number',
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
        name: "description",
        type: "blockContent",
    }),
    defineField({
        name: 'photo',
        title: 'Project Photo',
        type: 'image',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        { type: 'image' }
      ],
      options: {
        layout: 'grid'
      }
    }),
  ],
})
