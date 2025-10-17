import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🏅 SportTrack</h1>
      <p className="text-gray-700 mb-6">
        Fedezd fel a sport világát és tervezz edzéseket egy modern, reszponzív felületen!
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/sports"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sportok
        </Link>
        <Link
          href="/plans"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Edzéstervek
        </Link>
      </div>
    </main>
  );
}
