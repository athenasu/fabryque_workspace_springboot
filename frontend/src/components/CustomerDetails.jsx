import React, { useState, useEffect } from "react";
import axios from "axios";
import CityTemp from "./CityTemp";
import DeleteCust from "./DeleteCust";

////////////////////////////////////////
// FORMAT GENDER
const formatGender = function (custGender) {
  switch (custGender) {
    case 0:
      return "Female";
    case 1:
      return "Male";
    case 2:
      return "Undefined";
    default:
      return "Undefined";
  }
};

// FORMAT CITY OF BIRTH
const formatCityOfBirth = function (custCityOfBirth) {
  switch (custCityOfBirth) {
    case 0:
      return "Taipei";
    case 1:
      return "Taoyuan";
    case 2:
      return "Hsintsu";
    case 3:
      return "Taichung";
    case 4:
      return "Changhwa";
    case 5:
      return "Tainan";
    case 6:
      return "Kaohsiung";
    case 7:
      return "Pingtung";
    case 8:
      return "Taitung";
    default:
      return "Other";
  }
};

const CustomerDetails = () => {
  const [error, setError] = useState(null);
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    await axios.get("http://localhost:8080/fabryque/customer/customers").then(
      res => {
        setCustomers(res.data);
      },
      error => {
        console.log("Error fetching data: ", error);
        setError(error);
      }
    );
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCust = async id => {
    await axios
      .delete("http://localhost:8080/fabryque/customer/deleteCustomer", {
        data: {
          id: id,
        },
      })
      .then(
        async res => {
          res.data.successful &&
            setCustomers(prevCust => {
              return prevCust.filter((cust, index) => {
                return index !== id;
              });
            });
          await fetchCustomers();
        },
        error => {
          console.log("Error fetching data: ", error);
          setError(error);
        }
      );
  };

  return customers.map((customer, index) => {
    const gender = formatGender(customer.gender);
    const cityOfBirth = formatCityOfBirth(customer.cityOfBirth);

    return (
      <tr key={index} id="customer" custid={customer.id}>
        <td className="customer-id">{customer.id}</td>
        <td className="customer-name">{customer.name}</td>
        <td className="customer-gender">{gender}</td>
        <td className="customer-email">{customer.email}</td>
        <td className="customer-city-of-birth">{cityOfBirth}</td>
        <CityTemp cityOfBirth={customer.cityOfBirth} />
        <DeleteCust
          key={customer.id}
          custid={customer.id}
          onDelete={deleteCust}
        />
      </tr>
    );
  });
};

export default CustomerDetails;
