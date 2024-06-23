"use client";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import fortuneArray from "@/utils/fortune-array";
import FortuneCard from "./FortuneCard";

export default function SectionFortuneDrawer() {
    // TODO: 定義抽籤紀錄狀態(fortuneRecords) 在未開始抽籤前的初始值為空陣列
    // [ { level: "大吉", content: "今日運勢非常好，事事順利。", createdAt: 時間戳記 }, ... ]

    function clickHandler() {
        console.log("開始抽籤");
        // TODO: 隨機從 fortuneArray 中抽取一個籤詩

    }

    return (
        <section id="SectionFortuneDrawer" className="border-b-2 py-14">
            <div className="container mx-auto px-3">
                <SectionTitle
                    title="3. 抽張幸運籤"
                    subtitle="設計隨機抽籤功能，並顯示所有抽到的籤詩。"
                />
                <div className="my-4 text-center">
                    <button
                        className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-8 py-3 text-xl font-bold rounded-lg"
                        onClick={clickHandler}
                    >
                        開始抽籤
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {/* TODO: 渲染所有抽籤紀錄 */}

                    <FortuneCard fortune={{ level: "大吉", content: "大吉大利，所有事情都會有好的結果。", createdAt: 1719148247500 }} />
                </div>
            </div>
        </section>
    )
}