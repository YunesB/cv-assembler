import { useRef, FC, useEffect, useState } from "react";

import { TSize, TSvg } from "../../projectTypes/general.types";
import { allIcons, EditIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";
import { handleClickOutside } from "../../utils/helpers";

type TProps = {
  size?: TSize;
  className?: string;
};

export const IconSelector: FC<TProps> = ({ size, className }) => {
  const [isEdited, setEdited] = useState(false);
  const [currentValue, setCurrentValue] = useState<TSvg>(EditIcon);
  const selectArea = useRef(null);

  const handleIconChange = (icon: TSvg) => {
    setCurrentValue(icon);
    setEdited(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", (e) =>
      handleClickOutside(e, () => setEdited(false))
    );

    return () => {
      document.removeEventListener("mouseup", (e) =>
        handleClickOutside(e, () => setEdited(false))
      );
    };
  });

  return (
    <div className={`relative rounded-md bg-gray-200 h-8 ${className}`}>
      <IconButton src={currentValue} onClick={() => setEdited(!isEdited)} />
      {isEdited && (
        <div
          className="absolute -b-20 bg-white shadow-md rounded-md border border-sky-100 grid grid-cols-4 gap-2 w-[154px] z-50"
          ref={selectArea as React.RefObject<HTMLDivElement>}
        >
          {[...allIcons, ...allIcons].map(({ name, icon }, index) => (
            <IconButton
              src={icon}
              key={`${name}-${index}`}
              onClick={() => handleIconChange(icon)}
              className="relative"
            />
          ))}
        </div>
      )}
    </div>
  );
};
