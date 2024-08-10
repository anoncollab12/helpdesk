import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Helpdesk",
      defaultLocale: "es",
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guía de uso",
          autogenerate: { directory: "Guia" },
        },
        {
          label: "Documentación",
          autogenerate: { directory: "Documentación" },
        },
        {
          label: "Preguntas Frecuentes",
          autogenerate: { directory: "Preguntas" },
        },
        {
          label: "Contacto",
          autogenerate: { directory: "Contacto" },
        },
      ],
    }),
  ],
});
