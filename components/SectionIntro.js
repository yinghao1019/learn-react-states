// TODO: 從react模組內引入useState Hook
// 並且定義此元件成為前端元件(只有前端元件可以使用React Hook)
"use client"
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import taiwanCities from "@/data/taiwan-cities";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// TODO: 引入臺灣城市清單 參考 @/data/taiwan-cities

export default function SectionIntro() {
    // TODO: 將使用者會輸入的值定義為狀態(state)，讓元件可以將最新的狀態渲染(render)到畫面上

    // TODO: 將城市清單渲染成放在<select>內的<option>
    // 關於HTML select tag說明文件: https://www.w3schools.com/tags/tag_select.asp
    
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [occupation, setOccupation] = useState("");
    const [copyhint, setCopyhint] = useState("");
    const [intro,setIntro]=useState("");
    const [isWaiting,setIsWaiting]=useState(false);
    const submitHandler = (e) => {
        e.preventDefault(); // 防止表單預設提交行為
        
        // 準備要發送的數據
        const data = {
            name,
            city,
            occupation
        };
        setIsWaiting(true);
        // 使用then/catch處理Promise
        axios.post('/api/intro-ai', data)
            .then(res => {
                setIntro(res.data.intro);
                setIsWaiting(false);
            })
            .catch(error => {
                console.error('gen ai error:', error);
                setIntro('sorry generate introduction error.please try again');
                setIsWaiting(false);
            });
    };

    return (
        <section id="SectionIntro" className="border-b-2 py-14">
            <div className="container mx-auto px-3">
                <SectionTitle
                    title="2. 設計一個AI自我介紹產生器"
                    subtitle="綁定輸入框的改變事件，在提交表單後，OpenAI即時產生自我介紹。"
                />
                <div className="grid grid-cols-2 gap-10">
                    {/* 輸入區 */}
                    {isWaiting ? (
                        <div className="py-4 flex justify-center items-center animate-pulse">
                            <p><FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-indigo-600" /> AI正在產生中</p>
                        </div>
                    ) : (
                        <form onSubmit={submitHandler} className="py-4">
                            <div className="mb-3">
                                <label htmlFor="nameInputUI" className="text-slate-700 block mb-1">姓名 <span className="text-red-500">*</span></label>
                                {/* TODO: 綁定姓名輸入框的變動事件，並在發生變動時更新姓名狀態 */}
                                <input
                                    id="nameInputUI"
                                    type="text"
                                    className="border-2 border-slate-400 focus:border-indigo-600 w-full rounded-md text-slate-700 focus:text-indigo-600 block p-2"
                                    placeholder="在此輸入您的姓名"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cityInputUI" className="text-slate-700 block mb-1">居住城市</label>
                                {/* TODO: 綁定城市下拉選單的變動事件，並在發生變動時更新城市狀態 */}
                                
                                <select
                                    id="cityInputUI"
                                    className="border-2 border-slate-400 focus:border-indigo-600 w-full rounded-md text-slate-700 block p-2"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    {taiwanCities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="occupationInputUI" className="text-slate-700 block mb-1">職業 <span className="text-red-500">*</span></label>
                                {/* TODO: 綁定職業輸入框的變動事件，並在發生變動時更新職業狀態 */}
                                <input
                                    id="occupationInputUI"
                                    type="text"
                                    className="border-2 border-slate-400 focus:border-indigo-600 w-full rounded-md text-slate-700 focus:text-indigo-600 block p-2"
                                    placeholder="在此輸入您的職業"
                                    value={occupation}
                                    onChange={(e) => setOccupation(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white px-4 py-2 rounded-md w-full" type="submit">
                                    送出表單
                                </button>
                            </div>
                        </form>
                    )}
                    {/* 預覽區 */}
                    <div className="py-4">
                        <h4 className="text-xl font-semibold text-slate-700 mb-3">自我介紹預覽</h4>
                        <textarea
                            className="border-2 border-slate-400 focus:border-indigo-600 min-h-48 w-full rounded-md text-slate-700 focus:text-indigo-600 block p-3"
                            value={intro}
                            readOnly
                        >
                        </textarea>

                        <button
                            className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-md"
                            onClick={() => {
                                navigator.clipboard.writeText(intro).then(()=>setCopyhint('已複製到剪貼簿!')).catch(()=> alert('複製失敗!更新瀏覽器'));
                                setTimeout(()=>{
                                    setCopyhint("");
                                }, 3000);
                            }}
                        >
                            複製到剪貼簿
                        </button>

                        <p className="text-indigo-600 mt-3">
                            {copyhint}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}