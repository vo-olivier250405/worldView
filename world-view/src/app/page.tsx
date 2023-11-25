"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Country } from "@/interfaces/country";
import { CountryContext } from "@/contexts/contexts";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <NavBar />
        <section className="country-list">
          <CountryCard />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
