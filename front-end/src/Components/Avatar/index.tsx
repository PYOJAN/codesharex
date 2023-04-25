import React, { useEffect, useState } from "react";

interface AvatarOptions {
  teamMemberName: string;
}

const Avatar: React.FC<AvatarOptions> = ({ teamMemberName }): JSX.Element => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    let splitedName = teamMemberName.split(" ");
    splitedName = splitedName.map((n) => n.charAt(0));
    setName(splitedName.join(""));
  }, [teamMemberName]);

  return (
    <div className="w-8 lg:w-14 select-none">
      <div className="w-7 h-7 md:w-8 md:h-8 lg:w-14 lg:h-14 bg-rose-500 text-sm md:text-base lg:text-lg font-semibold md:font-bold rounded-md flex justify-center items-center tracking-widest">
        {name}
      </div>
      <p className="hidden lg:block w-full truncate whitespace-nowrap font-semibold tracking-wide">
        {teamMemberName}
      </p>
    </div>
  );
};

export default Avatar;
