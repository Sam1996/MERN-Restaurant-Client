import { blue } from "@material-ui/core/colors";

const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    },
    mainGrid: {
        height: "calc(100vh - 64px)",
        overflow: "hidden",
    },
    paper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    icon: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    link: {
        textDecoration: "none",
        color: "#777777",
        "&:hover": {
            color: "#000000",
        },
    },
    sideBarMenuSubTitle: {
        textAlign: "center",
    },
    cardView: {
        height: theme.spacing(32),
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    cardMedia: {
        height: 0,
        paddingTop: "75%",
    },
    padding: {
        padding: theme.spacing(1),
    },
    overlay: {
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)",
    },
    dataArea: {
        zIndex: 1,
        padding: theme.spacing(1),
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    fab: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    orderWindowContainer: {
        padding: theme.spacing(1),
        height: "100%",
    },
    orderWindow: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "inherit",
    },
    orderCardContent: {
        flex: 1,
        overflow: "auto",
    },
    alignHorizontal: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    incDecIcon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    qtyArea: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    qtyContainer: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    noVerticalPadding: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    noHorizontalPadding: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    orderTotal: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    noBorderBottom: {
        borderBottom: 0,
    },
    billButton: {
        width: "100%",
        padding: theme.spacing(1),
        borderRadius: "4px",
        textDecoration: "none",
        color: blue[900],
        textTransform: "uppercase",
        "&:hover": {
            backgroundColor: blue[100],
            color: blue[900],
        },
    },
    orderBookHeader: {
        backgroundColor: blue[100],
        color: blue[900],
    },
}));
