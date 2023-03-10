"use strict"; // Created by ua.lifesheets on 20.02.2023.

/**
  * Завантаження конфігураціЇ на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
    try {
        WixCore.Config.Sequelize = require('../configs/sequelize');
        // Todo: add config
    } catch (e) {
        console.log('[DEBUG-SERVER] => [WIXCORE/CONFIGS]::', e.message);
    }
};