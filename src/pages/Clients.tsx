import { useEffect, useState } from "react";
import type { Client } from "../types/client";
import { Link } from "react-router-dom";
import { deleteClient, getClients } from "../services/clientService";
function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getClients()
      .then((data) => {
        setClients(data);
      })
      .catch(() => {
        setError("Failed to load clients.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    deleteClient(id).then(() => {
      getClients().then((data) => {
        setClients(data);
      });
    });
  };

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return <p>Loading clients...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Clients</h1>

      <Link to="/clients/new">
        <button>Create Client</button>
      </Link>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>
                <Link to={`/clients/${client.id}`}>{client.name}</Link>
              </td>
              <td>{client.email}</td>
              <td>{client.company}</td>
              <td>{client.status}</td>
              <td>
                <Link to={`/clients/${client.id}/edit`}>
                  <button className="edit">Edit</button>
                </Link>
                <button
                  className="delete"
                  onClick={() => handleDelete(client.id)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
