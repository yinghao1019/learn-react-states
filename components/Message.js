export function UserMessage({ message }) {
    return (
        <div className="flex justify-end mb-3">
            <div>
                <div className="dialog bg-gradient-to-tr from-slate-600 to-slate-800 rounded-xl rounded-tr-none shadow-lg text-white max-w-[360px] w-fit p-3">
                    <p className="text-lg mb-3 text-white">{message.text}</p>
                    <p className="text-sm text-right text-slate-400">
                        {/* TODO: 將時間替換成正確的時間 */}
                        2024/01/01 12:00:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export function AIMessage({ message }) {
    return (
        <div className="flex mb-3">
            <div>
                <div className="dialog bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-xl rounded-tl-none shadow-lg text-white max-w-[360px] w-fit p-3">
                    <p className="text-lg mb-3 text-white">{message.text}</p>
                    <p className="text-sm text-slate-100">
                        {/* TODO: 將時間替換成正確的時間 */}
                        2024/01/01 12:00:00
                    </p>
                </div>
            </div>
        </div>
    )
}