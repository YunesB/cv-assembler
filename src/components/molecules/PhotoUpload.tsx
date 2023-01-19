import { FC, useState } from "react";

import { UserIcon } from "../../utils/icons";

type TProps = {
  className?: string;
};

export const PhotoUpload: FC<TProps> = ({ className }) => {
  const [photo, setPhoto] = useState<any>(UserIcon);

  return (
    <div className="w-[150px] h-[150px] p-10 relative">
      <img
        src={photo}
        alt="profile pic"
        className="w-full h-full object-cover bg-white"
      />
      <input
        type="file"
        name="photo"
        className="w-full h-full absolute inset-0"
        onChange={(e) => console.log(e)}
      />
    </div>
  );
};
