/* eslint-disable no-undef */
import { normalize, schema } from "normalizr";
import React from "react";

const imageData = [
  {
    id: 1,
    title: "Partridge",
    tooltips: [
      {
        id: 10,
        x: 0.56,
        y: 0.59,
        content: "Jacky",
      },
      {
        id: 11,
        x: 0.08,
        y: 0.8,
        content: "Sarah",
      },
    ],
  },
  {
    id: 2,
    title: "The Great Seal of South Australia",
    tooltips: [
      {
        id: 20,
        x: 0.77,
        y: 0.74,
        content: "A sheaf of wheat",
      },
      {
        id: 21,
        x: 0.16,
        y: 0.2,
        content: "A sheep",
      },
    ],
  },
];

const ImageExampleTester = () => {
  const imgSchema = new schema.Entity("image", {}, { idAttribute: "id" });
  const tooltipSchema = new schema.Entity("tooltip");
  imgSchema.define({
    tooltips: [tooltipSchema],
  });

  const normalizedData = normalize(imageData, [imgSchema]);
  console.log(normalizedData);

  return (
    <div>
      <pre>{JSON.stringify(normalizedData, null, 2)}</pre>
    </div>
  );
};

export default ImageExampleTester;
