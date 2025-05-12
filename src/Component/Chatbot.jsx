import React, { useState } from "react";
import "./Chatbot.css";
import chatprofile from "../Assets/Images/ChatProfile.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SendIcon from "@mui/icons-material/Send";
import { KendraClient, QueryCommand } from "@aws-sdk/client-kendra";


const Chatbot = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [userInput, setUserInput] = useState("");

  const [messages, setMessages] = useState([
    {
      from: "bot",
      content: "Hello there! Talk now with our experts online!",
    },
    {
      from: "bot",
      content:
        "Please choose one of the options below so we can connect you to our friendly team of experts.",
      isOptions: true,
    },
  ]);


  const kendraClient = new KendraClient({
    region: "us-east-1",
    credentials: {
      secretAccessKey: "CF6FMQQ6yIChssSKsjkR8VLJKZ2Jn50f7P+FaZLE",
      accessKeyId: "AKIA4ZQOICUQUQV5TC7Q",
    }
  });


  const handleUserMessage = async (text) => {
    const userMsg = { from: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    try {

      const params = {
        IndexId: "d51cf5ea-4980-4b0b-ac0d-2305cdef1b6f",
        QueryText: text
      };
      const command = new QueryCommand(params);
      const response = await kendraClient.send(command);

      const topAnswer = response.ResultItems?.[0]?.DocumentExcerpt?.Text || "No results found.";

      const botMsg = {
        from: "bot",
        content: topAnswer,
        source: response?.source
      };
      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      console.error("Payank:", err);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          content: "Something went wrong. Please try again later.",
        },
      ]);
    }
  };

  const handleSend = () => {
    if (userInput.trim()) {
      handleUserMessage(userInput);
      setUserInput("");
    }
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-header">
        <span>Chat with a Rapidus Expert</span>
        <button className="chatbot-close" onClick={onClose}>
          {" "}
          <MoreVertIcon />
          <ArrowDropDownIcon />
        </button>
      </div>

      <div className="chatbot-body">
        <div className="chat-date">Fri, May 9</div>

        {messages.map((msg, index) => (
          <div
            className={`chat-row ${msg.from === "user" ? "right" : ""}`}
            key={index}
          >
            {msg.from !== "user" && (
              <img
                alt="avatar"
                src={chatprofile}
                style={{
                  width: "26px",
                  height: "26px",
                  marginRight: "6px",
                  marginTop: "4px",
                }}
              />
            )}
            <div
              className={`chat-bubble ${msg.from === "user" ? "user-bubble" : "bot-group"
                }`}
            >
              <div>{msg.content}</div>

              {msg.isOptions && (
                <div className="chat-options">
                  {[
                    "Product info & Instruction",
                    "Design Portal",
                    "Eng Data Analysis",
                  ].map((option) => (
                    <button
                      key={option}
                      className={`chat-option-btn ${selectedOption === option ? "selected" : "secondary"
                        }`}
                      onClick={() => {
                        setSelectedOption(option);
                        handleUserMessage(option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="send-button" onClick={handleSend}>
          <SendIcon />
          {/* ➤ */}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
