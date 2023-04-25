import React from "react";
import { Brand } from "../../assets";
import Avatar from "../../Components/Avatar";
import { Button } from "../../Components/Buttons";

interface AllTeamMembers {
  socketId: string;
  userName: string;
}

interface Props {
  teamMemberList: AllTeamMembers[];
}

const Aside: React.FC<Props> = ({ teamMemberList }) => {
  return (
    <div className="text-slate-200 lg:pb-2 flex flex-row lg:flex-col justify-start items-center lg:items-start w-full lg:w-52 lg:min-w-[13rem]  h-10 md:h-14 lg:h-full border-b lg:border-r border-slate-700 overflow-hidden">
      <div className="brand flex flex-row p-2 border-b border-slate-700 lg:w-full">
        <Brand className="w-7 md:w-9 lg:w-12" />
        <h2 className="hidden lg:flex flex-col text-xl text-cyan-500 ml-2">
          <p className="font-bold tracking-wide">CodeShareX</p>
          <span className=" text-xs">Live Collaboration</span>
        </h2>
      </div>

      {/* Team members list */}
      <div className="team-member grow lg:w-full z-10 overflow-x-auto overflow-hidden -space-x-4 lg:py-2">
        <div className="flex gap-2 lg:flex-wrap px-2">
          {teamMemberList?.map((member) => (
            <Avatar teamMemberName={member.userName} key={member.socketId} />
          ))}
        </div>
      </div>

      {/* Button controls */}
      <div className="lg:w-full flex lg:flex-col gap-2 px-2 lg:px-0 z-50">
        <Button
          type="button"
          buttonLabel="Leave"
          className="w-20 lg:w-11/12 self-center py-1 text-xs truncate"
          onClick={(e) => console.log(e)}
        />
      </div>
    </div>
  );
};

export default Aside;
