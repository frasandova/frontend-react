import materialColors from "material-colors";
import "material-colors/dist/colors.css";

import APP_COLORS from "./ColorsConstant.js";
import "./Colors.scss";

function byName(name) {
    var color = APP_COLORS[name];
    if (!color && typeof materialColors !== "undefined") {
        var c = name.split("-"); // red-500, blue-a100, deepPurple-500, etc
        if (c.length) color = (materialColors[c[0]] || {})[c[1]];
    }
    return color || "#fff";
}

const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
              parseInt(result[1], 16) /*r*/,
              parseInt(result[2], 16) /*g*/,
              parseInt(result[3], 16) /*b*/
          ]
        : [];
};

function asRgba(name, opacity) {
    const rgb = hexToRgb(byName(name));
    return `rgba(${rgb.join(",")},${opacity})`;
}

export default {
    byName,
    asRgba
};
