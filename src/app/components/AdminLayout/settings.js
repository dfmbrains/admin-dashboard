import { themes } from "../AdminTheme/initThemes";
import layout1Settings from "./Layout1/Layout1Settings";
import layout2Settings from "./Layout2/Layout2Settings";

// UPDATE BELOW CODE
export const AdminLayoutSettings = {
  activeLayout: "layout1", // layout1, layout2
  activeTheme: "blue", // View all valid theme colors inside AdminTheme/themeColors.js
  perfectScrollbar: false,

  themes: themes,
  layout1Settings, // open Layout1/Layout1Settings.js
  layout2Settings, // open Layout1/Layout2Settings.js

  secondarySidebar: {
    show: true,
    open: false,
    theme: "slateDark1", // View all valid theme colors inside AdminTheme/themeColors.js
  },
  // Footer options
  footer: {
    show: true,
    fixed: false,
    theme: "slateDark1", // View all valid theme colors inside AdminTheme/themeColors.js
  },
};
