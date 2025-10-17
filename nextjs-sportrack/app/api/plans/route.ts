import { NextResponse } from "next/server";

export async function GET() {
  const plans = [
    { id: 1, name: "Futás kezdőknek", duration: "30 perc" },
    { id: 2, name: "Alap úszóedzés", duration: "45 perc" },
    { id: 3, name: "Kerékpáros intervallum", duration: "60 perc" },
  ];

  return NextResponse.json(plans);
}
