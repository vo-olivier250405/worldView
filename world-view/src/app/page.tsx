"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Country } from "@/interfaces/country";
import { CountryContext } from "@/contexts/contexts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Link className="links" href="/details">
          TEST
        </Link>
        <section className="country-list">
          <CountryCard />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
