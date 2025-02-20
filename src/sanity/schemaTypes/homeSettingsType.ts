import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const homeSettingsType = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'logo',
        type: 'image',
    }),
    defineField({
      name: 'heroTitle',
      type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
          source: 'heroTitle',
        },
    }),
    defineField({
        name: 'heroSubTitle',
        type: 'text',
    }),
    defineField({
        name: 'heroButton',
        type: 'string',
    }),
    defineField({
        name: 'aboutTitle',
        type: 'string',
    }),
    defineField({
        name: 'projectTitle',
        type: 'string',
    }),
    defineField({
        name: 'teamTitle',
        type: 'string',
    }),
    defineField({
        name: 'propertyTitle',
        type: 'string',
    }),
    defineField({
        name: 'propertySubTitle',
        type: 'text',
    }),
    defineField({
        name: 'propertyButton',
        type: 'string',
    }),
    defineField({
        name: 'blogTitle',
        type: 'string',
    }),
    defineField({
        name: 'blogSubTitle',
        type: 'text',
    }),
    defineField({
        name: 'blogButton',
        type: 'string',
    }),
    defineField({
        name: 'contactTitle',
        type: 'string',
    }),
    defineField({
        name: 'contactSubTitle',
        type: 'text',
    }),
    defineField({
        name: 'contactPhoneNumber',
        type: 'string',
    }),
    defineField({
        name: 'contactEmail',
        type: 'string',
    }),
    defineField({
        name: 'address',
        type: 'string',
    }),
    defineField({
        name: 'insatagramLink',
        type: 'string',
    }),
    defineField({
        name: 'facebookLink',
        type: 'string',
    }),
    defineField({
        name: 'linkedInLink',
        type: 'string',
    }),
    defineField({
        name: 'twitterLink',
        type: 'string',
    }),
  ],
})
