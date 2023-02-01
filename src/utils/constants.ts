import { v4 as uuidv4 } from "uuid";

import {
  TColors,
  TSection,
  TContactTypeSelect,
  TContact
} from "../projectTypes/general.types";

import {
  DragIconHorizontal,
  DragIconVertical,
  EditIcon,
  PlusIcon
} from "./icons";

export const BUTTON_TYPE = "button";
export const SUBMIT_TYPE = "submit";
export const RESET_TYPE = "reset";

export const SMALL_SIZE = "small";
export const MEDIUM_SIZE = "medium";
export const LARGE_SIZE = "large";

export const FIT_SIZE = "fit";

export const CHECK_ICON = "check";
export const CANCEL_ICON = "cancel";
export const EDIT_ICON = "edit";

export const DATED_SECTION_TYPE = "dated";
export const SKILLS_SECTION_TYPE = "skills";
export const LIST_SECTION_TYPE = "list";

export const COMMON_INPUT_CLASSES = "border border-blue-500 rounded-sm";

export const INITIAL_SECTIONS: TSection[] = [
  {
    name: "experience",
    title: "Experience",
    type: DATED_SECTION_TYPE,
    id: `${uuidv4()}-${DATED_SECTION_TYPE}`,
    data: [
      {
        from: "26 AUG 2018",
        to: "27 AUG 2020",
        jobTitle: "Developer",
        companyName: "Google LLC, California, CA",
        id: `${uuidv4()}-inner`,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
      }
    ]
  },
  {
    name: "skills",
    title: "Skills",
    type: SKILLS_SECTION_TYPE,
    id: `${uuidv4()}-${SKILLS_SECTION_TYPE}`,
    data: [
      {
        name: "HTML",
        value: 10,
        id: "default-001"
      },
      {
        name: "CSS",
        value: 10,
        id: "default-002"
      },
      {
        name: "JavaScript",
        value: 80,
        id: "default-003"
      },
      {
        name: "React",
        value: 70,
        id: "default-004"
      }
    ]
  }
];

export const COLOR_SCHEMAS: TColors[] = [
  {
    bg: "darkBlue",
    text: "white"
  },
  {
    bg: "yellow",
    text: "black"
  },
  {
    bg: "orange",
    text: "black"
  }
];

export const STRING_TYPE = "string";
export const LINK_TYPE = "link";
export const MAIL_TYPE = "mail";
export const PHONE_TYPE = "phone";

export const SOCIAL_MEDIA = "social";

export const CONTACT_TYPES: TContactTypeSelect[] = [
  {
    type: STRING_TYPE,
    icon: EditIcon
  },
  {
    type: LINK_TYPE,
    icon: DragIconHorizontal
  },
  {
    type: MAIL_TYPE,
    icon: DragIconVertical
  },
  {
    type: PHONE_TYPE,
    icon: PlusIcon
  }
];

export const COMMON_LINK_CLASSES =
  "m-0 color-unset hover:underline transition-all";

export const INITIAL_CONTACTS: TContact[] = [
  {
    id: `${`${uuidv4()}-${STRING_TYPE}`}`,
    type: STRING_TYPE,
    value: "Lorem Ipsum 22, APT 11, 050011, California, LA"
  },
  {
    id: `${`${uuidv4()}-${LINK_TYPE}`}`,
    type: LINK_TYPE,
    value: "https://www.yunes.ru"
  },
  {
    id: `${`${uuidv4()}-${MAIL_TYPE}`}`,
    type: MAIL_TYPE,
    value: "yunes.b@gmail.com"
  },
  {
    id: `${`${uuidv4()}-${PHONE_TYPE}`}`,
    type: PHONE_TYPE,
    value: "+74959379992"
  }
];
