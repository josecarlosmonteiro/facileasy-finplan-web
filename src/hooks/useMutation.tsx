"use client";

import { useState } from "react";

type Props<T> = {
  mutationFn: (payload: any) => Promise<T>;
};

export function useMutation<T = unknown>({ mutationFn }: Props<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const mutate = async (payload: unknown) => {
    try {
      const data = await mutationFn(payload);
      setData(data);
    } catch (error: any) {
      setIsError(true);
      setError(error.message);
    }
  };

  return {
    mutate,
    data,
    isLoading,
    error,
    isError,
  };
}
