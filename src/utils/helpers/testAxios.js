const testAxios = {
    get(path) {
        return {
            data: `world from ${path}`,
        };
    },
};

export default testAxios