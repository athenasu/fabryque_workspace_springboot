import React, { useState, useEffect } from "react";
import axios from "axios";

// FORMAT CITY OF BIRTH MANDARIN
const formatCityOfBirthMandarin = function (custCityOfBirth) {
  switch (custCityOfBirth) {
    case 0:
      return "臺北市";
    case 1:
      return "桃園市";
    case 2:
      return "新竹市";
    case 3:
      return "臺中市";
    case 4:
      return "彰化縣";
    case 5:
      return "臺南市";
    case 6:
      return "高雄市";
    case 7:
      return "屏東縣";
    case 8:
      return "臺東縣";
    default:
      return "Other";
  }
};

const CityTemp = props => {
  const [error, setError] = useState(null);
  const [temp, setTemp] = useState(0);

  const fetchCityTemp = async () => {
    const locationName = formatCityOfBirthMandarin(props.cityOfBirth);
    const apikey = "CWB-BE4C91F0-43E2-428F-B6A9-02C5AA943D76";
    const format = "JSON";

    await axios
      .get(
        // `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apikey}&locationName=${locationName}&elementName=MaxT`
        `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apikey}&${format}=JSON&locationName=${locationName}&elementName=MaxT`
      )
      .then(
        res => {
          const cityTemp =
            res.data.records.location[0].weatherElement[0].time[0].parameter
              .parameterName;
          setTemp(cityTemp);
        },
        error => {
          console.log("Error fetching data: ", error);
          setError(error);
        }
      );
  };

  useEffect(() => {
    fetchCityTemp();
  });

  return <td className="temperature">{temp} °C</td>;
};

export default CityTemp;
