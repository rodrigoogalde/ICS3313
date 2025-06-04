import React from "react";
import Header from "../header";
import ComparadorPrecios from "./comparador";

// Dummy de productos
const productos = [
  {
    img: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png",
    text: "Egg Slicer",
    precios: [
        { tienda: "Contandem", precio: 10, moneda: "USD", url: "#" },
      { tienda: "Amazon", precio: 25, moneda: "USD", url: "https://amazon.com/producto" },
      { tienda: "aliExpress", precio: 18, moneda: "USD", url: "https://aliexpress.com/producto" },
      { tienda: "Alibaba", precio: 17, moneda: "USD", url: "https://alibaba.com/producto" },
      { tienda: "DHGate", precio: 20, moneda: "USD", url: "https://dhgate.com/producto" },
      { tienda: "Central Mayorista", precio: 19, moneda: "USD", url: "#" },
      { tienda: "Mercado Libre", precio: 26, moneda: "USD", url: "https://mercadolibre.com/producto" },
      { tienda: "ImportaPYME", precio: 20, moneda: "USD", url: "#" },
      { tienda: "DeChinaChile", precio: 21, moneda: "USD", url: "#" },
      { tienda: "Faire", precio: 23, moneda: "USD", url: "#" },
    ],
  },
];

export default function Page() {
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
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
            <ComparadorPrecios producto={productos[0]} />
        </div>
        <footer className="mt-10 text-gray-400 text-xs">© {new Date().getFullYear()} Comparador de Precios</footer>
        </main>
    </>
  );
}
