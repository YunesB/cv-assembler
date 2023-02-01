import { ChangeEvent, FC, useState } from "react";

import { COMMON_INPUT_CLASSES } from "../../utils/constants";
import { CheckIcon, CloseIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

const INITIAL_VALUE = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam metus augue, elementum nec tellus ac, consectetur varius tellus. 
Pellentesque non lacinia lorem, at varius leo. Donec sapien lorem, ultricies ut cursus ac, ultrices at ex.`;

type TProps = {
  className?: string;
};

export const ShortDescription: FC<TProps> = ({ className }) => {
  const [isEdited, setEdited] = useState(false);
  const [initialValues, setInitialValues] = useState(INITIAL_VALUE);
  const [inputValue, setInputValue] = useState(INITIAL_VALUE);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancel = () => {
    setInputValue(initialValues);
    setEdited(false);
  };

  const handleConfirm = () => {
    setInitialValues(inputValue);
    setEdited(false);
  };

  return (
    <>
      {isEdited ? (
        <div
          className={`w-full flex items-start justify-between space-x-2 ${className}`}
        >
          <textarea
            className={`w-full min-h-[100px] bg-transparent ${COMMON_INPUT_CLASSES}`}
            value={inputValue}
            onChange={onChange}
          />

          <div className="flex flex-col items-center space-y-2">
            <IconButton src={CheckIcon} onClick={handleConfirm} />
            <IconButton src={CloseIcon} onClick={handleCancel} />
          </div>
        </div>
      ) : (
        <div
          className={`flex ${className} hover:opacity-50 transition-all cursor-pointer min-h-[100px]`}
          onClick={() => setEdited(true)}
        >
          <span>{inputValue}</span>
        </div>
      )}
    </>
  );
};
