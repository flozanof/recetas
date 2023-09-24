import Receta from "./components/receta";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between p-24">
            <div className="z-10 max-w-5xl w-full flex-row items-start justify-between font-mono text-sm lg:flex">
                <Receta filename="ContramuslosPolloSoja.json" />
                <Receta filename="ContramuslosPolloSoja.json" />
            </div>
        </main>
    )
}
