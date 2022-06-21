import requests
from selenium import webdriver
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager

toptions = webdriver.ChromeOptions()
toptions.add_argument('--ignore-certificate-errors')
toptions.add_argument('--incognito')
toptions.add_argument('--headless')

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.create_options = toptions
source = driver.get("https://www.geeksforgeeks.org/linked-list-set-1-introduction/")
source_code = driver.page_source

URL = "https://www.geeksforgeeks.org/linked-list-set-1-introduction/"
r = requests.get(URL)

soup = BeautifulSoup(source_code, 'html.parser')
article_block = soup.find_all('p')

# print(soup.get_text())
