import { Link, Outlet } from "react-router-dom";
function Clients() {
  return (
    <div>
      <header>
        <h2>ClientFlow</h2>

        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Clients;
