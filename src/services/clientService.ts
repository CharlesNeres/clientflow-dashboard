import { clients } from "../data/clients";
import type { Client } from "../types/client";

export const getClients = (): Promise<Client[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(clients);
    }, 500);
  });
};
