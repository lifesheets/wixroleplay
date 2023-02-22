WixCore.Module.Base = {};

/**
  * @Name Підключення до ORM Sequelize для MySQL.
  * @description Модуль для підтримки активних та відкладених завантажень.
  * @support https://sequelize.org/docs/v6/
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

let Sequelize = require('sequelize');
let Config = require('../configs/sequelize');
let sequelize = null;
let Models = {};

WixCore.Module.Base.Connect = function () {
    // Дані для підключення до бази даних.
    sequelize = new Sequelize(Config.Connect[2], Config.Connect[3], Config.Connect[4], {
        host: Config.Connect[0],
        dialect: "mysql",
        port: Config.Connect[1] || 3306,
        logging: Config.Logging,
        pool: {
            max: Config.Pool[0],
            min: Config.Pool[1],
            acquire: Config.Pool[2],
            idle: Config.Pool[3]
        },
        dialectOptions: {
            connectTimeout: Config.ConnectTimeout
        },
        define: {
            timestamps: Config.TimeStamps
        }
    });

    loading(); // Перевірка та виконання.
}

function loading() {
    // Перевіряємо наявність підключення до бази даних.
    sequelize.authenticate().then(() => {
        // Отримуємо список плагінів.
        fs.readdirSync(path.dirname(__dirname) + '\\plugins\\').forEach(catalog => {
            // Перевірити чи є папка з моделями бази даних в плагіні.
            if (fs.existsSync(path.dirname(__dirname) + '\\plugins\\' + catalog + '\\sequelize')) {
                // Отримуємо список моделей із папки.
                fs.readdirSync(path.dirname(__dirname) + '\\plugins\\' + catalog + '\\sequelize').forEach(file => {
                    // Відносний шлях моделі бази даних.
                    var listModels = path.dirname(__dirname) + '\\plugins\\' + catalog + '\\sequelize\\' + file;
                    // Підключаємо моделі до масиву.
                    var model = require(listModels)(sequelize, Sequelize.DataTypes);
                    // Записуємо список моделей до нашого загального масиву.
                    Models[model.name] = model;
                });
            }
        });
        // Перебрати список моделей.
        for (var name in Models) {
            var model = Models[name];
            if (model.associate) {
                model.associate(Models);
            }
        }
        // Створює таблицю, якщо вона не існує
        sequelize.sync();

    }).catch((e) => {
        WixCore.Module.Debug.Run('Не вдалося підключитися до бази даних:', e.message);
    });
}