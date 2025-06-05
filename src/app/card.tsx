'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  img: string;
  text: string;
  orders: number;
  targetOrders: number;
};

export default function Card({ img, text, orders, targetOrders }: CardProps) {
  const [quantity, setQuantity] = useState(0);

  const totalOrders = orders + quantity;
  const groupProgress = Math.min((orders / targetOrders) * 100, 100);
  const userProgress = Math.min((quantity / targetOrders) * 100, 100);

  const isGoalReached = totalOrders >= targetOrders;

  const handleAdd = () => {
    // Solo suma si NO se ha llegado a la meta
    if (totalOrders < targetOrders) setQuantity(q => q + 1);
  };
  const handleRemove = () => setQuantity(q => (q > 0 ? q - 1 : 0));
  const handleBuy = () => setQuantity(1);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
      <div className="w-40 h-40 relative mb-2">
        <Image
          src={img}
          alt={text}
          fill
          className="object-cover rounded-md"
          sizes="160px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        <Link href="/vs" className="hover:underline hover:text-indigo-600 transition-colors">
          {text}
        </Link>
      </h3>
<span className="text-lg font-semibold text-gray-500 mb-2">
  Meta: {totalOrders} / {targetOrders}
</span>

      {/* Barra de progreso */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4 relative">
        {/* Si la meta se logra, barra amarilla al 100% */}
        {isGoalReached ? (
          <div
            className="absolute left-0 top-0 h-full bg-yellow-400"
            style={{
              width: "100%",
              zIndex: 2,
              transition: "width 0.4s"
            }}
          />
        ) : (
          <>
            {/* Barra de avance grupal */}
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-400 to-blue-400"
              style={{
                width: `${groupProgress}%`,
                zIndex: 1,
                transition: "width 0.4s"
              }}
            />
            {/* Barra de avance usuario (encima, solo si quantity > 0) */}
            {quantity > 0 && (
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-95"
                style={{
                  width: `${groupProgress + userProgress > 100 ? 100 : groupProgress + userProgress}%`,
                  zIndex: 2,
                  transition: "width 0.4s"
                }}
              />
            )}
          </>
        )}
      </div>
      {/* Mensaje al lograr el objetivo */}
      {isGoalReached && (
        <span className="text-sm font-bold text-yellow-500 mb-2 animate-bounce">
          ¡Precio logrado!
        </span>
      )}
      {/* Botón de agregar al carrito */}
      {quantity === 0 ? (
        <button
          onClick={handleBuy}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-1 px-4 rounded-md transition-colors"
          disabled={isGoalReached}
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
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold px-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isGoalReached}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
