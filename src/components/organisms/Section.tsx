import { FC } from "react";

import { DragIconHorizontal } from "../../utils/icons";
import { Icon } from "../atoms/Icon";
import { SectionHeader } from "../molecules/SectionHeader";

type TProps = {
  title?: string;
};

export const Section: FC<TProps> = ({ title }) => {
  return (
    <div className="relative bg-white w-1/2 mx-auto rounded-md shadow-lg shadow-cyan-500/50">
      <Icon src={DragIconHorizontal} className="absolute top-2 right-4" />
      <div className="w-full p-4">
        <SectionHeader title={title} />
      </div>
    </div>
  );
};
