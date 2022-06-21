import React from "react";
import { useSelector } from "react-redux";
import "./Mission.css";

function Missions() {
  const dataArray = useSelector((state) => state.Missions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((key) => (
            <tr key={key.id}>
              <td className="names">{key.name}</td>
              <td className="description">{key.description}</td>
              <td>
                <button type="button">active Member</button>
              </td>
              <td>
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
