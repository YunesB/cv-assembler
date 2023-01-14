import { FC } from "react";

import { MEDIUM_SIZE } from "../../utils/constants";
import { DragIconHorizontal } from "../../utils/icons";
import { Icon } from "../atoms/Icon";
import { SectionBody } from "../molecules/SectionBody";
import { SectionHeader } from "../molecules/SectionHeader";

type TProps = {
  title?: string;
};

export const Section: FC<TProps> = ({ title }) => {
  return (
    <div className="relative bg-white w-full mx-auto rounded-md shadow-lg shadow-cyan-500/50">
      <Icon
        src={DragIconHorizontal}
        className="absolute top-2 right-4"
        size={MEDIUM_SIZE}
      />
      <div className="w-full p-6">
        <SectionHeader title={title} />
        <SectionBody />
      </div>
    </div>
  );
};
