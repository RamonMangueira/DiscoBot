const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//configuração do dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const { EMAIL, SENHA, LINK, LINKPAG } = process.env;

//Usando selenium para capturar senha
async function getpassword() {
  //configurando navegador
  const options = new chrome.Options();
  options.addArguments("--headless"); // Executar em modo headless (sem interface gráfica)
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  await driver.get(LINK);
  driver.findElement(By.name("email")).sendKeys(EMAIL);
  driver.findElement(By.name("password")).sendKeys(SENHA, Key.ENTER);
  driver.wait(until.urlIs(LINKPAG), 5000);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  senhaHoje = await driver
    .findElement(
      By.xpath("/html/body/div[1]/div[1]/section[2]/div/div[3]/div/div[2]")
    )
    .getText();
  await driver.quit();
  return senhaHoje;
}

module.exports = {
  getpassword: getpassword,
};
