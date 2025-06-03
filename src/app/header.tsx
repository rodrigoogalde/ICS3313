import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <Image src="/Logo.jpg" width={40} height={40} alt="Contandem Logo" className="rounded-full"/>
        <span className="font-bold text-xl text-gray-700">Contandem E-commerce</span>
      </div>
    </header>
  );
}
