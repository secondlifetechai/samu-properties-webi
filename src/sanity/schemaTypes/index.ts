import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { commentType } from "./commentType";
import { homeSettingsType } from "./homeSettingsType";
import { aboutType } from "./aboutType";
import { partnerType } from "./partnerType";
import { teamType } from "./teamType";
import { contactType } from "./contactType";
import { projectType } from "./projectType";
//import { listingType } from "./listingType";
import { featuredPartnerType } from "./featuredPartnerType";
import { zoneType } from "./zoneType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, commentType, homeSettingsType, aboutType, partnerType, teamType, contactType, projectType, featuredPartnerType, zoneType],
};
