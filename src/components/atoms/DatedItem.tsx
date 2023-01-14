import { FC } from "react";

type TDataType = {
  dates: string;
  jobTitle: string;
  description: string;
};

type TProps = {
  data: TDataType;
};

export const DatedItem: FC<TProps> = ({ data }) => {
  const { dates, jobTitle, description } = data;

  return (
    <li className="flex items-start justify-between">
      <p className="text-sm">{dates}</p>
      <div className="flex flex-col w-[60%]">
        <p className="font-semibold">{jobTitle}</p>
        <p className="text-sm">{description}</p>
      </div>
    </li>
  );
};
