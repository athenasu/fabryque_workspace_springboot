import React from "react";

const CustDetailHeading = () => {
  return (
    <thead>
      <tr>
        <th className="customer-id">ID</th>
        <th className="customer-name">Name</th>
        <th className="customer-gender">Gender</th>
        <th className="customer-email">Email</th>
        <th className="customer-city-of-birth">City of Birth</th>
        <th className="temperature">Temperature</th>
      </tr>
    </thead>
  );
};

export default CustDetailHeading;
