let page;

beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
  page = await browser.newPage();
});

afterEach(async () => { // этот блок запускается после каждого теста
  await page.close(); // закрываем браузер
});

// describe("Go to the cinema test", () => {
//   beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
//     page = await browser.newPage();
//   });

//   test("Choose a date test", async () => { // выбираем дату
//     await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем стартовую страницу
//     await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пн, 18"
//     actual = await page.$eval('a.page-nav__day.page-nav__day_chosen > span.page-nav__day-number', link => link.textContent);
//     expect(actual).toContain('18');
//   });

//   test("The first link text 19:00", async () => { // проверяем ссылку на сеанс 19:00
//     await page.goto('http://qamid.tmweb.ru/client/hall.php'); // открываем страницу
//     actual = await page.$eval('div.movie-seances__hall > ul > li', (link) => link.textContent);
//     expect(actual).toContain('19:00');
//   });
// });

// test("The first link leads on 'Начало сеанса Пт 15, 19:00'", async () => { // проверяем что ссылка ведёт на нужный сеанс
//   await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
//   await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пн, 18"
//   await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"
//   actual = await page.$eval('div > p.buying__info-start', (link) => link.textContent);
//   expect(actual).toContain('Начало сеанса: 19:00');
// });

// test("Сhoosing seat", async () => { // выбираем места
//   await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
//   await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пн, 18"
//   await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"

//   firstSeat = await page.click('div:nth-child(7) > span:nth-child(5)'); // кликаем по выбранному месту
//   button = await page.click('button'); // кликаем по кнопке "Забронировать"
//   button = await page.click('button'); // кликаем по кнопке "получить код бронирования"

//   actual = await page.$eval('p:nth-child(2) > span', link => link.textContent); // проверяем что этот селектор содержит наше забронированное место
//   expect(actual).toContain('7/5');
// });

test("Checking that seat are booked", async () => { // проверяем что наши места забронированы
  await page.goto('http://qamid.tmweb.ru/client/index.php'); // снова открываем стартовую страницу
  await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пн, 18"
  await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"
  // await page.click('div:nth-child(7) > span.buying-scheme__chair_taken'); // кликаем по выбранному месту
  const isDisabled = await page.$eval('button', (button) => {
    return button.disabled;
  });
  expect(isDisabled).toEqual(true);
});

// прежде чем запускать тесты командой npm test, исправть значение toContain в тесте "Choose a date test"