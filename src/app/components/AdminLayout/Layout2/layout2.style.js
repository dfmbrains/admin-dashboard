import { styled } from "@mui/system";
import { themeShadows } from "app/components/AdminTheme/themeColors";
import { navbarHeight, sideNavWidth } from "app/utils/constant";

export const Layout2Container = styled("div")(() => ({
  "& .layout2": { transition: "all 0.15s ease" },
  "& .layout2.sidenav-close .sidenav": { left: sideNavWidth },
  "& .layout2 .navbar": {
    zIndex: "98",
    position: "relative",
    height: navbarHeight,
    background: "#1a2038",
    boxShadow: themeShadows[8],
  },
  "& .horizontal-nav ul": {
    margin: "0",
    padding: "0",
    listStyle: "none",
    position: "relative",
  },
  "& .horizontal-nav ul.menu": {
    zIndex: "99",
    float: "left",
    marginLeft: "-20px",
    paddingRight: "45px",
  },
  "& .horizontal-nav ul.menu > li": { float: "left" },
  "& .horizontal-nav ul.menu > li > div > a, .horizontal-nav ul.menu > li > div > div":
    {
      height: "48px",
      margin: "0 6px",
      boxSizing: "border-box",
      borderBottom: "2px solid",
      borderColor: "transparent",
    },
  "& .horizontal-nav ul li": {
    margin: "0px",
    position: "relative",
    display: "inline-block",
  },
  "& .horizontal-nav ul li ul a": { padding: "8px 20px", height: "48px" },
  "& .horizontal-nav a, .horizontal-nav label": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "13px 20px",
    height: navbarHeight,
    fontSize: "0.875rem",
    textDecoration: "none",
    boxSizing: "border-box",
  },
  "& .horizontal-nav a .material-icons, .horizontal-nav label .material-icons":
    {
      margin: "0 4px",
      fontSize: "14px",
    },
  "& .horizontal-nav ul ul": {
    opacity: "0",
    left: "20px",
    zIndex: "-1",
    top: navbarHeight,
    visibility: "hidden",
    position: "absolute",
    boxShadow: themeShadows[8],
    transform: "translateY(-10px)",
    transition: "all 0.3s ease-in-out",
  },
  "& .horizontal-nav ul li:hover > div > div > ul, .horizontal-nav ul li:hover > div > ul, .horizontal-nav li:hover > ul":
    {
      opacity: "1",
      visibility: "visible",
      transform: "translateY(0)",
    },
  "& .horizontal-nav ul ul li": {
    float: "none",
    width: "170px",
    display: "list-item",
    position: "relative",
  },
  "& .horizontal-nav ul ul ul": { top: "0", left: "170px" },
  "& .horizontal-nav ul ul ul li": { position: "relative", top: "0" },
  "& .horizontal-nav li > a:after": {
    lineHeight: "1",
    fontSize: "14px",
    direction: "ltr",
    W: "antialiased",
    marginLeft: "auto",
    wordWrap: "normal",
    fontStyle: "normal",
    fontWeight: "normal",
    whiteSpace: "nowrap",
    textTransform: "none",
    letterSpacing: "normal",
    display: "inline-block",
    content: '"arrow_drop_down"',
    fontFamily: '"Material Icons"',
    fallbacks: [{ W: '"liga"' }],
  },
  "& .horizontal-nav li > a:only-child:after": { content: '" "' },
}));
