import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const LinkSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 100,
  },
  url: {
    type: String,
    label: "Url",
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function () {
      return new Date();
    },
  },
});

const Links = new Mongo.Collection("links");

Links.attachSchema(LinkSchema);

export default Links;
