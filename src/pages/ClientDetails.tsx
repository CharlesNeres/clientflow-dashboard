import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClientById } from "../services/clientService";
import type { Client } from "../types/client";

function ClientDetails() {
  const { id } = useParams();

  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getClientById(Number(id)).then((data) => {
        if (data) {
          setClient(data);
        }
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <p>Loading client...</p>;
  }

  if (!client) {
    return <p>Client not found</p>;
  }

  return (
    <div>
      <h1>{client.name}</h1>
      <p>Email: {client.email}</p>
      <p>Company: {client.company}</p>
      <p>Status: {client.status}</p>
    </div>
  );
}

export default ClientDetails;
