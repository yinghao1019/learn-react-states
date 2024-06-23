
// TODO: 從react模組內引入useState Hook
// 並且定義此元件成為前端元件(只有前端元件可以使用React Hook)

import SectionTitle from "@/components/SectionTitle";
// TODO: 引入臺灣城市清單 參考 @/utils/taiwan-cities

export default function IntroSection() {
    // TODO: 將使用者會輸入的值定義為狀態(state)，讓元件可以將最新的狀態渲染(render)到畫面上

    // TODO: 將城市清單渲染成放在<select>內的<option>
    // 關於HTML select tag說明文件: https://www.w3schools.com/tags/tag_select.asp

    return (
        <section id="IntroSection" className="border-b-2 py-10">
            <div className="container mx-auto px-3">
                <SectionTitle
                    title="設計一個自我介紹產生器"
                    subtitle="state若是被更新，畫面就會被react重新渲染。"
                />
                <div className="grid grid-cols-2 gap-10">
                    {/* 輸入區 */}
                    <div className="py-4">
                        <div className="mb-3">
                            <label htmlFor="nameInputUI" className="text-stone-700 block mb-1">姓名</label>
                            {/* TODO: 綁定姓名輸入框的變動事件，並在發生變動時更新姓名狀態 */}
                            <input
                                id="nameInputUI"
                                type="text"
                                className="border-2 border-stone-400 focus:border-stone-600 w-full rounded-md text-stone-700 block p-2"
                                placeholder="在此輸入您的姓名"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cityInputUI" className="text-stone-700 block mb-1">居住城市</label>
                            {/* TODO: 綁定城市下拉選單的變動事件，並在發生變動時更新城市狀態 */}
                            <select
                                id="cityInputUI"
                                className="border-2 border-stone-400 focus:border-stone-600 w-full rounded-md text-stone-700 block p-2"
                            >

                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="occupationInputUI" className="text-stone-700 block mb-1">職業</label>
                            {/* TODO: 綁定職業輸入框的變動事件，並在發生變動時更新職業狀態 */}
                            <input
                                id="occupationInputUI"
                                type="text"
                                className="border-2 border-stone-400 focus:border-stone-600 w-full rounded-md text-stone-700 block p-2"
                                placeholder="在此輸入您的職業"
                            />
                        </div>
                    </div>
                    {/* 預覽區 */}
                    <div className="py-4">
                        <h4 className="text-xl font-semibold text-stone-700 mb-3">自我介紹預覽</h4>
                        {/* TODO: 讓自我介紹呈現在textarea內 */}
                        <textarea
                            className="border-2 border-stone-400 focus:border-stone-600 min-h-48 w-full rounded-md text-stone-700 block p-3"
                            value="你好，我的名字叫做XXX是一個住在OOO的KKK。"
                            readOnly
                        ></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}