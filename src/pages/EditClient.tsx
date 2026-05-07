import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClientById, updateClient } from "../services/clientService";
import type { Client } from "../types/client";

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  if (loading) return <p>Loading...</p>;
  if (!client) return <p>Client not found</p>;

  const handleChange = (field: keyof Client, value: string) => {
    setClient({ ...client, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!client) return;

    updateClient(client).then(() => {
      navigate("/clients");
    });
  };

  return (
    <div>
      <h1>Edit Client</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={client.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          value={client.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          value={client.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <select
          value={client.status}
          onChange={(e) => handleChange("status", e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditClient;
