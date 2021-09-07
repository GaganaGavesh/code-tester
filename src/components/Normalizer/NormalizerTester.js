import { normalize, schema } from "normalizr";
import React from "react";

import DeviceExample from "./DeviceExample";
import ImageExampleTester from "./ImageNormalizeExample";

const originalData = [
  {
    id_: "123",
    author: {
      id: "1",
      name: "Paul",
    },
    title: "My awesome blog post",
    comments: [
      {
        id: "324",
        commenter: {
          id: "2",
          name: "Nicole",
        },
      },
    ],
  },
  {
    id_: "456",
    author: {
      id: "2",
      name: "kamal",
    },
    title: "This is kamal's post",
    comments: [
      {
        id: "567",
        commenter: {
          id: "1",
          name: "paul",
        },
      },
      {
        id: "234",
        commenter: {
          id: "3",
          name: "gagana",
        },
      },
    ],
  },
];

const NormalizerTester = () => {
  // Define a users schema
  const user = new schema.Entity("users");

  // Define your comments schema
  const comment = new schema.Entity("comments", {
    commenter: user,
  });
  //nested ewa tynawa nam api ewa hadila tyna hati schema eka magin kiyanna ona nathnam anduraganna be neh
  // thawa meekee nested nathi fields tika serama automa gannawa

  // Define your article
  const article = new schema.Entity(
    "articles",
    {
      author: user,
      comments: [comment],
    },
    {
      //idAttribute: (value, parent) => parent.indexOf(value),
      idAttribute: "id_",
      processStrategy: (value, parent) => ({
        // meken apata normalize wenna kalin data thawa daganna pluwn
        ...value, // value eka spread karannna onaa meke tyna nested of or nikan tyna fields tika ganna nam
        articleId: value.id_,
        customDate: "gaganage thema me article eka",
      }),
    }
  );

  const mySchema = { articles: [article] };

  const normalizedData = normalize(originalData, [article]);

  console.log("normalizedData", normalizedData);

  return (
    <div>
      <pre>{JSON.stringify(normalizedData, null, 2)}</pre>
      {/* <hr />
      <ImageExampleTester />
      <hr />
      <DeviceExample /> */}
    </div>
  );
};

export default NormalizerTester;
