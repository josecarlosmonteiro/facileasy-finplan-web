"use client";

import { ReactNode, createContext, useState } from "react";

import { TRelease } from "@/types/releases";
import { fixedReleasesService } from "@/services/releases/fixedReleasesService";

type FixedReleasesContextProps = {
  releases: TRelease[];
  addRelease: (release: TRelease) => void;
  removeRelease: (idRelease: string) => void;
};

export const FixedReleasesContext = createContext(
  {} as FixedReleasesContextProps
);

export function FixedReleasesProvider({
  initialReleasesData,
  children,
}: {
  initialReleasesData: TRelease[];
  children: ReactNode;
}) {
  const [releases, setReleases] = useState<TRelease[]>(initialReleasesData);

  const addRelease = async (release: TRelease) => {
    const response = await fixedReleasesService.post(release);

    if (response !== null) setReleases((state) => [...state, response]);
  };

  const removeRelease = async (releaseId: string) => {
    const response = await fixedReleasesService.remove(releaseId);

    if (response === undefined)
      setReleases((state) => state.filter((el) => el.id !== releaseId));
  };

  const context: FixedReleasesContextProps = {
    releases,
    addRelease,
    removeRelease,
  };

  return (
    <FixedReleasesContext.Provider value={context}>
      {children}
    </FixedReleasesContext.Provider>
  );
}
