import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Dropdown from "../../Components/dropdown";
import { LanguageName, langNames } from "@uiw/codemirror-extensions-langs";
import io from "socket.io-client";
import Aside from "./Aside";
import Editor from "./Editor";

const SERVER_URL = "http://localhost:1360"; 

const EditorWindows = (): JSX.Element => {
  const [lang, setLang] = useState<LanguageName>("javascript");

  const location = useLocation();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const userName = location.state?.userName;

  useEffect(() => {
    const newSocket = io(SERVER_URL);

    

    return () => {
      newSocket.disconnect();
    };
  }, []);


  useEffect(() => {
    if (!userName) {
      navigate(`/${roomId}`);
    }
  }, []);

  return (
    <section className="w-full h-screen flex flex-col lg:flex-row  bg-zinc-900">
      <Aside teamMemberList={[]} />

      <div className="grow relative ">
        <div className="controls h-5">
          <Dropdown options={langNames} onChange={(value) => setLang(value)} />
        </div>
        <div className="" style={{ height: "calc(100% - 20px)" }}>
          <Editor lang={"javascript"} />
        </div>
      </div>
    </section>
  );
};

export default EditorWindows;
