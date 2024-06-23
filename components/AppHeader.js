export default function AppHeader({ title }) {
    return (
        <header className="py-20 text-center border-b-2 bg-gradient-to-tr from-stone-100 to-stone-200">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-stone-700">{title}</h1>
            </div>
        </header>
    )
}