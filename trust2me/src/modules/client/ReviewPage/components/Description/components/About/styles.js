export default {
    wrapper: {
        padding: {
            top: 30,
            left: 35,
            bottom: 30,
        },
    },
    item: {
        "&:not(:first-child)": {
            paddingTop: 25,
        },
        "&:not(:last-child)": {
            paddingBottom: 25,
            borderBottom: "1px solid rgba(0, 0, 0, 0.07)",
        },
    },
};
