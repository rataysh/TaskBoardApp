/** @format */

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        // plugins: [
        //     "react-native-classname-to-style",
        //     [
        //         "react-native-platform-specific-extensions",
        //         {extensions: ["css", "sass", "scss"]},
        //     ],
        // ],
        env: {
            production: {
                plugins: ["react-native-paper/babel"],
            },
        },
    };
};
