import { FC } from "react";

import { TColors } from "../../projectTypes/general.types";

type TProps = {
  colors: TColors;
  onChange: (colors: TColors) => void;
};

export const ColorSelector: FC<TProps> = ({ colors, onChange }) => {
  return (
    <button
      type="button"
      className={`w-4 h-4 z-20 border border-${colors.text}`}
      style={{ backgroundColor: colors.bg }}
      onClick={() => onChange(colors)}
    />
  );
};
