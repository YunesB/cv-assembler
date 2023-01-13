import { FC, useMemo } from "react";

import { TSize, TSvg } from "../../projectTypes/general.types";
import { FIT_SIZE, LARGE_SIZE, MEDIUM_SIZE } from "../../utils/constants";

type TProps = {
  src: TSvg;
  size?: TSize | typeof FIT_SIZE;
  color?: string;
  className?: string;
};

export const Icon: FC<TProps> = ({
  src,
  color = "#000000",
  size = FIT_SIZE,
  className
}) => {
  const iconSize = useMemo(() => {
    switch (size) {
      case MEDIUM_SIZE:
        return "h-6 w-6";
      case LARGE_SIZE:
        return "h-12 w-12";
      case FIT_SIZE:
        return "w-1/5 h-1/5";
      default:
        return "h-2 w-2";
    }
  }, [size]);

  const textColor = `text-${color}`;

  return (
    <img
      src={src as unknown as string}
      className={`${textColor} h-${iconSize} w-${iconSize} ${className}`}
      alt="icon"
    />
  );
};
