import SectionTitle from "@/components/SectionTitle";

export default function SectionSimpleCounter() {
    // TODO: 將要計算的數字變成是一個 React State

    // TODO: 將接觸圖片的次數變成一個 React State

    return (
        <section id="SectionSimpleCounter" className="border-b-2 py-14">
            <div className="container mx-auto px-3">
                <SectionTitle
                    title="1. 簡單計數器"
                    subtitle="利用state特性讓計數器可以增加或減少數字。"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-lg text-stone-500 mb-5">數字n現在是
                            <span className="text-orange-500 font-semibold">5</span>。
                        </h2>
                        <div className="flex">
                            {/* TODO: 綁定減1按鈕的點擊事件 */}
                            <button
                                className="w-20 h-20 border-2 border-stone-400 rounded-l-lg block bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-500 text-2xl font-semibold"
                            >
                                減1
                            </button>

                            <div className="min-w-20 h-20 border-2 border-x-0 border-stone-400 text-2xl font-semibold flex justify-center items-center text-stone-500">
                                5
                            </div>

                            {/* TODO: 綁定加1按鈕的點擊事件 */}
                            <button
                                className="w-20 h-20 border-2 border-stone-400 rounded-r-lg block bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-500 text-2xl font-semibold"
                            >
                                加1
                            </button>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-lg text-stone-500 mb-5">數字n如果大於0，n是多少就要顯示多少顆橄欖球。</h2>
                            <h3 className="text-3xl">
                                {/* TODO: 讓橄欖球的數量與n是ㄧ致的 */}
                                <span className="inline-block mr-3">🏈</span>
                                <span className="inline-block mr-3">🏈</span>
                                <span className="inline-block mr-3">🏈</span>
                                <span className="inline-block mr-3">🏈</span>
                                <span className="inline-block mr-3">🏈</span>
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg text-stone-500 mb-5">數字x代表滑鼠游標接觸圖片的次數，現在的x是
                            <span className="text-orange-500 font-semibold">0</span>。
                        </h2>
                        <img
                            className="w-1/2 rounded-2xl shadow-2xl"
                            src="https://picsum.photos/id/908/1200/1200"
                            alt=""
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}