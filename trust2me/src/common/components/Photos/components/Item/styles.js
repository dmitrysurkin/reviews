export default {
    wrapper: {
        position: "relative",
        overflow: "hidden",
        borderRadius: 5,
        "&:hover, &:focus": {
            cursor: "pointer",
        },
    },
    item: {
        display: "block",
        width: 100,
        height: 100,
        objectFit: "cover",
    },
    more: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontSize: 20,
        color: "white",
    },
};
