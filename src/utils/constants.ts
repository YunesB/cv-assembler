import { TSection } from "../projectTypes/general.types";

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
    data: [
      {
        from: "26 AUG 2018",
        to: "27 AUG 2020",
        jobTitle: "Google LLC, California, CA",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
      }
    ]
  },
  {
    name: "education",
    title: "Education",
    type: DATED_SECTION_TYPE,
    data: [
      {
        from: "26 AUG 2018",
        to: "27 AUG 2020",
        jobTitle: "Google LLC, California, CA",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
      }
    ]
  },
  {
    name: "skills",
    title: "Skills",
    type: SKILLS_SECTION_TYPE,
    data: [
      {
        name: "HTML",
        value: 10
      },
      {
        name: "CSS",
        value: 10
      },
      {
        name: "JavaScript",
        value: 80
      },
      {
        name: "React",
        value: 70
      }
    ]
  }
];
