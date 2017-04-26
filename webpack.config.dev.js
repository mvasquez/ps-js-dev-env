import path from "path";

export default {
    debug: true,
    devtool: "inline-source-map",
    noInfo: false,
    entry: [
        path.resolve(__dirname, "src/index")
    ],
    target: "web",  // [web|node|electron]
    output: {   // webpack won't actually generate any physical files for dev build. It'll be served from memory
        path: path.resolve(__dirname, "src"),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
            { test: /\.css$/, loaders: ["style", "css"] }
        ]
    }
}
