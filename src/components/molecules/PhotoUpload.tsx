import { FC, useState } from "react";

import { UserIcon } from "../../utils/icons";

type TProps = {
  className?: string;
};

export const PhotoUpload: FC<TProps> = ({ className }) => {
  const [photo, setPhoto] = useState<any>(UserIcon);

  return (
    <div className="w-[180px] h-[180px] relative flex items-start justify-center cursor-pointer hover:opacity-80 transition-all">
      <img
        src={photo}
        alt="profile pic"
        className="w-full h-full object-cover bg-white rounded-full"
      />
      <input
        type="file"
        name="photo"
        className="w-full h-full absolute inset-0 bg-none cursor-pointer hover:opacity-80 transition-all hidden"
        placeholder=""
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange={(e) => console.log(e.target.files[0])}
      />
    </div>
  );
};
