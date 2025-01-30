"use client"
import SectionTitle from "@/components/SectionTitle";
import { UserMessage, AIMessage } from "@/components/Message";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function SectionOpenAIChat() {
    // TODO: 設計狀態:
    // 1. 使用者在輸入框上的輸入值(userInput) -> 透過事件取得使用者在輸入框上的輸入值
    // 2. 所有訊息記錄(messageList) -> 用以儲存所有使用者與AI的訊息
    // 3. 一則使用者的訊息(userMessage) -> 必須包含文字(text)與資料產生的時間(createdAt)
    // 4. 一則AI的訊息(aiMessage) -> 必須包含文字(text)與資料產生的時間(createdAt)
    // 5. 是否在等待後端回應(isWaiting)

    // TODO: 設計一個函數負責處理綁定表單送出的事件
    // 這個函數必須將 userMessage POST給後端API讓後端程式可以與OpenAI模型對接

    const [userInput, setUserInput] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [isWaiting, setIsWaiting] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userInput);

        const userMessage = {
            text: userInput,
            createdAt: Date.now(),
            role: 'user'
        }
        // 新增的訊息擺前面
        setMessageList([userMessage, ...messageList]);
        setUserInput("");
        setIsWaiting(true);
        console.log(isWaiting);
        axios.post('/api/chat-ai', userMessage)
            .then((res) => {
                const aiMessage = res.data;
                setMessageList(prev => [aiMessage, ...prev]);
                setIsWaiting(false);
            })
            .catch((err) => {
                console.log(err);
                setIsWaiting(false);
            })
    }

    return (
        <>
            <section id="SectionOpenAIChat" className="py-14 relative z-20">
                <div className="container mx-auto px-3">
                    <SectionTitle
                        title="3. 設計一個 AI ChatBot 應用"
                        subtitle="利用state特性將使用者與AI的對話渲染到畫面上。"
                    />
                    {/* TODO: 綁定表單送出的事件 */}
                    <form
                        className="flex"
                        onSubmit={submitHandler}
                    >
                        <input
                            type="text"
                            className="flex-1 border-2 border-slate-400 focus:border-slate-600 w-full rounded-md text-slate-700 block p-2"
                            placeholder="在此輸入你想跟AI講的話吧!"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            minLength={2}
                            maxLength={200}
                            required
                        />
                        <button className="bg-slate-500 hover:bg-slate-600 active:bg-slate-70 text-white px-6 ml-3 rounded-md">送出</button>
                    </form>
                </div>
            </section>
            <section className="relative z-10 py-14 bg-gradient-to-t from-indigo-200 from-10% via-blue-200 via-30% to-white to-90%">
                <div className="container mx-auto">
                    <div className="px-3">
                        {
                            isWaiting && <div className="text-xl animate-pulse">
                                <p><FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin"/>AI 正在思考中...</p>
                            </div>
                        }
                        {
                            messageList.map((message) => {
                                const { role } = message;
                                if (role === 'user') {
                                    return <UserMessage key={message.createdAt} message={message} />
                                } else {
                                    return <AIMessage key={message.createdAt} message={message} />
                                }
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}