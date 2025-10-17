const sports = [
  {
    name: "Futás",
    description: "Kiváló állóképesség-fejlesztő sport, bárhol űzhető.",
    image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800",
  },
  {
    name: "Úszás",
    description: "Az egész testet megmozgató, ízületkímélő mozgásforma.",
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800",
  },
  {
    name: "Kerékpár",
    description: "Kültéri sport, erősíti a lábakat és javítja a keringést.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800",
  },
];

export default function SportsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Sportok</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sports.map((s) => (
          <div
            key={s.name}
            className="border rounded-lg shadow-sm bg-white overflow-hidden"
          >
            <img src={s.image} alt={s.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{s.name}</h2>
              <p className="text-gray-700 text-sm">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
