import { useRef, FC, useEffect, useState, useMemo } from "react";

import { TContactType } from "../../projectTypes/general.types";
import { CONTACT_TYPES } from "../../utils/constants";
import { EditIcon } from "../../utils/icons";
import { IconButton } from "../atoms/IconButton";

type TProps = {
  type: TContactType;
  changeType: (type: TContactType) => void;
  className?: string;
};

const handleTypeIconChange = (type: TContactType) => {
  return CONTACT_TYPES.find((t) => t.type === type)?.icon;
};

export const ContactTypeSelector: FC<TProps> = ({
  type,
  changeType,
  className
}) => {
  const [isEdited, setEdited] = useState(false);
  const selectArea = useRef(null);

  const handleIconChange = (type: TContactType) => {
    changeType(type);
    setEdited(false);
  };

  const currentIcon = useMemo(
    () => handleTypeIconChange(type) || EditIcon,
    [type]
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (selectArea.current && !selectArea.current.contains(event.target)) {
        setEdited(false);
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  });

  return (
    <div className={`relative rounded-md bg-gray-200 h-8 ${className}`}>
      <IconButton src={currentIcon} onClick={() => setEdited(!isEdited)} />
      {isEdited && (
        <div
          className="absolute -b-20 bg-white shadow-md rounded-md border border-sky-100 grid grid-cols-4 gap-2 w-[154px] z-50"
          ref={selectArea as React.RefObject<HTMLDivElement>}
        >
          {CONTACT_TYPES.map(({ icon, type }, index) => (
            <IconButton
              src={icon}
              key={`${index}-${type}`}
              onClick={() => handleIconChange(type)}
              className="relative"
            />
          ))}
        </div>
      )}
    </div>
  );
};
