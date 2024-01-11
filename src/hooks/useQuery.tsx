"use client";

import { api } from "@/services/api";
import { useEffect, useState } from "react";

export function useQuery<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await api.get(url);
        setData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  });

  return {
    data,
    isLoading,
    error,
  };
}
