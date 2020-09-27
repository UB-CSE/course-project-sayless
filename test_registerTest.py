# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestRegisterTest():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_registerTest(self):
    # Test name: Register-Test
    
    # Step # | name | target | value | comment
    # 1 | open | https://registersayless.netlify.app/ |  | 
    self.driver.get("https://registersayless.netlify.app/")
    # 2 | setWindowSize | 1552x840 |  | 
    self.driver.set_window_size(1552, 840)
    # 3 | assertTitle | SayLess - Sign Up |  | 
    assert self.driver.title == "SayLess - Sign Up"
    # 4 | verifyText | css=h2 | Register | 
    assert self.driver.find_element(By.CSS_SELECTOR, "h2").text == "Register"
    # 5 | click | css=p:nth-child(3) |  | 
    self.driver.find_element(By.CSS_SELECTOR, "p:nth-child(3)").click()
    # 6 | verifyText | css=p:nth-child(3) | Create your account. It's free and only takes a minute! | 
    assert self.driver.find_element(By.CSS_SELECTOR, "p:nth-child(3)").text == "Create your account. It\\\'s free and only takes a minute!"
    # 7 | click | id=fname |  | 
    self.driver.find_element(By.ID, "fname").click()
    # 8 | type | id=fname | riley | 
    self.driver.find_element(By.ID, "fname").send_keys("riley")
    # 9 | type | id=lname | burcznski | 
    self.driver.find_element(By.ID, "lname").send_keys("burcznski")
    # 10 | click | id=emailInput |  | 
    self.driver.find_element(By.ID, "emailInput").click()
    # 11 | type | id=emailInput | test1@gmail.com | 
    self.driver.find_element(By.ID, "emailInput").send_keys("test1@gmail.com")
    # 12 | type | id=username | rileyb123 | 
    self.driver.find_element(By.ID, "username").send_keys("rileyb123")
    # 13 | type | id=password | hello123 | 
    self.driver.find_element(By.ID, "password").send_keys("hello123")
    # 14 | type | id=password2 | hello123 | 
    self.driver.find_element(By.ID, "password2").send_keys("hello123")
    # 15 | verifyText | css=.submit | REGISTER | 
    assert self.driver.find_element(By.CSS_SELECTOR, ".submit").text == "REGISTER"
    # 16 | click | css=.submit |  | 
    self.driver.find_element(By.CSS_SELECTOR, ".submit").click()
    # 17 | close |  |  | 
    self.driver.close()
  
