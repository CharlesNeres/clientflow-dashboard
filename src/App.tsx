import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Tasks from "./pages/Tasks";
import ClientDetails from "./pages/ClientDetails";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="clients/:id" element={<ClientDetails />} />
          <Route path="clients/new" element={<NewClient />} />
          <Route path="clients/:id/edit" element={<EditClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
