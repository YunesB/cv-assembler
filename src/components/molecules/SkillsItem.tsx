import { ChangeEvent, FC, useMemo, useState } from "react";

import { TSkill } from "../../projectTypes/general.types";
import { COMMON_INPUT_CLASSES } from "../../utils/constants";
import { CheckIcon, CloseIcon, DeleteIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

type TProps = {
  data: TSkill;
  onDelete: (id: string) => void;
};

const MIN_RANGE_VALUE = 0;
const MAX_RANGE_VALUE = 100;

const MAX_SKILL_NAME_WIDTH = "max-w-[200px]";
const COMMON_LIST_CLASSES = "flex items-center justify-start h-[32px]";

export const SkillsItem: FC<TProps> = ({ data, onDelete }) => {
  const [isEdited, setEdited] = useState(false);
  const [initialValues, setInitialValues] = useState<TSkill>(data);
  const [currentValues, setCurrentValues] = useState<TSkill>(data);

  const width = useMemo(() => `${currentValues.value}%`, [currentValues.value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValues({ ...currentValues, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    setInitialValues(currentValues);
    setEdited(false);
  };

  const handleCancel = () => {
    setCurrentValues(initialValues);
    setEdited(false);
  };

  if (isEdited) {
    return (
      <li className={COMMON_LIST_CLASSES}>
        <input
          type="text"
          name="name"
          className={`w-full mr-4 ${MAX_SKILL_NAME_WIDTH} text-sm ${COMMON_INPUT_CLASSES}`}
          value={currentValues.name}
          onChange={handleInputChange}
        />
        <input
          type="range"
          name="value"
          min={MIN_RANGE_VALUE}
          max={MAX_RANGE_VALUE}
          className={`w-full ${MAX_SKILL_NAME_WIDTH} h-[10px] bg-orange-300 text-sm ${COMMON_INPUT_CLASSES}`}
          value={currentValues.value}
          onChange={handleInputChange}
        />
        <div className="flex items-center ml-auto space-x-2">
          <IconButton src={CheckIcon} onClick={handleConfirm} />
          <IconButton src={CloseIcon} onClick={handleCancel} />
          <IconButton src={DeleteIcon} onClick={() => onDelete(data.id)} />
        </div>
      </li>
    );
  }

  return (
    <li
      className={COMMON_LIST_CLASSES + " hover:bg-blue-50"}
      onClick={() => setEdited(true)}
    >
      <p className={`mr-4 w-[200px] text-sm`}>{currentValues.name}</p>
      <div className="w-[200px] h-[10px] bg-gray-200 overflow-hidden relative">
        <div className={`aboslute bg-orange-500 h-full`} style={{ width }} />
      </div>
    </li>
  );
};
