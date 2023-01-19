import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#191919",
    "--brand-color":"#7D53DE",
    "--my-blue": "#34F6F2",
    "--my-pink": "#FF09CE",
    "--my-grey": "#CED0CE",

}

export const myTheme = buildLegacyTheme({
    // Base theme colors
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg":props["--my-black"],
    "--component-text-color": props["--my-white"]


    // Brand
    // Deafult button
    // State
    // Navbar
})