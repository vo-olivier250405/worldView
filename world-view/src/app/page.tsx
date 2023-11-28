"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { Header } from "@/components/Header";
import { PageWrapper } from "./PageWrapper";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<string>("");

  return (
    <>
      <PageWrapper>
        <Header />
        <SearchBar filter={filter} setFilter={setFilter} />
        <main>
          <section className="country-list">
            <CountryCard filter={filter} />
          </section>
        </main>
        <footer></footer>
      </PageWrapper>
    </>
  );
}
