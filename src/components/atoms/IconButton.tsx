import { FC, useMemo } from "react";

import { TButtonTypes, TSize, TSvg } from "../../projectTypes/general.types";
import { BUTTON_TYPE, LARGE_SIZE, MEDIUM_SIZE } from "../../utils/constants";

import { Icon } from "./Icon";

type TProps = {
  src: TSvg;
  color?: string;
  className?: string;
  type?: TButtonTypes;
  size?: TSize;
  onClick: () => void;
};

export const IconButton: FC<TProps> = ({
  src,
  color,
  className,
  type = BUTTON_TYPE,
  size = MEDIUM_SIZE,
  onClick
}) => {
  const buttonSize = useMemo(() => {
    switch (size) {
      case MEDIUM_SIZE:
        return "h-8 w-8";
      case LARGE_SIZE:
        return "h-16 w-16";
      default:
        return "h-4 w-4";
    }
  }, [size]);

  return (
    <button
      type={type}
      className={`p-1 border-none ${className} hover:opacity-75 transition-all ${buttonSize} rounded-md hover:bg-sky-100 transition-all`}
      onClick={onClick}
    >
      <Icon src={src} color={color} size={size} />
    </button>
  );
};
