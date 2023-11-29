"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { PageWrapper, RotateOnClick, AnimatedPLanet } from "./Animations";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import earth from "@/images/earth.png";
import Image from "next/image";

export default function Home() {
  const [filter, setFilter] = useState<string>("");

  return (
    <>
      <PageWrapper>
        <header>
          <NavBar />
          <AnimatedPLanet />
          {/* <RotateOnClick>
            <Image className="img" src={earth} alt="Logo" />
          </RotateOnClick> */}

          <div className="header">
            <h1>WORLD VIEW</h1>
            <SearchBar filter={filter} setFilter={setFilter} />
          </div>
        </header>

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
