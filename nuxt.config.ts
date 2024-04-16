// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Billetfacile",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: "billetfacile est une plateforme web et mobile permettant aux jeunes d’organiser des événements, consulter et acheter des billets facilement et d’une manière sécurisée.." },
        { name: 'keywords', content: "Tickets, Guinée, billetfacile, billets, collectes, evenements" },
        { name: 'author', content: 'Billetfacile'},
        { name: 'email', content: 'contact@billetfacile.com' },
        { name: 'website', content: 'https://billetfacile.com' },
        { name: 'Version', content: 'v3.0.0' },
      ],
      link: [
        { rel: 'shortcut icon', href: "/images/favicon.ico" },
        { rel: 'stylesheet', href: "/libs/simplebar/simplebar.min.css" },
        { rel: 'stylesheet', href: "/css/bootstrap.min.css", type: "text/css" },
        { rel: 'stylesheet', href: "/libs/@mdi/font/css/materialdesignicons.min.css", type: "text/css" },
        { rel: 'stylesheet', href: "/css/icons.min.css", type: "text/css" },
        { rel: 'stylesheet', href: "/libs/@iconscout/unicons/css/line.css", type: "text/css" },
        { rel: 'stylesheet', href: "/css/style.min.css", type: "text/css" },
      ],
      script: [
        { src: '/libs/bootstrap/js/bootstrap.bundle.min.js' },
        { src: '/libs/feather-icons/feather.min.js' },
        { src: '/libs/simplebar/simplebar.min.js' },
        { src: '/libs/apexcharts/apexcharts.min.js' },
        { src: '/js/plugins.init.js' },
        { src: '/js/app.js' },
      ]
    }
  }
})
