({
    name: "build",
    paths: {
        "build": "build"
    },
    baseUrl: "build",
    mainConfigFile: "config.js",
    out: "dist/build-amd.js",
    optimize: "none",
    shim: {
        "apod-scraper" : {
            "deps": [],
            "exports" : "someNameSpace"
        }
    }
})
