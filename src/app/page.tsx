import Card from "./card";
import Header from "./header";
import React from "react";
const productos = [
  {
    img: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png",
    text: "Egg Slicer",
    orders: 12,
    targetOrders: 20,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png",
    text: "Ice Cube Tray",
    orders: 8,
    targetOrders: 15,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/thumbnail.png",
    text: "Golden Shoes Woman",
    orders: 22,
    targetOrders: 25,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png",
    text: "Green and Black Glasses",
    orders: 5,
    targetOrders: 10,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png",
    text: "iPhone 12 Silicone Case with MagSafe Plum",
    orders: 5,
    targetOrders: 12,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png",
    text: "Party Glasses",
    orders: 5,
    targetOrders: 15,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png",
    text: "TV Studio Camera Pedestal",
    orders: 5,
    targetOrders: 8,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    text: "Cat Food",
    orders: 5,
    targetOrders: 20,
  },
  {
    img: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png",
    text: "Apple MagSafe Battery Pack",
    orders: 5,
    targetOrders: 18,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Productos para Exportar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productos.map((prod, idx) => (
            <Card key={idx} {...prod} />
          ))}
        </div>
      </main>
    </div>
  );
}
