export default {
    wrapper: ({ bgColorList }) => ({
        padding: {
            top: 16,
            bottom: 16,
        },
        backgroundColor: bgColorList,
    }),
    list: {
        display: "flex",
        justifyContent: "space-between",
    }
};
