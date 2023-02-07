import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import ChatBody from "@/components/ChatBody";
import ChatContainer from "@/components/ChatContainer";
import ChatFooter from "@/components/ChatFooter";
import ChatHeader from "@/components/ChatHeader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [typedMsg, setTypedMsg] = useState("");
  const [reply, setReply] = useState("");
  const [screenMode, setScreenMode] = useState("chat"); //chat, card

  const endChat = () => {
    setTimeout(() => {
      setScreenMode("card");
    }, 1000);
  };

  useEffect(() => {
    setMessages([
      ...messages,
      {
        msg: "tell me a good knock knock joke",
        sender: 0,
      },
    ]);
  }, []);

  useEffect(() => {
    if (reply) {
      switch (reply) {
        case "knock knock":
          setMessages([
            ...messages,
            {
              msg: "who's there?",
              sender: 0,
            },
          ]);
          setReply("");
          break;
        case "amos":
          setMessages([
            ...messages,
            {
              msg: "amos who?",
              sender: 0,
            },
          ]);
          setReply("");
          break;
        case "a mosquito":
          setMessages([
            ...messages,
            {
              msg: "😂",
              sender: 0,
            },
          ]);
          setReply("");
          endChat();
          break;
        default:
          setMessages([
            ...messages,
            {
              msg: "Not what I was looking for...you can do this",
              sender: 0,
            },
          ]);
          setReply("");
          break;
      }
    }
  }, [messages, reply]);

  return (
    <div className="bg-red-100">
      <AnimatePresence>
        {screenMode === "chat" && (
          <ChatContainer key="chat">
            <ChatHeader />
            <ChatBody messages={messages} />
            <ChatFooter
              typedMsg={typedMsg}
              setReply={setReply}
              setMessages={setMessages}
              setTypedMsg={setTypedMsg}
              messages={messages}
            />
          </ChatContainer>
        )}
        {screenMode === "card" && (
          <CardContainer key="card">
            <Card />
          </CardContainer>
        )}
      </AnimatePresence>
    </div>
  );
}
