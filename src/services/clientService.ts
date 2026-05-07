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

export const createClient = (client: Omit<Client, "id">): Promise<Client> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newClient: Client = {
        ...client,
        id: Date.now(),
      };

      clients.push(newClient);

      resolve(newClient);
    }, 500);
  });
};

export const updateClient = (updatedClient: Client): Promise<Client> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = clients.findIndex(
        (client) => client.id === updatedClient.id,
      );

      if (index === -1) {
        reject(new Error("Client not found"));
        return;
      }

      clients[index] = updatedClient;

      resolve(updatedClient);
    }, 500);
  });
};

export const deleteClient = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = clients.findIndex((client) => client.id === id);

      if (index === -1) {
        reject(new Error("Client not found"));
        return;
      }

      clients.splice(index, 1);

      resolve();
    }, 500);
  });
};
