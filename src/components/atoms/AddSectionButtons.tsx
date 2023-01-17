import { FC } from "react";

import { MEDIUM_SIZE } from "../../utils/constants";
import { PlusIcon } from "../../utils/icons";

import { Icon } from "./Icon";

type TProps = {
  addTable: () => void;
  addSkills: () => void;
  className?: string;
};

export const AddSectionButtons: FC<TProps> = ({
  addTable,
  addSkills,
  className
}) => {
  return (
    <div
      className={`flex items-center justify-between w-full ${className} mt-6 overflow-hidden w-full`}
    >
      <button
        type="button"
        className="w-[49%] flex spacy-y-2 items-center justify-center h-[25px] bg-white hover:bg-orange-300 rounded-md"
        onClick={addTable}
      >
        <Icon src={PlusIcon} size={MEDIUM_SIZE} />
        <span>Add Table Section</span>
      </button>

      <button
        type="button"
        className="w-[49%] flex spacy-y-2 items-center justify-center h-[25px] bg-white hover:bg-orange-300 rounded-md"
        onClick={addSkills}
      >
        <Icon src={PlusIcon} size={MEDIUM_SIZE} />
        <span>Add Skills Section</span>
      </button>
    </div>
  );
};
