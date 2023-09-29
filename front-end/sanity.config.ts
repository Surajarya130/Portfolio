import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "portfolio-studio",

  projectId: "fxvhg0eo",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
});
