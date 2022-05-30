import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
  }
  interface PublicRuntimeConfig {
     _app: {
        basePath: string,

        assetsPath: string,

        cdnURL: any,

        buildAssetsDir: string,

        baseURL: string,
    },

    app: {
        basePath: string,

        assetsPath: string,

        cdnURL: any,

        buildAssetsDir: string,

        baseURL: string,
    },
  }
  interface PrivateRuntimeConfig {
  
  }
}