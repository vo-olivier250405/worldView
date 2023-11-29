"use client";

import { fetchCountryData } from "@/Country/CountryService";
import { Country } from "@/interfaces/country";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DetailCountry } from "../../../components/DetailCountry";
import { PageWrapper } from "@/app/Animations";

type IRouter = {
  path: string;
  name: string | null;
};

const Page = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [router, setRouter] = useState<IRouter>(Object);
  const [countryData, setCountryData] = useState<Country>(Object);

  useEffect(() => {
    setRouter({ path: pathname, name: searchParams.get("name") });
    if (router.name) {
      fetchCountryData(`${router.name}`).then((response) => {
        return setCountryData(response.data[0]);
      });
    }
  }, [pathname, searchParams, router.name]);

  return (
    <>
      <PageWrapper>
        <DetailCountry country={countryData} />
      </PageWrapper>
    </>
  );
};

export default Page;
