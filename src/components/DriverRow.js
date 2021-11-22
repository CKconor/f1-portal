import React from "react";
import styles from "./styles";
import '../index.css';

const DriverRow = (data) => {
  console.log(data);
  const teamName = data.data.Constructor.constructorId;

  return (
    <table style={styles.table}>
      <thead style={styles.resultsrow}>
        <tbody style={styles.table}>
            <div className={teamName + ' teamColor'}></div>
          <tr>
            <td style={styles.numberTD}>
              <span style={styles.driverPosition}>P{data.data.position}</span>
            </td>
            <td style={styles.numberTD}>
              <span style={styles.driverNumber}>
                {data.data.Driver.permanentNumber}
              </span>
            </td>
            <td style={styles.nameTD}>
              <h1 style={styles.driverName}>
                {data.data.Driver.givenName} {data.data.Driver.familyName}
              </h1>
            </td>
            <td>
              <span>{data.data.Constructor.name}</span>
            </td>
            <td>
              <span>{data.data.laps}</span>
            </td>
            <td>
              <span>{data.data.points}</span>
            </td>
            <td>
              <span>{data.data.status}</span>
            </td>
          </tr>
        </tbody>
      </thead>
    </table>
  );
};

export default DriverRow;
