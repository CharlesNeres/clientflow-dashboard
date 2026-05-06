import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Tasks from "./pages/Tasks";
import ClientDetails from "./pages/ClientDetails";
import NewClient from "./pages/NewClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="clients/:id" element={<ClientDetails />} />
          <Route path="clients/new" element={<NewClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
