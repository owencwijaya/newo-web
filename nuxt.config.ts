// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '@nuxt/ui'
      ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ]
})
