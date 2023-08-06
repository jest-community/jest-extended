/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["./test/**/*"],
    exclude: ["./test/**/__snapshots__/*"],
  },
});
