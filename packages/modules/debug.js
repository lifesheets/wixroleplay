"use strict"; // Created by ua.lifesheets on 20.02.2023.

/**
  * Дебаг для серверної та клієнтської частини.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */


WixCore.Method.Debug = {};

// Отримання повідомлень з серверної частини.
WixCore.Method.Debug.Run = (message, args) => {
    try {
        console.log(`[DEBUG-SERVER] => ${message}`, args);
    } catch (e) {
        console.log('[ERROR] Ініціалізація "Method.Debug.Run"', '::', e.message);
        console.log('[INFO]: Перевірте файл: methods/debug.js');
    }
}

// Отримання повідомлень з клієнтської частини.
mp.events.add('wixcore::security::methods:debug', (player, message) => {
    try {
        console.log(`[DEBUG-CLIENT][${player.socialClub}]: ${message}`);
    } catch (e) {
        WixCore.Method.Debug.Run('Event:', e.message);
        console.log('[INFO]: Перевірте файл: methods/debug.js');
    }
})