import { FC } from "react";

import { DatedItem } from "../atoms/DatedItem";

const mockData = [
  {
    dates: "26 AUG 2018 - 27 AUG 2020",
    jobTitle: "PIERRE DUNN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
  },
  {
    dates: "28 AUG 2020 - 28 AUG 2021",
    jobTitle: "PIERRE DUNN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam magna, congue in orci facilisis, tincidunt finibus mauris. Aliquam elementum maximus vehicula."
  }
];

type TProps = {
  //
};

export const SectionBody: FC<TProps> = () => {
  return (
    <ul className="flex flex-col space-y-4 my-4">
      {mockData.map((data) => (
        <DatedItem data={data} />
      ))}
    </ul>
  );
};
