module.exports = async () => {
    try {
        await require('../plugins/auth');
    } catch (e) {
        console.log('[ERROR] Ініціалізація "Plugins"', '::', e.message);
        console.log('[INFO]: Перевірте файл: wixcore/plugins.js');
    }
};