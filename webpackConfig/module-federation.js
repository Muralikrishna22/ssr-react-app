const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");

module.exports = {
    client:
        new ModuleFederationPlugin({
            name: "ssr-react-app",
            filename: "container.js",
            remotes: {
                remote1: "http://localhost:3002/client/remoteEntry.js",
            },
            shared: {
                react: { singleton: true, requiredVersion: deps['react'] },
                "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
            },
        }),
    server: [
        new NodeFederationPlugin({
            name: "ssr-react-app",
            library: { type: "commonjs-module" },
            filename: "remoteEntry.js",
            remotes: {
                remote1: "http://localhost:3002/server/remoteEntry.js",
            },
            shared: {
                react: { singleton: true, requiredVersion: deps['react'] },
                "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
            },
        }),
        new StreamingTargetPlugin({
            name: "ssr-react-app",
            library: { type: "commonjs-module" },
            remotes: {
                remote1: "http://localhost:3002/server/remoteEntry.js",
            },
        }),
    ],
};
