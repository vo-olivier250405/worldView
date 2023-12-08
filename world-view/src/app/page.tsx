"use client";

import Link from "next/link";
import { CountryCard } from "@/components/CountryCard";
import { PageWrapper, RotateOnClick, AnimatedPLanet } from "./Animations";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import earth from "@/images/earth.png";
import { Filter } from "@/interfaces/filter";
import { InputSelect } from "@/components/InputSelect";
import Image from "next/image";
import { ButtonHome } from "@/components/ButtonHome";

export default function Home() {
  const [filter, setFilter] = useState<string>("");
  const [searchParams, setSearchParams] = useState<string>("");
  return (
    <>
      <PageWrapper>
        <div className="nav-bar">
          <NavBar filter={searchParams} setFilter={setSearchParams} />
        </div>
        <header>
          <AnimatedPLanet />
          {/* <RotateOnClick>
            <Image className="img" src={earth} alt="Logo" />
          </RotateOnClick> */}
          <div className="header">
            <h1>WORLD VIEW</h1>

            <InputSelect filter={filter} setFilter={setFilter} />
          </div>
        </header>

        <main>
          <section className="country-list">
            <CountryCard searchParams={searchParams} filter={filter} />
          </section>
        </main>
        <footer></footer>
      </PageWrapper>
    </>
  );
}
