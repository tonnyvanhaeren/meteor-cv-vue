import SimpleSchema from "simpl-schema";
import { Links } from "../collections/Links";

Links.schema = new SimpleSchema({
  title: { type: String },
  url: { type: String },
});

const link = {
  badfield: "bad bad",
  title: "my link",
  url: "https://my-link",
};

Links.schema.validate(link);
