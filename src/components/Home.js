import React, { useState, useEffect } from "react";
import axios from "axios";
import DriverRow from "./DriverRow";
import "../index.css";
import styles from "./styles";

const URL = "https://ergast.com/api/f1/";

const Home = () => {
  const [latestRace, setLatestRace] = useState([]);
  const [latestCircuit, setLatestCircuit] = useState([]);
  const [driverResults, setDriverResults] = useState([]);
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(URL + "current/last/results.json");
      const latestRace = request.data.MRData.RaceTable.Races[0];
      const driverResults = request.data.MRData.RaceTable.Races[0].Results;
      const latestCircuit = request.data.MRData.RaceTable.Races[0].Circuit;
      const winner = request.data.MRData.RaceTable.Races[0].Results[0].Driver;
      setLatestCircuit(latestCircuit);
      setLatestRace(latestRace);
      setDriverResults(driverResults);
      setWinner(winner);
    }
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <div>
        <h1>Races</h1>
        <h2>
          Round: {latestRace.round} Season: {latestRace.season}
        </h2>
        <h2>{latestRace.raceName}</h2>
        <h3>{latestCircuit.circuitName}</h3>
        <h4>
          Winner: {winner.givenName} {winner.familyName} #
          {winner.permanentNumber}
        </h4>
        <h4>{latestRace.date}</h4>
      </div>
      {driverResults.map((driver) => (
        <DriverRow data={driver} key={driver.number} />
      ))}
    </div>
  );
};

export default Home;
