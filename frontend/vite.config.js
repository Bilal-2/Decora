import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https:{
      key:'./Certs/cert.key',
      cert : './Certs/cert.crt'
    },
    proxy: {
       "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
      "/Models_upload/": "http://localhost:5000"
    },
  },
});
