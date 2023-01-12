import { FC, useState } from "react";

import { IconButton } from "@components/atoms/IconButton";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import check from "../../assets/icons/сheck.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import close from "../../assets/icons/close.svg";

type TProps = {
  title: string;
};

export const SectionHeader: FC<TProps> = ({ title }) => {
  const [isEdited, setEdited] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="flex items-center justify-between w-full border-b-2 border-black py-4 text-lg"
      onClick={() => setEdited(true)}
    >
      {isEdited ? (
        <div className="w-full flex items-center justify-between">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="m-0 uppercase w-full"
          />
          <div className="flex items-center justify-between">
            <IconButton src={check} />
            <IconButton src={close} />
          </div>
        </div>
      ) : (
        <h2 className="text-lg py-4 border-b-2 border-black m-0 uppercase">
          {inputValue}
        </h2>
      )}
    </div>
  );
};
