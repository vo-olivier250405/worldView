"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { Header } from "@/components/Header";
import { PageWrapper } from "./PageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Header />
        <main>
          <section className="country-list">
            <CountryCard />
          </section>
        </main>
        <footer></footer>
      </PageWrapper>
    </>
  );
}
