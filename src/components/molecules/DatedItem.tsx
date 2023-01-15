import { ChangeEvent, FC, useState } from "react";

import { CheckIcon, CloseIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

type TDataType = {
  from: string;
  to: string;
  jobTitle: string;
  description: string;
};

type TProps = {
  data: TDataType;
};

export const DatedItem: FC<TProps> = ({ data }) => {
  const [isEdited, setEdited] = useState(false);
  const [initialValues, setInitialValues] = useState<TDataType>(data);
  const [inputValues, setInputValues] = useState<TDataType>(data);

  const { from, to, jobTitle, description } = inputValues;
  const commonInputClasses = "border border-blue-500 rounded-sm";

  const handleConfirm = () => {
    setInitialValues(inputValues);
    setEdited(false);
  };

  const handleCancel = () => {
    setInputValues(initialValues);
    setEdited(false);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isEdited ? (
        <li className={`grid grid-cols-2 gap-2`}>
          <div className="flex items-center justify-start w-full max-h-[25px]">
            <input
              name="from"
              type="text"
              className={`w-2/5 text-sm ${commonInputClasses}`}
              value={from}
              onChange={onChangeInput}
            />
            <span className="mx-2">-</span>
            <input
              name="to"
              type="text"
              className={`w-2/5 text-sm ${commonInputClasses}`}
              value={to}
              onChange={onChangeInput}
            />
          </div>

          <input
            name="jobTitle"
            type="text"
            className={`w-full max-h-[25px] mb-2 ${commonInputClasses}`}
            value={jobTitle}
            onChange={onChangeInput}
          />

          <div className="flex items-center mt-auto">
            <IconButton
              src={CheckIcon}
              className="mr-2"
              onClick={handleConfirm}
            />
            <IconButton src={CloseIcon} onClick={handleCancel} />
          </div>

          <textarea
            name="description"
            className={`w-full min-h-[70px] text-sm ${commonInputClasses}`}
            value={description}
            onChange={(e) => onChangeTextArea(e)}
          />
        </li>
      ) : (
        <li
          className={`grid grid-cols-2 gap-2 hover:bg-blue-50`}
          onClick={() => setEdited(true)}
        >
          <div className="flex items-center">
            <p className="text-sm">{from}</p>
            <span className="mx-2">-</span>
            <p className="text-sm">{to}</p>
          </div>
          <p className="font-semibold">{jobTitle}</p>
          <p></p>
          <p className="text-sm">{description}</p>
        </li>
      )}
    </>
  );
};
