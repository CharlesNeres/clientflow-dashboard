import { clients } from "../data/clients";
import type { Client } from "../types/client";
import { api } from "./api";

export const getClients = async (): Promise<Client[]> => {
  const response = await api.get("clients/");
  return response.data;
};

export const getClientById = async (
  id: number,
): Promise<Client | undefined> => {
  const response = await api.get(`/clients/${id}/`);
  return response.data;
};

export const createClient = async (
  client: Omit<Client, "id">,
): Promise<Client> => {
  const response = await api.post("/clients/", client);
  return response.data;
};

export const updateClient = async (client: Client): Promise<Client> => {
  const response = await api.put(`/clients/${client.id}/`, client);
  return response.data;
};

export const deleteClient = async (id: number): Promise<void> => {
  await api.delete(`/clients/${id}/`);
};
