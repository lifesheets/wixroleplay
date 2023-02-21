"use strict"; // Created by ua.lifesheets on 20.02.2023.

/**
  * Завантаження основного ядра на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
    try {
        global.WixCore = {};
        WixCore.Config = {};
        WixCore.Method = {};
        WixCore.Module = {};
        WixCore.Plugin = {};

        await require('../modules/debug');
        await require('../modules/datatime');

        // Todo: add module

    } catch (e) {
        WixCore.Module.Debug.Run('[WIXCORE/NUCLEUS]::', e.message);
    }
};