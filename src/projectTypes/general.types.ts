import {
  BUTTON_TYPE,
  CANCEL_ICON,
  CHECK_ICON,
  EDIT_ICON,
  LARGE_SIZE,
  MEDIUM_SIZE,
  RESET_TYPE,
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

export type TSvg = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
