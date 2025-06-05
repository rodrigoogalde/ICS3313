import Header from "../header";
import GraficoPrecioHistorico from "./GraficoPrecioHistorico";


export default function Page() {
  const historialPrecios = [
    { fecha: "2025-05-29", precio: 22 },
    { fecha: "2025-05-30", precio: 21 },
    { fecha: "2025-05-31", precio: 20 },
    { fecha: "2025-06-01", precio: 21 },
    { fecha: "2025-06-02", precio: 19 },
    { fecha: "2025-06-03", precio: 18 },
    { fecha: "2025-06-04", precio: 20 },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f7fa] flex flex-col items-center py-16 px-2">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          Comparación de Precios
        </h1>
        <p className="mb-10 text-lg text-gray-600 max-w-xl text-center font-normal">
          Compara el precio de tu producto favorito en los principales marketplaces, de forma simple y rápida.
        </p>
        {/* GRAFICO HISTORICO */}
        <div className="w-full max-w-2xl">
          <GraficoPrecioHistorico data={historialPrecios} />
        </div>
        <footer className="mt-10 text-gray-400 text-xs">
          © {new Date().getFullYear()} Comparador de Precios
        </footer>
      </main>
    </>
  );
}
