import {
  BUTTON_TYPE,
  CANCEL_ICON,
  CHECK_ICON,
  DATED_SECTION_TYPE,
  EDIT_ICON,
  LARGE_SIZE,
  LINK_TYPE,
  LIST_SECTION_TYPE,
  MAIL_TYPE,
  MEDIUM_SIZE,
  PHONE_TYPE,
  RESET_TYPE,
  SKILLS_SECTION_TYPE,
  SMALL_SIZE,
  STRING_TYPE,
  SUBMIT_TYPE
} from "../utils/constants";

export type TButtonTypes =
  | typeof SUBMIT_TYPE
  | typeof RESET_TYPE
  | typeof BUTTON_TYPE
  | undefined;

export type TSize = typeof SMALL_SIZE | typeof MEDIUM_SIZE | typeof LARGE_SIZE;

export type TIcon = typeof CANCEL_ICON | typeof CHECK_ICON | typeof EDIT_ICON;

export type TSectionType =
  | typeof DATED_SECTION_TYPE
  | typeof SKILLS_SECTION_TYPE
  | typeof LIST_SECTION_TYPE;

export type TSvg = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

export type TTableDataType = {
  from: string;
  to: string;
  companyName: string;
  jobTitle: string;
  description: string;
  id: string;
};

export type TSkill = {
  name: string;
  value: number;
  id: string;
};

export type TDataType = TTableDataType[] | TSkill[];

export type TSection = {
  name: string;
  title: string;
  type: TSectionType;
  id: string;
  data: TDataType;
};

export type TPersonalData = {
  fullName: string;
  profession: string;
};

export type TColors = {
  bg: string;
  text: string;
};

export type TContactType =
  | typeof STRING_TYPE
  | typeof LINK_TYPE
  | typeof MAIL_TYPE
  | typeof PHONE_TYPE;

export type TContact = {
  type: TContactType;
  value: string;
};
