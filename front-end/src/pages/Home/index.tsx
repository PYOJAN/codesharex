import {  useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Brand } from "../../assets";
import { Input, InputType } from "../../Components/Inputs";
import { Button } from "../../Components/Buttons";
import { useEffect, useState } from "react";

interface InputData {
  type: InputType;
  name: string;
  label: string;
  placeholder?: string;
}

const inputData: InputData[] = [
  {
    type: "text",
    name: "room-id",
    label: "Room id",
    placeholder: "Room id",
  },
  {
    type: "text",
    name: "user-name",
    label: "User name",
    placeholder: "User name",
  },
];

const Home = () => {
  const [roomId, setRoomId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const { roomId: invitadeRoomId } = useParams();
  const navigate = useNavigate();

  const handleUserNameChange = (value: string) => {
    setUserName(value);
  };
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (userName === "" || roomId === "") {
      return alert("User name and room id is require.");
    }

    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  useEffect(() => {
    if (invitadeRoomId) setRoomId(invitadeRoomId);
  }, [invitadeRoomId]);

  return (
    <section className="w-full bg-slate-900 h-screen flex justify-center items-center">
      <div className="form-wrapper sm:w-96 max-w[90%] bg-slate-700 p-6 rounded-md shadow-md shadow-slate-100/10">
        <form className="w-full flex flex-col gap-5">
          <div className="img w-full flex flex-row items-center text-cyan-400 ">
            <Brand className="w-20 mr-3" />
            <h2 className=" text-lg sm:text-xl font-semibold">
              <p className=" font-bold tracking-wider text-2xl">CodeShoreX</p>
              <span className=" text-sm sm:text-base">Live Collaboration</span>
            </h2>
          </div>
          {inputData.map((data) => (
            <Input
              key={data.name}
              type={data.type}
              lable={data.label}
              placeholder={data.placeholder}
              name={data.name}
              value={data.name === "room-id" ? roomId : userName}
              onChange={
                data.name === "room-id" ? undefined : handleUserNameChange
              }
              disabled={data.name === "room-id" ? true : false}
            />
          ))}

          <Button
            type="button"
            buttonLabel="Join"
            className=" mt-4 text-xl py-[6px] w-32 ml-auto"
            onClick={handleSubmit}
          />

          <p
            onClick={() => setRoomId(uuidv4())}
            className="cursor-pointer text-cyan-600 hover:underline"
          >
            Generate Room ID
          </p>
        </form>
      </div>
    </section>
  );
};

export default Home;
