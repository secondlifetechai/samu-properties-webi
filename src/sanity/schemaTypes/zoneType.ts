import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const zoneType = defineType({
  name: 'zone',
  title: 'Zone',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'name',
        title: 'Zone Name',
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
      name: 'location',
      type: 'string',
    }),
    defineField({
        title: 'Emirate',
        name: 'emirate',
        type: 'string',
        initialValue: 'rent',
        options: {
            list: [
                { title: 'Abu Dhabi', value: 'Abu Dhabi' },
                { title: 'Dubai', value: 'Dubai' },
                { title: 'Sharjah', value: 'Sharjah' },
                { title: 'Ajman', value: 'Ajman' },
                { title: 'Umm Al Quwain', value: 'Umm Al Quwain' },
                { title: 'Ras Al Khaimah', value: 'Ras Al Khaimah' },
                { title: 'Fujairah', value: 'Fujairah' },
            ]
        }
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
