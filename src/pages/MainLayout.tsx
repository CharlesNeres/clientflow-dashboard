import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header>
        <h2>ClientFlow</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
