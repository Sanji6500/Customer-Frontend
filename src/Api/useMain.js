import React from "react";
import { useQuery } from "react-query";
import { geCurrentAds } from "../Api/api";

export const useMain = () => {
  const { isLoading: loadingCurrentAds, data: dataCurrentAds } = useQuery(
    "geCurrentAds",
    geCurrentAds
  );

  return { loadingCurrentAds, dataCurrentAds };
};
