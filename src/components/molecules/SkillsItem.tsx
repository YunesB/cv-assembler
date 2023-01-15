import { FC } from "react";

type TSkill = {
  name: string;
  value: string;
};

type TProps = {
  data: TSkill[];
};

export const SkillsItem: FC<TProps> = ({ data }) => {
  return <>{data[0].name}</>;
};
