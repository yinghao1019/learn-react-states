import moment from "moment";
import Markdown from "react-markdown";

export function UserMessage({ message }) {
    const { text, createdAt } = message;
    const timeFormat = "YYYY/MM/DD HH:mm:ss";

    return (
        <div className="flex justify-end mb-3">
            <div>
                <div className="dialog bg-gradient-to-tr from-slate-600 to-slate-800 rounded-xl rounded-tr-none shadow-lg text-white max-w-[360px] w-fit p-3">
                    <p className="text-lg mb-3 text-white">{text}</p>
                    <p className="text-sm text-right text-slate-400">
                        {moment(createdAt).format(timeFormat)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export function AIMessage({ message }) {
    const { text, createdAt } = message;
    const timeFormat = "YYYY/MM/DD HH:mm:ss";

    return (
        <div className="flex mb-3">
            <div>
                <div className="dialog bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-xl rounded-tl-none shadow-lg text-white max-w-[360px] w-fit p-3">
                    <p className="text-lg mb-3 text-white"><Markdown>{text}</Markdown></p>
                    <p className="text-sm text-slate-100">
                        {moment(createdAt).format(timeFormat)}
                    </p>
                </div>
            </div>
        </div>
    )
}