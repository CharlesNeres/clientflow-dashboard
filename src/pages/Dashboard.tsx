import { clients } from "../data/clients";

function Dashboard() {
  const totalClients = clients.length;

  const activeClients = clients.filter(
    (client) => client.status === "Active",
  ).length;

  const inactiveClients = clients.filter(
    (client) => client.status === "Inactive",
  ).length;

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Clients</h3>
          <p>{totalClients}</p>
        </div>

        <div className="card">
          <h3>Active Clients</h3>
          <p>{activeClients}</p>
        </div>

        <div className="card">
          <h3>Inactive Clients</h3>
          <p>{inactiveClients}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
