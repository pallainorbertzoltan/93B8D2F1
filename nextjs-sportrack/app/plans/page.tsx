"use client";
import { useEffect, useState } from "react";

export default function PlansPage() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error("API hiba:", err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Edzéstervek</h1>

      {plans.length === 0 ? (
        <p className="text-center text-gray-500">Betöltés...</p>
      ) : (
        <ul className="space-y-4 max-w-md mx-auto">
          {plans.map((plan) => (
            <li
              key={plan.id}
              className="border rounded-lg p-4 bg-white shadow-sm text-center"
            >
              <h2 className="text-xl font-semibold mb-1">{plan.name}</h2>
              <p className="text-gray-600">{plan.duration}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
