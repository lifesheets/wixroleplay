const config = {
    Connect: ['127.0.0.1', 3306, 'database_devs', 'username', 'password'],
    Logging: false,
    Pool: [50, 0, 30000, 10000],
    ConnectTimeout: 15000,
    TimeStamps: false
}

module.exports = config;