import { defineNuxtConfig, NuxtConfig } from "@nuxt/bridge"
import { NuxtConfig as Nuxt2Config } from "@nuxt/types"

type BridgeConfig = NuxtConfig & Partial<Nuxt2Config>
const defineNuxtConfigForBridge = (config: BridgeConfig) => defineNuxtConfig(config)

const config = defineNuxtConfigForBridge({
    debug: true,
    // Rendering
    ssr: true,

    srcDir: "src/",

    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        "@nuxtjs/stylelint-module",
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "cookie-universal-nuxt",
        [
            "nuxt-mq",
            {
                defaultBreakpoint: "default",
                breakpoints: {
                    sm: 768,
                    lg: Infinity
                }
            }
        ]
    ],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        // @see https://github.com/nuxt/nuxt.js/issues/5550#issuecomment-522347579
        extractCSS: true,
        splitChunks: {
            layouts: false,
            pages: false,
            commons: false,
        }
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    },
    router: {
        middleware: ["trailingSlashRedirect"],
        trailingSlash: true
    },
    alias: {
        // @see https://github.com/nuxt/framework/issues/1151#issuecomment-983531703
        tslib: 'tslib/tslib.es6.js'
    },
    loading: {
        css: false
    }
})

export default config
