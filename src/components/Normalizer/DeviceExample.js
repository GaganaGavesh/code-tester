import React from "react";
import { normalize, schema } from "normalizr";

const data = [
  {
    device_id: "1234",
    network_status: "Offline",
    status: "Yes",
    frequency: 50,
  },
  {
    device_id: "12345",
    network_status: "online",
    status: "no",
    frequency: 123,
  },
  {
    device_id: "12346",
    network_status: "online",
    status: "no",
    frequency: 423,
  },
];

const DeviceExample = () => {
  const device = new schema.Entity("devices", {}, { idAttribute: "device_id" });

  const normalizedData = normalize(data, [device]);
  return (
    <div>
      <pre>{JSON.stringify(normalizedData, null, 2)}</pre>
    </div>
  );
};

export default DeviceExample;
