import { FC } from "react";

import { TSectionType } from "../../projectTypes/general.types";
import { DATED_SECTION_TYPE, SKILLS_SECTION_TYPE } from "../../utils/constants";

import { DatedItem } from "./DatedItem";
import { SkillsItem } from "./SkillsItem";

const initialDatedData = [
  {
    data: {
      from: "26 AUG 2018",
      to: "27 AUG 2020",
      jobTitle: "Google LLC, California, CA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
    },
    type: DATED_SECTION_TYPE
  },
  {
    data: {
      from: "26 AUG 2018",
      to: "27 AUG 2020",
      jobTitle: "Facebook INC, California, CA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
    },
    type: DATED_SECTION_TYPE
  }
];

const initialSkillsData = {
  data: [
    {
      name: "HTML",
      value: "100%"
    },
    {
      name: "CSS",
      value: "100%"
    },
    {
      name: "JavaScript",
      value: "80&"
    },
    {
      name: "React",
      value: "70%"
    }
  ],
  type: SKILLS_SECTION_TYPE
};

type TProps = {
  type: TSectionType;
};

export const SectionBody: FC<TProps> = ({ type }) => {
  return (
    <ul className="flex flex-col space-y-4 my-4">
      {type === DATED_SECTION_TYPE &&
        initialDatedData.map((info, index) => (
          <DatedItem data={info.data} key={`${info.data.jobTitle}-${index}`} />
        ))}

      {type === SKILLS_SECTION_TYPE && (
        <SkillsItem data={initialSkillsData.data} />
      )}
    </ul>
  );
};
