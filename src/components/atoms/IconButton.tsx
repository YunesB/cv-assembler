import { FC } from "react";

import { TButtonTypes } from "projectTypes/general.types";

import { BUTTON_TYPE } from "@utils/constants";

import { Icon } from "./Icon";

type TProps = {
  src: string;
  color?: string;
  className?: string;
  type?: TButtonTypes;
};

export const IconButton: FC<TProps> = ({
  src,
  color,
  className,
  type = BUTTON_TYPE
}) => {
  return (
    <button
      type={type}
      className={`p-2 border-none ${className} hover:opacity-75 transition-all`}
    >
      <Icon src={src} color={color} />
    </button>
  );
};
