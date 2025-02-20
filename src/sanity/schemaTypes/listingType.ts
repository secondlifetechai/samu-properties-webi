import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const listingType = defineType({
  name: 'listing',
  title: 'Listing',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
        name: 'name',
        title: 'Property Name',
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
        name: "description",
        type: "blockContent",
    }),
    defineField({
        name: 'address',
        type: 'string',
    }),
    defineField({
        name: 'regularPrice',
        type: 'number',
    }),
    defineField({
        name: 'discountPrice',
        type: 'number',
    }),
    defineField({
        name: 'bathrooms',
        type: 'number',
    }),
    defineField({
        name: 'bedrooms',
        type: 'number',
    }),
    defineField({
        name: "furnished",
        title: "Is furnished?",
        type: "boolean",
        initialValue: false,
    }),
    defineField({
        name: "parking",
        title: "Parking?",
        type: "boolean",
        initialValue: false,
    }),
    defineField({
        title: 'Type',
        name: 'type',
        type: 'string',
        initialValue: 'rent',
        options: {
          list: [
            { title: 'rent', value: 'rent' },
            { title: 'sale', value: 'sale' },
          ],
          layout: 'radio'
        }
    }),
    defineField({
        name: "offer",
        title: "Offer?",
        type: "boolean",
        initialValue: false,
    }),
    defineField({
        name: "mainImage",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alternative text",
          },
        ],
    }),
  ],
})
