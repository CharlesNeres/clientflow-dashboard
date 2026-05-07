import { Link, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
function MainLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "220px",
          background: "#111827",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "20px" }}>ClientFlow</h2>

          <nav
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Link to="/">Dashboard</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/tasks">Tasks</Link>
          </nav>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
