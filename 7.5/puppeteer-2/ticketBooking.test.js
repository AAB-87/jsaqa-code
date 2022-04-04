let page;

// beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
//   page = await browser.newPage();
//   // await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
// });

afterEach(() => { // этот блок запускается после каждого теста
  page.close(); // закрываем вкладку
});

describe("Go to the cinema test", () => {
  beforeEach(async () => { // этот блок работает только ВНУТРИ describe и будет запускаться перед каждым тестом блока describe
    page = await browser.newPage();
    await page.goto('http://qamid.tmweb.ru/client/index.php'); // открываем страницу тестированя
  });

  test("Choose a date", async () => { // выбираем дату
    await page.$('a.page-nav__day.page-nav__day_chosen').click; // кликаем по вкладке "Ср, 6"
    //   expect(actual).toEqual('a.page-nav__day.page-nav__day_chosen'); // проверяем что вкладка выделилась (изменился селектор)
    // });

    // test("The time link text '19:00'", async () => { // проверяем текст ссылки содержит нужную нам информацию
    actual = await page.$eval('div.movie-seances__hall > ul > li > a', text => text.textContent); // document.querySelector('div.movie-seances__hall > ul > li > a')
    expect(actual).toContain('19:00');
  });

  test("The time link leads on session'19:00'", async () => { // проверяем что ссылка ведёт на нужную страницу
    timeLink = await page.$('div.movie-seances__hall > ul > li > a').click;
    actual = await page.$eval('div.movie-seances__hall > ul > li', text => text.textContent);
    expect(actual).toContain('19:00');
  });

  test("Сhoosing seats", async () => { // выбираем места
    firstSeat = await page.$('div:nth-child(7) > span:nth-child(5)').click; // кликаем по выбранному месту
    secondSeat = await page.$('div:nth-child(7) > span:nth-child(6)').click; // кликаем по выбранному месту
    button = await page.$('button').click; // кликаем по кнопке "Забронировать"
    actual = await page.$eval('p:nth-child(2) > span', link => link.textContent);
    expect(actual).toContain('7/5, 7/6');
  })
})

// вызов теста
// npm test