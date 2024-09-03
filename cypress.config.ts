import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: 'http://localhost:8000',
  },
});
