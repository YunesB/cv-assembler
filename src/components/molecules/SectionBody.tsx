import { FC, useState } from "react";

import {
  TSectionType,
  TDataType,
  TTableDataType,
  TSkill
} from "../../projectTypes/general.types";
import { DATED_SECTION_TYPE, SKILLS_SECTION_TYPE } from "../../utils/constants";

import { DatedItem } from "./DatedItem";
import { SkillsItem } from "./SkillsItem";

type TProps = {
  type: TSectionType;
  data: TDataType;
};

export const SectionBody: FC<TProps> = ({ type, data }) => {
  const tableData = data as TTableDataType[];
  const skillsData = data as TSkill[];

  const [tables, setTables] = useState<TTableDataType[]>(tableData);
  const [skills, setSkills] = useState<TSkill[]>(skillsData);

  return (
    <>
      {type === DATED_SECTION_TYPE && (
        <ul className="flex flex-col space-y-4 my-4">
          {tables.map((data, index) => (
            <DatedItem data={data} key={`${data.jobTitle}-${index}`} />
          ))}
        </ul>
      )}

      {type === SKILLS_SECTION_TYPE && (
        <ul className="flex flex-col space-y-4 my-4">
          {skills.map((data, index) => (
            <SkillsItem data={data} key={`${data.name}-${index}`} />
          ))}
        </ul>
      )}
    </>
  );
};
