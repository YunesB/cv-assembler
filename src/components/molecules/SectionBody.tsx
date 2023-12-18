import { FC, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import {
  TSectionType,
  TDataType,
  TTableDataType,
  TSkill
} from "../../projectTypes/general.types";
import { DATED_SECTION_TYPE, MEDIUM_SIZE } from "../../utils/constants";
import { PlusIcon } from "../../utils/icons";
import { Icon } from "../atoms/Icon";

import { DatedItem } from "./DatedItem";
import { SkillsItem } from "./SkillsItem";

type TProps = {
  type: TSectionType;
  data: TDataType;
};

const EMPTY_TABLE_LINE = {
  from: "Date",
  to: "Date",
  jobTitle: "Job Title",
  companyName: "Company",
  id: "",
  description: "description"
};

const EMPTY_SKILL_LINE = {
  name: "Skill Name",
  value: 50,
  id: ""
};

const AddButton: FC<{ onAdd: () => void }> = ({ onAdd }) => {
  return (
    <button
      type="button"
      className="w-full flex spacy-y-2 items-center justify-center h-[25px] hover:bg-blue-50"
      onClick={onAdd}
    >
      <Icon src={PlusIcon} size={MEDIUM_SIZE} />
    </button>
  );
};

export const SectionBody: FC<TProps> = ({ type, data }) => {
  const [sectionData, setSectionData] = useState<TDataType>(data);

  const tableData = sectionData as TTableDataType[];
  const skillsData = sectionData as TSkill[];

  const isTable = type === DATED_SECTION_TYPE;

  const handleAddLine = () => {
    if (isTable) {
      setSectionData([...tableData, { ...EMPTY_TABLE_LINE, id: uuidv4() }]);
    } else {
      setSectionData([...skillsData, { ...EMPTY_SKILL_LINE, id: uuidv4() }]);
    }
  };

  const handleDeleteLine = (id: string) => {
    if (isTable) {
      const filteredData = tableData.filter((t) => t.id !== id);
      setSectionData(filteredData);
    } else {
      const filteredData = skillsData.filter((t) => t.id !== id);
      setSectionData(filteredData);
    }
  };

  if (isTable) {
    return (
      <>
        <ul className="flex flex-col space-y-4 my-4 mb-4">
          {tableData.map((data) => (
            <DatedItem data={data} key={data.id} onDelete={handleDeleteLine} />
          ))}
        </ul>

        <AddButton onAdd={handleAddLine} />
      </>
    );
  }

  return (
    <>
      <ul className="flex flex-col space-y-4 my-4 mb-4">
        {skillsData.map((data) => (
          <SkillsItem data={data} key={data.id} onDelete={handleDeleteLine} />
        ))}
      </ul>

      <AddButton onAdd={handleAddLine} />
    </>
  );
};
