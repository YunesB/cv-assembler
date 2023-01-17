import { ChangeEvent, FC, useState } from "react";

import { TTableDataType } from "../../projectTypes/general.types";
import { COMMON_INPUT_CLASSES } from "../../utils/constants";
import { CheckIcon, CloseIcon, DeleteIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

type TProps = {
  data: TTableDataType;
  onDelete: (id: string) => void;
};

export const DatedItem: FC<TProps> = ({ data, onDelete }) => {
  const [isEdited, setEdited] = useState(false);
  const [initialValues, setInitialValues] = useState<TTableDataType>(data);
  const [inputValues, setInputValues] = useState<TTableDataType>(data);

  const { from, to, jobTitle, description, id } = inputValues;

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
              className={`w-2/5 text-sm ${COMMON_INPUT_CLASSES}`}
              value={from}
              onChange={onChangeInput}
            />
            <span className="mx-2">-</span>
            <input
              name="to"
              type="text"
              className={`w-2/5 text-sm ${COMMON_INPUT_CLASSES}`}
              value={to}
              onChange={onChangeInput}
            />
          </div>

          <input
            name="jobTitle"
            type="text"
            className={`w-full max-h-[25px] mb-2 ${COMMON_INPUT_CLASSES}`}
            value={jobTitle}
            onChange={onChangeInput}
          />

          <div className="flex items-center mt-auto space-x-2">
            <IconButton src={CheckIcon} onClick={handleConfirm} />
            <IconButton src={CloseIcon} onClick={handleCancel} />
            <IconButton src={DeleteIcon} onClick={() => onDelete(id)} />
          </div>

          <textarea
            name="description"
            className={`w-full min-h-[70px] text-sm ${COMMON_INPUT_CLASSES}`}
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
          <p className="text-sm min-h-[70px] w-full">{description}</p>
        </li>
      )}
    </>
  );
};
