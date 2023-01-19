import { FC } from "react";

import { TDataType, TSectionType } from "../../projectTypes/general.types";
import { MEDIUM_SIZE } from "../../utils/constants";
import { DragIconHorizontal } from "../../utils/icons";
import { Icon } from "../atoms/Icon";
import { SectionBody } from "../molecules/SectionBody";
import { SectionHeader } from "../molecules/SectionHeader";

type TProps = {
  title?: string;
  type: TSectionType;
  data: TDataType;
};

export const Section: FC<TProps> = ({ title, type, data }) => {
  return (
    <div className="relative bg-white w-full mx-auto rounded-md shadow-md">
      <Icon
        src={DragIconHorizontal}
        className="absolute top-2 right-4"
        size={MEDIUM_SIZE}
      />
      <div className="w-full p-6">
        <SectionHeader title={title} />
        <SectionBody type={type} data={data} />
      </div>
    </div>
  );
};
