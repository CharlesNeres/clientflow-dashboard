import { useParams } from "react-router-dom";

function ClientDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Client Details</h1>
      <p>Client ID: {id}</p>
    </div>
  );
}

export default ClientDetails;
