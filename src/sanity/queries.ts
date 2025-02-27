import { defineQuery } from "next-sanity";
import { clientFetch } from "./lib/client";

const FEATURED_POSTS_QUERY =
  defineQuery(`*[_type=='post' && isFeatured==true] | order(publishedAt desc)[0...$quantity]{
    title,
    'slug':slug.current,
    publishedAt,
    mainImage,
    excerpt,
    author->{
        name, image
    }
}`);

export const getFeaturedPosts = async (quantity: number) => {
  return await clientFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  });
};

const ALL_POSTS_QUERY = defineQuery(`*[
  _type == "post"
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`);

export const getAllPosts = async (quantity: number) => {
  return await clientFetch({
    query: ALL_POSTS_QUERY,
    params: { quantity },
  });
};

const CATEGORIES_QUERY = defineQuery(`*[_type=='category']|order(title asc){
  title,
  "slug":slug.current
}`);

export const getCategories = async () => {
  return await clientFetch({
    query: CATEGORIES_QUERY,
  });
};

const POST_QUERY = defineQuery(`*[_type=='post' && slug.current == $slug][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  _id,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  },
  "comments": *[_type == "comment" && post._ref == ^._id && approved == true]{
    name,
    email,
    comment,
    image,
    _id
  }
}`);

export const getPost = async (slug: string) => {
  return await clientFetch({
    query: POST_QUERY,
    params: { slug },
  });
};

const CATEGORY_POST = defineQuery(`*[
  _type == "post"
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`);
export const getCategoryPost = async (category?: string) => {
  return await clientFetch({
    query: CATEGORY_POST,
    params: {
      category,
    },
  });
};

const GET_OTHERS_POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)
  && slug.current != $currentSlug
]|order(publishedAt desc)[0...$quantity]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  slug,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);

export const getOtherPosts = async (currentSlug: string, quantity: number) => {
  return await clientFetch({
    query: GET_OTHERS_POSTS_QUERY,
    params: { currentSlug, quantity },
  });
};

const HOME_SETTING_QUERY = defineQuery(`*[_type=='homeSettings' && slug.current == $slug][0]{
  logo,
  heroTitle,
  heroSubTitle,
  heroButton,
  aboutTitle,
  projectTitle,
  teamTitle,
  propertyTitle,
  propertySubTitle,
  propertyButton,
  blogTitle,
  blogSubTitle,
  blogButton,
  contactTitle,
  contactSubTitle,
  contactPhoneNumber,
  contactEmail,
  address,
  insatagramLink,
  facebookLink,
  linkedInLink,
  twitterLink,
 _id
}`);

export const getHomeSetting = async (slug: string) => {
  return await clientFetch({
    query: HOME_SETTING_QUERY,
    params: { slug },
  });
};

const ABOUT_QUERY = defineQuery(`*[_type=='about' && slug.current == $slug][0]{
  aboutUs,
  mission,
  vision,
  aboutPhoto,
 _id
}`);

export const getAbout = async (slug: string) => {
  return await clientFetch({
    query: ABOUT_QUERY,
    params: { slug },
  });
};

const FEATURED_PARTNER_QUERY = defineQuery(`*[_type=='featuredPartners' && slug.current == $slug][0]{
  title,
  description,
  logo,
 _id
}`);

export const getFeaturedPartner = async (slug: string) => {
  return await clientFetch({
    query: FEATURED_PARTNER_QUERY,
    params: { slug },
  });
};

const PROJECTS_QUERY = defineQuery(`*[_type=='project']|order(name asc){
  name,
  price,
  location,
  description,
  photo,
  "slug":slug.current
}`);

export const getProjectTypes = async () => {
  return await clientFetch({
    query: PROJECTS_QUERY,
  });
};

const TEAMS_QUERY = defineQuery(`*[_type=='team']|order(name asc){
  name,
  title,
  photo,
  about,
  "slug":slug.current
}`);

export const getTeamTypes = async () => {
  return await clientFetch({
    query: TEAMS_QUERY,
  });
};

const PROPERTIES_QUERY = defineQuery(`*[_type=='listing']|order(name asc){
  name,
  description,
  address,
  regularPrice,
  discountPrice,
  bathrooms,
  bedrooms,
  furnished,
  parking,
  type,
  offer,
  mainImage,
  "slug":slug.current
}`);

export const getPropertyTypes = async () => {
  return await clientFetch({
    query: PROPERTIES_QUERY,
  });
};

const PARTNERS_QUERY = defineQuery(`*[_type=='partner']|order(name asc){
  name,
  website,
  description,
  isFeatured,
  logo,
  "slug":slug.current
}`);

export const getPartnerTypes = async () => {
  return await clientFetch({
    query: PARTNERS_QUERY,
  });
};

const PROJECT_QUERY = defineQuery(`*[_type=='project' && slug.current == $slug][0]{
  name,
  price,
  location,
  description,
  photo,
 _id
}`);

export const getProject = async (slug: string) => {
  return await clientFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });
};

const PROPERTY_QUERY = defineQuery(`*[_type=='listing' && slug.current == $slug][0]{
  name,
  description,
  address,
  regularPrice,
  discountPrice,
  bathrooms,
  bedrooms,
  furnished,
  parking,
  type,
  offer,
  mainImage,
 _id
}`);

export const getProperty = async (slug: string) => {
  return await clientFetch({
    query: PROPERTY_QUERY,
    params: { slug },
  });
};
