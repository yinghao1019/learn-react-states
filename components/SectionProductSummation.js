"use client";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

export default function SectionProductSummation() {
    // TODO: 設計選擇數量 quantity

    const product = {
        name: "Example Product",
        price: 1200,
        imageURL: "https://picsum.photos/id/998/1200/700",
    };

    // 
    const optionList = [];
    // TODO: 透過 JavaScript for迴圈產生 1~20 的 <option> 選項
    // 並將其放置到 optionList 內並於 <select> 中渲染

    return (
        <section id="SectionProductSummation" className="border-b-2 py-14">
            <div className="container mx-auto px-3">
                <SectionTitle
                    title="3. 設計一個商品總價計算程序"
                    subtitle="利用state特性即時提示使用者商品總價。"
                />
                <div className="w-1/2 md:w-1/3 rounded-lg overflow-hidden shadow-md">
                    <img src={product.imageURL} className="w-full" alt={product.name} />
                    <div className="p-3">
                        <h3 className="text-lg font-bold text-stone-800 mb-1">{product.name}</h3>
                        <p className="text-stone-800 mb-3">單價: <span className="text-orange-500 font-semibold">
                            ${product.price.toLocaleString()}
                        </span>
                        </p>
                        <p className="text-stone-800 mb-3">數量:
                            <select
                                className="border-2 border-stone-500 text-stone-500 font-semibold ml-2 p-2 rounded-md"
                            >
                                {optionList}
                            </select>
                        </p>
                    </div>
                </div>
                <h1 className="text-2xl mt-10">
                    你總共將會花費  <span className="text-orange-500 font-semibold">
                        {/* TODO: 將 單價 乘上 數量 的結果顯示於此 */}
                        $ {(9999999).toLocaleString()}
                    </span> 元
                </h1>
            </div>
        </section>
    )
}