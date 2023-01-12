import { FC, useMemo } from "react";

import { TSize } from "../../projectTypes/general.types";

import { LARGE_SIZE, MEDIOM_SIZE, SMALL_SIZE } from "@utils/constants";

type TProps = {
  src: string;
  size?: TSize;
  color?: string;
};

export const Icon: FC<TProps> = ({
  src,
  color = "#000000",
  size = SMALL_SIZE
}) => {
  const iconSize = useMemo(() => {
    switch (size) {
      case MEDIOM_SIZE:
        return 8;
      case LARGE_SIZE:
        return 16;
      default:
        return 4;
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
