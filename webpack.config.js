module.exports = {
    mode: 'development',
    entry: {
        foo: './foo.js',
        bar: './bar.js',
        baz: './baz.js',
    },
    output: {
        clean: true,
    },
    target: 'webworker',
    devtool: 'inline-cheap-source-map',
    optimization: {
        runtimeChunk: {
            name: entry => entry.name === 'foo' ? false : `runtime-${entry.name}`,
        },
    },
    devServer: {
        // Disable all distractions in the chunk outputs
        hot: false,
        liveReload: false,
        client: false,
        static: {
            watch: true,
            directory: `${__dirname}/public`,
        },
        port: 9000
    }
};