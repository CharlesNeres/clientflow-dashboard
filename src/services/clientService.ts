import { clients } from "../data/clients";
import type { Client } from "../types/client";

export const getClients = (): Promise<Client[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(clients);
    }, 500);
  });
};

export const getClientById = (id: number): Promise<Client | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const client = clients.find((c) => c.id === id);
      resolve(client);
    }, 500);
  });
};
