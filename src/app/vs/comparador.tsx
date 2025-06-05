import Image from "next/image";
import Link from "next/link";

interface Precio {
  tienda: string;
  precio: number;
  moneda: string;
  url: string;
  logoUrl?: string; // Puedes agregar un logo a cada tienda si lo tienes
}

interface Producto {
  img: string;
  text: string;
  precios: Precio[];
}

interface ComparadorPreciosProps {
  producto: Producto;
}

// Ejemplo de logos (agrega más según tu disponibilidad)
const logos: Record<string, string> = {
  "Amazon": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "Mercado Libre": "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.20.1/mercadolibre/logo__large_plus.png",
  "Alibaba": "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
  "aliExpress": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Aliexpress_logo.svg",
};

export default function ComparadorPrecios({ producto }: ComparadorPreciosProps) {
  const mejorPrecio = Math.min(...producto.precios.map((p) => p.precio));
  const tiendaMejorPrecio = producto.precios.find((p) => p.precio === mejorPrecio)?.tienda;

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <Image
            src={producto.img}
            alt={producto.text}
            fill
            className="object-cover"
            sizes="64px"
            priority
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
            <Link href="/graph" className="hover:underline hover:text-indigo-600 transition-colors">
                {producto.text}
            </Link>
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {producto.precios.map((p) => (
          <a
            href={p.url}
            key={p.tienda}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white rounded-lg hover:bg-gray-50 border border-gray-100 px-3 py-2 transition group"
          >
            {/* Logo tienda */}
            {logos[p.tienda] && (
              <div className="relative w-8 h-8 mr-3 flex-shrink-0">
                <Image src={logos[p.tienda]} alt={p.tienda} fill className="object-contain" />
              </div>
            )}
            {/* Nombre y moneda */}
            <span className="flex-1 text-gray-800 font-medium truncate">{p.tienda}</span>
            {/* Precio */}
            <span className={
            `ml-2 px-4 py-1 rounded-full font-bold text-sm border
            ${p.tienda === tiendaMejorPrecio
                ? "bg-yellow-100 text-yellow-900 border-yellow-500 shadow"
                : "bg-gray-100 text-gray-700 border-gray-200"}`
            }>
            ${p.precio.toLocaleString()} {p.moneda}
            </span>
            {p.tienda === tiendaMejorPrecio && (
            <span className="ml-2 px-2 py-0.5 bg-yellow-200 text-yellow-800 border border-yellow-400 rounded text-xs font-semibold shadow-sm">
                Mejor precio
            </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
