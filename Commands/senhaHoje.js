const { Builder, By, Key, until } = require("selenium-webdriver");

//configuração do dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const { EMAIL, SENHA, LINK } = process.env;

let driver = new Builder().forBrowser("chrome").build();

driver.get(LINK);

var elemento = driver.findElement(By.name("email"));
elemento.sendKeys(EMAIL);
var elemento = driver.findElement(By.name("password"));
elemento.sendKeys(SENHA, Key.ENTER);
driver.wait(until.titleIs(SENHA), 100000);

let senhaHoje = driver.findElement(
  By.xpath("/html/body/div[1]/div[1]/section[2]/div/div[3]/div/div[2]/text()")
);
console.log(senhaHoje);
