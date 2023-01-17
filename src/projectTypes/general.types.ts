import {
  BUTTON_TYPE,
  CANCEL_ICON,
  CHECK_ICON,
  DATED_SECTION_TYPE,
  EDIT_ICON,
  LARGE_SIZE,
  LIST_SECTION_TYPE,
  MEDIUM_SIZE,
  RESET_TYPE,
  SKILLS_SECTION_TYPE,
  SMALL_SIZE,
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
  jobTitle: string;
  description: string;
};

export type TSkill = {
  name: string;
  value: number;
};

export type TDataType = TTableDataType[] | TSkill[];

export type TSection = {
  name: string;
  title: string;
  type: TSectionType;
  data: TDataType;
};
