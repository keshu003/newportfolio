// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({

  modules:[
    '@nuxtjs/tailwindcss'],
  //   plugins: [
  //   '~/plugins/firebase.client.js'
  // ],
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      NUXT_API_KEY: process.env.NUXT_API_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY
    }
  },
  ssr:false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ]
    }
  }


  
})
