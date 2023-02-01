import { ChangeEvent, FC, useState } from "react";

import { TPersonalData } from "../../projectTypes/general.types";
import { COMMON_INPUT_CLASSES } from "../../utils/constants";
import { CheckIcon, CloseIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

const INITIAL_DATA = {
  fullName: "John Doe",
  profession: "Frontend Developer"
};

export const GeneralInfo: FC = () => {
  const [isEdited, setEdited] = useState(false);
  const [personalData, setPersonalData] = useState<TPersonalData>(INITIAL_DATA);
  const [initialValues, setInitialValues] =
    useState<TPersonalData>(INITIAL_DATA);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setPersonalData(initialValues);
    setEdited(false);
  };

  const handleConfirm = () => {
    setInitialValues(personalData);
    setEdited(false);
  };

  return (
    <>
      {isEdited ? (
        <div className="flex flex-col space-y-2 transition-all">
          <input
            name="fullName"
            type="text"
            className={`h-[40px] text-4xl font-bold uppercase bg-transparent max-w-full ${COMMON_INPUT_CLASSES}`}
            value={personalData.fullName}
            onChange={handleChange}
          />
          <input
            name="profession"
            type="text"
            className={`h-[24px] uppercase tracking-wide bg-transparent ${COMMON_INPUT_CLASSES}`}
            value={personalData.profession}
            onChange={handleChange}
          />
          <div className="flex items-center ml-auto space-x-2">
            <IconButton src={CheckIcon} onClick={handleConfirm} />
            <IconButton src={CloseIcon} onClick={handleCancel} />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col space-y-2 hover:opacity-50 transition-all cursor-pointer"
          onClick={() => setEdited(true)}
        >
          <h1 className="text-4xl font-bold uppercase tracking-widest max-w-full">
            {personalData.fullName}
          </h1>
          <h2 className="uppercase tracking-wide">{personalData.profession}</h2>
        </div>
      )}
    </>
  );
};
