import { SWSE } from "./module/config.js";

import { SWSEItemSheet } from "./module/sheets/SWSEItemSheet.js";

Hooks.once("init", function () {
    console.log("SWSE-Foundry VTT | Initializing SWSE Foundry VTT");

    CONFIG.SWSE = SWSE;

    Items.unregisterSheet("core", ItemSheet)
    Items.registerSheet("swse-foundryvtt", SWSEItemSheet, { makeDefault: true });
});