// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false, //false console 한번만 실행하도록 함/
    experimental: {
        appDir: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    "plugins": [
        // ...
        "react-hooks"
    ],
    "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
}