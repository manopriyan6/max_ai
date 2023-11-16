"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("487df823-dec2-4ac1-a806-43d9781d2b9a");
  }, []);

  return null;
};
