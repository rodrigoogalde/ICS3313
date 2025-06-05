"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function GraficoPrecioHistorico({ data }: { data: { fecha: string, precio: number }[] }) {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight">
        Evolución del precio Egg Slicer
      </h2>
      <div className="w-full h-64 bg-gray-100 rounded-xl p-4 shadow-inner">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fecha" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} domain={['auto', 'auto']} />
            <Tooltip />
            <Line type="monotone" dataKey="precio" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
