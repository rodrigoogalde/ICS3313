'use client'

import { useState } from "react";
import Image from "next/image";

type CardProps = {
  img: string;
  text: string;
  orders: number;
  targetOrders: number;
};

export default function Card({ img, text, orders, targetOrders }: CardProps) {
  // Calcula el porcentaje de avance
  const progress = Math.min((orders / targetOrders) * 100, 100);
  // Estado local para cantidad en el carrito
  const [quantity, setQuantity] = useState(0);

  // Handlers
  const handleAdd = () => setQuantity((q) => q + 1);
  const handleRemove = () => setQuantity((q) => (q > 0 ? q - 1 : 0));
  const handleBuy = () => setQuantity(1);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
      {/* <img src={img} alt={text} className="w-40 h-40 object-cover rounded-md mb-2" /> */}
      <Image
        src={img}
        alt={text}
        width={160}
        height={160}
        className="w-40 h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{text}</h3>
      <span className="text-sm text-gray-500 mb-2">
        Pedidos realizados: {orders} / {targetOrders}
      </span>
      {/* Barra de progreso */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Botón de agregar al carrito */}
      {quantity === 0 ? (
        <button
          onClick={handleBuy}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-1 px-4 rounded-md transition-colors"
        >
          Comprar
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <button
            onClick={handleRemove}
            className="bg-gray-200 hover:bg-gray-300 text-lg font-bold px-2 rounded-md"
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="font-semibold text-gray-800">{quantity}</span>
          <button
            onClick={handleAdd}
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold px-2 rounded-md"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
