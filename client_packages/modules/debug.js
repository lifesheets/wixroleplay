"use strict"; // Created by ua.lifesheets on 20.02.2023.

/**
  * Евент дебага для відправлення на серверну частину.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */


WixCore.Module.Debug = {};

WixCore.Module.Debug.Run = function (message, ...args) {
  mp.events.callRemote('wixcore::security::methods:debug', `${message} | ${JSON.stringify(args)} | ${args.length}`);
};

exports = WixCore.Module.Debug;