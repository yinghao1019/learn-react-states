export default function AppHeader({ title, description }) {
    return (
        <header id="header" className="py-20 mt-12 text-center border-b-2 bg-gradient-to-tr from-stone-100 to-stone-200">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-stone-700">{title}</h1>
                <p className="text-xl mt-4 text-stone-700">{description}</p>
            </div>
        </header>
    )
}