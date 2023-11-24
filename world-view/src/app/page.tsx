"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { Card } from "@/components/Card";
import { Country } from "@/interfaces/country";
import { CountryContext } from "@/contexts/contexts";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link className="links" href="/details">
          TEST
        </Link>
        <CountryCard />
      </main>
      <footer></footer>
    </>
  );
}
