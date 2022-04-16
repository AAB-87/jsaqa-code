// хранение кастомных команд. В кастомные команды вносим только команды с действиями пользователя
// экспортируем в другие файлы.
module.exports = {
    clickElement: async function (page, selector) {
        try { // добавляем try catch для того что увидить в логах когда повалится тест
            await page.waitForSelector(selector); // ждём пока появится селектор
            await page.click(selector);
        } catch (error) {
            throw new Error(`Selector $(selector) is not clicable`) // обязательно используем обратные ковычки
        }

    },

    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (link) => link.textContent); // если пишем функцию get... , необходимо результат сохранять в return
        } catch (error) {
            throw new Error(`Not possible to get text from $(selector) selector`)
        }
    }
}