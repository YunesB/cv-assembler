import { FC, useMemo, useState } from "react";

import { TContact } from "../../projectTypes/general.types";
import {
  LINK_TYPE,
  MAIL_TYPE,
  PHONE_TYPE,
  STRING_TYPE
} from "../../utils/constants";

const COMMON_LINK_CLASSES = "m-0 color-unset hover:underline transition-all";

const INITIAL_DATA: TContact[] = [
  {
    type: STRING_TYPE,
    value: "Lorem Ipsum 22, APT 11, 050011, California, LA"
  },
  {
    type: LINK_TYPE,
    value: "https://www.yunes.ru"
  },
  {
    type: MAIL_TYPE,
    value: "yunes.b@gmail.com"
  },
  {
    type: PHONE_TYPE,
    value: "+74959379992"
  }
];

const getStaticDataContainer = ({ type, value }: TContact) => {
  switch (type) {
    case LINK_TYPE:
      return (
        <a
          href={value}
          target="_blank"
          rel="noreferrer"
          className={`${COMMON_LINK_CLASSES}`}
        >
          {value}
        </a>
      );
    case MAIL_TYPE:
      return (
        <a href={`mailto:${value}`} className={`${COMMON_LINK_CLASSES}`}>
          {value}
        </a>
      );
    case PHONE_TYPE:
      return (
        <a href={`callto:${value}`} className={`${COMMON_LINK_CLASSES}`}>
          {value}
        </a>
      );
    default:
      return <span>{value}</span>;
  }
};

const ContactItem: FC<TContact> = ({ type, value }) => {
  const [isEdited, setEdited] = useState(false);
  const [initialData, setInitialData] = useState<TContact>({ type, value });
  const [inputValue, setInputValue] = useState<TContact>({ type, value });

  const StaticContainer = useMemo(
    () => getStaticDataContainer({ type, value }),
    [type, value]
  );

  return (
    <li className="mt-5 hover:opacity-60 transition-all cursor-pointer">
      {StaticContainer}
    </li>
  );
};

export const Contacts: FC = () => {
  return (
    <ul className="border-t-2 border-white">
      {INITIAL_DATA.map(({ type, value }) => (
        <ContactItem type={type} value={value} />
      ))}
    </ul>
  );
};
