export default {
    star: {
        position: "relative",
        fontSize: 22,
        color: "#f5f8ff",
        "&::before": ({ mark }) => ({
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${mark * 100}%`,
            backgroundColor: "#ffc107",
        }),
    },
};
