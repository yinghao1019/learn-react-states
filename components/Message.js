import moment from "moment";

const momentFormat = "YYYY/MM/DD HH:mm:ss";

export function UserMessage({ message }) {
    return (
        <div className="flex justify-end mb-3">
            <div>
                <div className="dialog bg-gradient-to-tr from-stone-600 to-stone-800 rounded-xl rounded-tr-none shadow-lg text-white max-w-[360px] w-fit p-3">
                    <p className="text-lg mb-3 text-white">{message.text}</p>
                    <p className="text-sm text-right text-stone-400">{moment(message.createdAt).format(momentFormat)}</p>
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
                    <p className="text-sm text-stone-100">{moment(message.createdAt).format(momentFormat)}</p>
                </div>
            </div>
        </div>
    )
}