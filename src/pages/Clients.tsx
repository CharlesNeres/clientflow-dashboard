import { useState } from "react";
import { clients } from "../data/clients";

function Clients() {
  const [search, setSearch] = useState("");

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Clients</h1>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.company}</td>
              <td>{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
