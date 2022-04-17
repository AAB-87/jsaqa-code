const { clickElement, getText } = require("./lib/commands.js"); // импортируем кастомные команды

let page;

beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
  page = await browser.newPage();
});

afterEach(async () => { // этот блок запускается после каждого теста
  await page.close(); // закрываем браузер
});

describe("Go to the cinema test", () => {
  test("Should choose a date", async () => { // выбираем дату
    await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем стартовую страницу
    await clickElement(page, 'nav > a:nth-child(3)'); // кликаем по вкладке "Вт, 19"
    actual = await getText(page, 'a.page-nav__day.page-nav__day_chosen > span.page-nav__day-number');

    expect(actual).toContain('19');
  });

  test("Should choose a time 19:00 and check session", async () => { // проверяем что ссылка ведёт на нужный сеанс
    await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
    await clickElement(page, 'nav > a:nth-child(3)'); // кликаем по вкладке "Вт, 19"
    await clickElement(page, 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"

    actual = await page.$eval('div > p.buying__info-start', (link) => link.textContent);
    expect(actual).toContain('Начало сеанса: 19:00');
  });
});

test.skip("Should choose аnd book a seat", async () => { // выбираем места
  await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем стартовую страницу
  await clickElement(page, 'nav > a:nth-child(3)'); // кликаем по вкладке "Вт, 19"
  await clickElement(page, 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"
  await clickElement(page, 'div:nth-child(7) > span:nth-child(5)'); // кликаем по выбранному месту
  await clickElement(page, 'button'); // кликаем по кнопке "Забронировать"
  await clickElement(page, 'button'); // кликаем по кнопке "получить код бронирования"

  actual = await page.$eval('p:nth-child(2) > span', link => link.textContent); // проверяем что этот селектор содержит наше забронированное место
  expect(actual).toContain('7/5');
});

test("Should check that seat are booked", async () => { // проверяем что наши места забронированы
  await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем стартовую страницу
  await clickElement(page, 'nav > a:nth-child(3)'); // кликаем по вкладке "Вт, 19"
  await clickElement(page, 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"

  const isDisabled = await page.$eval('button', (button) => {
    return button.disabled;
  });
  expect(isDisabled).toEqual(true);
});

// прежде чем запускать тесты командой npm test, исправь значение toContain в тесте "Choose a date test"