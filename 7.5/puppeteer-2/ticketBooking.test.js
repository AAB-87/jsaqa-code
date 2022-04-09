let page;

beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
  page = await browser.newPage();
});

afterEach(async () => { // этот блок запускается после каждого теста
  await page.close(); // закрываем браузер
});

describe("Go to the cinema test", () => {
  beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
    page = await browser.newPage();
  });

  test("Choose a date test", async () => { // выбираем дату
    await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
    await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пт, 11"
    actual = await page.$eval('a.page-nav__day.page-nav__day_chosen > span.page-nav__day-number', link => link.textContent);
    expect(actual).toContain('11');
  });

  test("The first link text 19:00", async () => { // проверяем ссылку на сеанс 19:00
    await page.goto('http://qamid.tmweb.ru/client/hall.php'); // открываем страницу
    actual = await page.$eval('div.movie-seances__hall > ul > li', (link) => link.textContent);
    expect(actual).toContain('19:00');
  });
});

test("The first link leads on 'Начало сеанса Пт 11, 19:00'", async () => { // проверяем что ссылка ведёт на нужный сеанс
  await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
  await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пт, 11"
  await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"
  actual = await page.$eval('div > p.buying__info-start', (link) => link.textContent);
  expect(actual).toContain('Начало сеанса: 19:00');
});

test("Сhoosing seats", async () => { // выбираем места
  await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
  await page.click('nav > a:nth-child(3)'); // кликаем по вкладке "Пт, 11"
  await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li'); // кликаем по ссылке "19:00"

  firstSeat = await page.click('div:nth-child(7) > span:nth-child(5)'); // кликаем по выбранному месту
  secondSeat = await page.click('div:nth-child(7) > span:nth-child(6)'); // кликаем по выбранному месту
  button = await page.click('button'); // кликаем по кнопке "Забронировать"
  actual = await page.$eval('p:nth-child(2) > span', link => link.textContent);
  expect(actual).toContain('7/5, 7/6');
});

  // test("No seat selected", async () => { // выбираем место
  //   await page.goto('http://qamid.tmweb.ru/client/hall.php'); // открываем страницу тестированя
  //   mySeat = await page.$('div:nth-child(2) > span:nth-child(7)').click; // кликаем по выбранному месту
  //   mySeat = await page.$('div:nth-child(2) > span:nth-child(7)').click; // кликаем по выбранному месту
  //   button = await page.$('button').click; // кликаем по кнопке "Забронировать"
  //   await page.waitForNavigation("http://qamid.tmweb.ru/client/payment.php");
  //   await page.waitForSelector("h1");
  //   actual = await page.$eval('p:nth-child(2) > span', link => link.textContent);
  //   expect(actual).toContain('2/7');
  // });


// вызов теста
// npm test