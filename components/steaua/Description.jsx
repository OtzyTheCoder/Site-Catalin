import React from "react";
import MapComponent from "../map/MapComponent";

const ProgramTable = () => {
  const groups = [
    { name: "Grupa 1", schedule: "L-V 10:00 - 12:00, S-D 10:00 - 17:00" },
    { name: "Grupa 2", schedule: "L-V 12:00 - 14:00, S-D 12:00 - 18:00" },
    // Add more groups as needed
  ];

  return (
    <table className="program-table">
      <thead>
        <tr>
          <th>Grupa</th>
          <th>Program</th>
        </tr>
      </thead>
      <tbody>
        {groups.map((group, index) => (
          <tr key={index}>
            <td>{group.name}</td>
            <td>{group.schedule}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Description = () => {
  return (
    <section  className="section description-section"
      data-wow-duration="0.4s"
      >
      <div className="content-container">
        <div className="program-container">
          <h2>Programul</h2>
          <ProgramTable />
        </div>
        <div className="map-container">
          <h2>Locație</h2>
          <MapComponent location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.0932426889453!2d26.040118195586516!3d44.41073232853609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20025b91f1193%3A0xab8e718317aae113!2sBazinul%20de%20%C3%AEnot%20Steaua%20Bucure%C5%9Fti!5e0!3m2!1sro!2sro!4v1733152036807!5m2!1sro!2sro" />
        </div>
      </div>
    </section>
  );
};

export default Description;
