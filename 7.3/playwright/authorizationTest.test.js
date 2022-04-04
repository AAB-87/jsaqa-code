
const { chromium } = require('@playwright/test');// указаваем какой браузер и библиотеку используем
const user = require('../user'); // указываем где барать доп. инфу браузеру

test.beforeEach(async () => { // настройка предварительных условий
  const browser = await chromium.launch({ headless: false }); // создаём новую вкладку
  const page = await browser.newPage();
  await page.goto('https://netology.ru/?modal=sign_in/'); // открываем старницу
});

test.afterEach(async () => { // настройка предварительных условий
  await page.close(); // закрываем страницу
});

test.describe('Authorization', () => { // тест "Авторизация c валидными данными"
  test('Authorization with valid data', async ({ page }) => {
    await page.locator('[placeholder="Email"]').fill(user.validUser); // указываем поле с email
    await page.locator('[placeholder="Пароль"]').fill(user.validPassword); // указываем поле с паролем
    await page.locator('button:has-text("Войти")').click(); // нажимаем "Войти"
    await expect(page).toHaveURL('https://netology.ru/profile'); // ожидаемый результат
    await expect( // убеждаемся что страница прогрузилась
      page.locator('.components-pages-Profile-Programs--title--NCjbp')
    ).toHaveText('Мои курсы и профессии');
  });
  // test('Authorization with invalid data', async ({ page }) => { // тест "Авторизация c невалидными данными"
  //   await page.locator('[placeholder="Email"]').fill(user.invalidUser);
  //   await page.locator('[placeholder="Пароль"]').fill(user.invalidPassword);
  //   await page.locator('button:has-text("Войти")').click();
  //   await expect(
  //     page.locator(
  //       '._-packages-ui-kit-components-v2-Input--error--1QFF1  div'
  //     )
  //   ).toHaveText('Вы ввели неправильно логин или пароль');
  //   await page.goto('https://netology.ru/profile');
  //   await expect(
  //     page.locator(
  //       '.shared-components-Errors-components-NoAccess--header--1wZNf'
  //     )
  //   ).toHaveText('Вы не авторизированы');
  // });
});