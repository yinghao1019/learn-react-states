import SectionTitle from "@/components/SectionTitle";

export default function SectionSimpleCounter() {
    // TODO: 將要計算的數字變成是一個 React State

    // TODO: 將接觸圖片的次數變成一個 React State

    return (
        <section id="SectionSimpleCounter" className="border-b-2 py-14">
            <div className="container mx-auto px-3">
                <SectionTitle
                    title="1. 簡單計數器"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-lg text-slate-500 mb-5">數字n現在是
                            <span className="text-orange-500 font-semibold">5</span>。
                        </h2>
                        <div className="flex">
                            <button
                                className="w-20 h-20 border-2 border-slate-400 rounded-l-lg block bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-500 text-2xl font-semibold"
                            // TODO: 綁定減1按鈕的點擊事件
                            >
                                減1
                            </button>

                            <div className="min-w-20 h-20 border-2 border-x-0 border-slate-400 text-2xl font-semibold flex justify-center items-center text-slate-500">
                                5
                            </div>

                            <button
                                className="w-20 h-20 border-2 border-slate-400 rounded-r-lg block bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-500 text-2xl font-semibold"
                            // TODO: 綁定加1按鈕的點擊事件
                            >
                                加1
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg text-slate-500 mb-5">數字x代表滑鼠游標接觸圖片的次數，現在的x是
                            <span className="text-orange-500 font-semibold">0</span>。
                        </h2>
                        <img
                            className="w-2/3 shadow-2xl hover:opacity-70 ease-in duration-200"
                            src="https://picsum.photos/id/908/1200/1200"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}