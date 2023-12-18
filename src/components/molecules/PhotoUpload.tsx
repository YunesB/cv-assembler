import { ChangeEvent, FC, useState } from "react";

import { UserIcon } from "../../utils/icons";

type TProps = {
  colors: {
    bg: string;
    text: string;
  };
};

export const PhotoUpload: FC<TProps> = ({ colors }) => {
  const [photo, setPhoto] = useState<any>(UserIcon);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (FileReader && files && files.length) {
      const fr = new FileReader();
      fr.onload = () => {
        setPhoto(fr.result);
      };
      fr.readAsDataURL(files[0]);
    }
  };

  return (
    <div
      className={`w-[180px] h-[180px] relative flex items-start justify-center overflow-hidden border-4 border-${colors.text} rounded-full`}
    >
      <img
        src={photo}
        alt="profile pic"
        className="w-full h-full object-cover bg-white rounded-full"
      />
      <label className="w-full h-full absolute inset-0 bg-none cursor-pointer custom-upload">
        <input
          type="file"
          name="photo"
          className="hidden"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleChangeImage}
        />
      </label>
    </div>
  );
};
