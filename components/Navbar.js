export default function Navbar() {
    return (
        <nav className="w-full h-12 flex justify-between items-center px-5 bg-white shadow-sm fixed top-0 left-0 z-[999]">
            <a href="#header" className="text-lg font-semibold text-stone-700 hover:text-stone-900">Learn React States</a>
            <div className="navbar-menu">
                <a href="#SectionSimpleCounter" className="text-md font-semibold text-stone-500 hover:text-stone-900 mr-4">
                    簡單計數器
                </a>
                <a href="#SectionIntro" className="text-md font-semibold text-stone-500 hover:text-stone-900 mr-4">
                    自我介紹
                </a>
                <a href="#SectionFortuneDrawer" className="text-md font-semibold text-stone-500 hover:text-stone-900 mr-4">
                    抽張幸運籤
                </a>
                <a href="#SectionOpenAIChat" className="text-md font-semibold text-stone-500 hover:text-stone-900">
                    與AI對話
                </a>
            </div>
        </nav>
    )
}