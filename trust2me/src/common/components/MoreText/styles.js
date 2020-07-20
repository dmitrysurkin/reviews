export default {
    link: {
        position: 'relative',
        color: "#2d8eff",
        transition: ".3s all",
        marginLeft: 10,
        "&:focus, &:hover": {
            color: "rgba(45, 142, 255, 0.7)",
            cursor: "pointer",
        },
        "&::before": {
            display: "block",
            position: "absolute",
            content: '""',
            height: 1,
            width: 0,
            background: "#2d8eff",
            transition: "width 0.3s ease-in-out",
            left: 0,
            bottom: -2,
        },
        "&:hover::before": {
            width: "100%",
        },
    },
};
