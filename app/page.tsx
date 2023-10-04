import Receta from "./components/receta";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between p-24">
            <div >
                <Receta filename="ContramuslosPolloSoja.json" />
                <Receta filename="ContramuslosPolloSoja.json" />
            </div>
        </main>
    )
}
