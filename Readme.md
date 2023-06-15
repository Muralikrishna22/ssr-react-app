<!-- SSR BASE CREATION -->

- Project initated with simple webpack.config.json
- basic js and css bundle added

<!-- webpack -->

- target :node -> in order to ingore builtin modules like path and fs (same as externalsPresets:{node:true in wepack 5})
- externals:[nodeExternals()] -> in order to ingore all modules in node_modules folder
-
