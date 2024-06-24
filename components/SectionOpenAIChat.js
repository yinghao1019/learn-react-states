import SectionTitle from "@/components/SectionTitle";
import { UserMessage, AIMessage } from "@/components/Message";

export default function SectionOpenAIChat() {
    // TODO: 設計狀態:
    // 1. 使用者的輸入(userMessage) -> 必須包含文字(text)與資料產生的時間(createdAt)
    // 2. AI的回覆(aiMessage) -> 必須包含文字(text)與資料產生的時間(createdAt)

    // TODO: 設計一個函數負責處理綁定表單送出的事件
    // 這個函數必須將 userMessage POST給後端API讓後端程式可以與OpenAI模型對接

    return (
        <>
            <section id="SectionOpenAIChat" className="py-14 relative z-20">
                <div className="container mx-auto px-3">
                    <SectionTitle
                        title="5. 透過下方介面與OpenAI模型開啟第一段對話吧"
                        subtitle="利用state特性將使用者與AI的對話渲染到畫面上。"
                    />
                    {/* TODO: 綁定表單送出的事件 */}
                    <form
                        className="flex"
                    >
                        <input
                            type="text"
                            className="flex-1 border-2 border-stone-400 focus:border-stone-600 w-full rounded-md text-stone-700 block p-2"
                            placeholder="在此輸入你想跟AI講的話吧!"
                            required
                        />
                        <button className="bg-stone-500 hover:bg-stone-600 active:bg-stone-70 text-white px-6 ml-3 rounded-md">送出</button>
                    </form>
                </div>
            </section>
            <section className="relative z-10 py-14 bg-gradient-to-t from-indigo-200 from-10% via-blue-200 via-30% to-white to-90%">
                <div className="container mx-auto">
                    <div className="">
                        <AIMessage message={{
                            text: "這是一段AI回應的對話範例",
                            createdAt: 1719149969924
                        }} />
                        <UserMessage message={{
                            text: "這是一段使用者跟AI的對話範例",
                            createdAt: 1719132962547
                        }} />
                    </div>
                </div>
            </section>
        </>
    )
}