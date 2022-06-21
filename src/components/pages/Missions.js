import React from "react";
import "./Mission.css";

function Missions() {
  return (
    <div>
      <h1> welcome from Missions</h1>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>
            <button>Not a member</button>
          </td>
          <td>
            <button>Join Mission</button>
          </td>{" "}
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>
            {" "}
            <button>Not a member</button>
          </td>
          <td>
            <button>Join Mission</button>
          </td>{" "}
        </tr>

        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>
            <button>Not a member</button>
          </td>
          <td>
            <button>Join Mission</button>
          </td>
        </tr>

        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>
            <button>Not a member</button>
          </td>
          <td>
            <button>Join Mission</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Missions;
