export default {
    wrapper: {
        display: "flex",
        maxWidth: 320,
    },
    icon: ({ bgColor }) => ({
        width: 32,
        height: 32,
        backgroundColor: bgColor,
        marginRight: 14,
    }),
    title: ({ bgColor }) => ({
        fontSize: 16,
        fontWeight: 700,
        lineHeight: "18px",
        color: bgColor,
        marginBottom: 5,
    }),
    description: ({ bgColor }) => ({
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "20px",
        color: bgColor,
    }),
};
