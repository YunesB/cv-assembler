import {
  BUTTON_TYPE,
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
