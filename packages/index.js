"use strict"; // Created by ua.lifesheets on 20.02.2023.

/**
  * Завантажує ігровий режим на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

(async () => {
  await require('./wixcore/configs')();
  await require('./wixcore/nucleus')();
  await require('./wixcore/methods')();
  await require('./wixcore/plugins')();
})();