const testAxios = {
    get(path) {
        return {
            data: `world from ${path}`,
        };
    },
};

module.exports = testAxios