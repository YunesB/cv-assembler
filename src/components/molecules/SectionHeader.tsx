import { createRef, FC, useEffect, useState } from "react";

import { CheckIcon, CloseIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

import { IconSelector } from "./IconSelector";

type TProps = {
  title?: string;
};

const MAX_HEADING_LENGTH = 20;

export const SectionHeader: FC<TProps> = ({ title }) => {
  const [isEdited, setEdited] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  const [inputValue, setInputValue] = useState(title ? title : "");
  const inputRef = createRef();

  useEffect(() => {
    setInitialValue(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isEdited) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdited]);

  const handleConfirm = () => {
    setInitialValue(inputValue);
    setEdited(false);
  };

  const handleCancel = () => {
    setInitialValue(initialValue);
    setInputValue(initialValue);
    setEdited(false);
  };

  return (
    <div className="flex items-center justify-between w-full border-b-2 border-black py-4 text-lg">
      <IconSelector className="mr-2" />
      {isEdited ? (
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="m-0 uppercase w-full"
            maxLength={MAX_HEADING_LENGTH}
            ref={inputRef as React.RefObject<HTMLInputElement>}
          />
          <div className="flex items-center ml-4">
            <IconButton
              src={CheckIcon}
              className="mr-2"
              onClick={handleConfirm}
            />
            <IconButton src={CloseIcon} onClick={handleCancel} />
          </div>
        </div>
      ) : (
        <h2
          className="text-lg m-0 uppercase leading-8 w-full hover:bg-blue-50 transition-all cursor-pointer bg-white"
          onClick={() => setEdited(true)}
        >
          {initialValue}
        </h2>
      )}
    </div>
  );
};
