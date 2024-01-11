import { TRelease } from "@/types/releases";
import { api } from "../api";

const baseUrl = "/fixed-releases";

async function getAll(): Promise<TRelease[]> {
  try {
    const { data } = await api.get(baseUrl);
    return data;
  } catch (error: any) {
    console.error(error);
    return error.message;
  }
}

async function post(release: TRelease): Promise<TRelease | null> {
  try {
    const { data } = await api.post(baseUrl, release);
    return data;
  } catch (error: any) {
    console.error(error);
    return null;
  }
}

async function remove(releaseId: string) {
  try {
    await api.delete(`${baseUrl}/${releaseId}`);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const fixedReleasesService = {
  getAll,
  post,
  remove,
};
