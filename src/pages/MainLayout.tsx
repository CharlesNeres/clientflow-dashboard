import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "200px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>ClientFlow</h2>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Link to="/" style={{ color: "#fff" }}>
            Dashboard
          </Link>
          <Link to="/clients" style={{ color: "#fff" }}>
            Clients
          </Link>
          <Link to="/tasks" style={{ color: "#fff" }}>
            Tasks
          </Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
