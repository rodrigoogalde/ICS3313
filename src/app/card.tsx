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
  const [isFavorite, setIsFavorite] = useState(false); // FAVORITE STATE

  const totalOrders = orders + quantity;
  const groupProgress = Math.min((orders / targetOrders) * 100, 100);
  const userProgress = Math.min((quantity / targetOrders) * 100, 100);
  const isGoalReached = totalOrders >= targetOrders;

  const handleAdd = () => {
    if (totalOrders < targetOrders) setQuantity(q => q + 1);
  };
  const handleRemove = () => setQuantity(q => (q > 0 ? q - 1 : 0));
  const handleBuy = () => setQuantity(1);

  // Favorito handler
  const toggleFavorite = () => setIsFavorite(fav => !fav);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:scale-105 transition-transform relative">
      {/* Estrella en esquina superior derecha */}
      <button
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        className="absolute top-3 right-3 focus:outline-none"
        onClick={toggleFavorite}
        tabIndex={0}
      >
        <svg
          className={`w-7 h-7 transition-all duration-300
            ${isFavorite ? "fill-yellow-400 stroke-yellow-500 scale-110 drop-shadow-lg" : "fill-transparent stroke-yellow-500"}
            `}
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <polygon
            strokeLinejoin="round"
            strokeLinecap="round"
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          />
        </svg>
      </button>

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
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-400 to-blue-400"
              style={{
                width: `${groupProgress}%`,
                zIndex: 1,
                transition: "width 0.4s"
              }}
            />
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
      {isGoalReached && (
        <span className="text-sm font-bold text-yellow-500 mb-2 animate-bounce">
          ¡Precio logrado!
        </span>
      )}
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
