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

class TestRequestPass():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_requestPass(self):
    self.driver.get("http://sayless.azurewebsites.net/reset_request")
    self.driver.set_window_size(1552, 840)
    assert self.driver.title == "SayLess - Reset_Request"
    assert self.driver.find_element(By.CSS_SELECTOR, ".info").text == "Enter Email we should send a reset link to"
    element = self.driver.find_element(By.ID, "resetEmail")
    assert element.is_enabled() is True
    assert self.driver.find_element(By.ID, "emailHelp").text == "We'll never share your email with anyone else."
    assert self.driver.find_element(By.CSS_SELECTOR, ".btn").text == "Submit"
    self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
    self.driver.find_element(By.ID, "resetEmail").click()
    self.driver.find_element(By.ID, "resetEmail").send_keys("testing@gmail.com")
    self.driver.find_element(By.CSS_SELECTOR, ".btn").click()
    self.driver.close()
  
