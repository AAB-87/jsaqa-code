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
//     await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Ср, 13"
//     actual = await page.$eval('a.page-nav__day.page-nav__day_chosen > span.page-nav__day-number', link => link.textContent);
//     expect(actual).toContain('13');
//   });

//   test("The first link text 19:00", async () => { // проверяем ссылку на сеанс 19:00
//     await page.goto('http://qamid.tmweb.ru/client/hall.php'); // открываем страницу
//     actual = await page.$eval('div.movie-seances__hall > ul > li', (link) => link.textContent);
//     expect(actual).toContain('19:00');
//   });
// });

// test("The first link leads on 'Начало сеанса Пт 11, 19:00'", async () => { // проверяем что ссылка ведёт на нужный сеанс
//   await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
//   await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Ср, 13"
//   await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"
//   actual = await page.$eval('div > p.buying__info-start', (link) => link.textContent);
//   expect(actual).toContain('Начало сеанса: 19:00');
// });

// test("Сhoosing seat", async () => { // выбираем места
//   await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
//   await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Ср, 13"
//   await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"

//   firstSeat = await page.click('div:nth-child(7) > span:nth-child(5)'); // кликаем по выбранному месту
//   button = await page.click('button'); // кликаем по кнопке "Забронировать"
//   button = await page.click('button'); // кликаем по кнопке "получить код бронирования"

//   actual = await page.$eval('p:nth-child(2) > span', link => link.textContent); // проверяем что этот селектор содержит наше забронированное место 
//   expect(actual).toContain('7/5');
// });

test("Checking that seats are booked", async () => { // проверяем что наши места забронированы
  await page.goto('http://qamid.tmweb.ru/client/index.php'); // снова открываем стартовую страницу
  await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Ср, 13"
  await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"
  firstSeat = await page.click('div:nth-child(7) > span:nth-child(5)'); // кликаем по выбранному месту

  // Остановился на Задаче 1 п.3
  // Не раелизован асёршн на проверку возможности выбрать ранее забронированные метса
  // actual = await page.$('button').isDisabled;
  // expect(actual).toEaqual("true");
  // actual = await page.$('button', link => link.textContent);
  // await expect(actual).toContain('disabled = true');
});


// вызов тестаs
// npm test