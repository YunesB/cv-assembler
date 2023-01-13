import { FC, useMemo } from "react";

import { TSize } from "../../projectTypes/general.types";
import { FIT_SIZE, LARGE_SIZE, MEDIUM_SIZE } from "../../utils/constants";

type TProps = {
  src: string;
  size?: TSize | typeof FIT_SIZE;
  color?: string;
};

export const Icon: FC<TProps> = ({
  src,
  color = "#000000",
  size = FIT_SIZE
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

  return (
    <img
      src={src}
      className={`text-[${color}] h-${iconSize} w-${iconSize}`}
      alt="icon"
    />
  );
};
