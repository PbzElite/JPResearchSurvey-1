import undetected_chromedriver as uc
import time
import pickle
import requests
import zipfile
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import getpass

# 🔑 Sightengine API Credentials
SIGHTENGINE_API_USER = '714891050'
SIGHTENGINE_API_SECRET = 'JFzjruFdV77by9wjE3kovmj4K6dpTmRm'

# 🔑 Instagram Credentials
# INSTAGRAM_USERNAME = "nedbuchanes"
# INSTAGRAM_PASSWORD = "Ytube716"
INSTAGRAM_USERNAME = input("Enter your Instagram username: ")
INSTAGRAM_PASSWORD = getpass.getpass("Enter your password: ")  # Hides input

def setup_driver():
    """
    Sets up an undetectable Chrome driver to bypass Instagram bot detection.
    """
    options = uc.ChromeOptions()
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    
    # ❌ Disable headless mode (so you can see the browser)
    # options.add_argument("--headless")

    options.add_argument("--window-size=1920,1080")
    driver = uc.Chrome(options=options)
    return driver


def login_instagram(driver, username, password):
    """
    Logs into Instagram and saves cookies for future sessions.
    """
    print("Logging into Instagram...")
    driver.get("https://www.instagram.com/accounts/login/")
    time.sleep(5)

    username_input = driver.find_element(By.NAME, "username")
    password_input = driver.find_element(By.NAME, "password")

    username_input.send_keys(username)
    password_input.send_keys(password)
    password_input.send_keys(Keys.RETURN)

    time.sleep(7)  # Wait for login to complete

    # Save session cookies
    pickle.dump(driver.get_cookies(), open("instagram_cookies.pkl", "wb"))

    print("✅ Login successful! Cookies saved.")

def load_instagram_cookies(driver):
    """
    Loads saved Instagram cookies to avoid logging in repeatedly.
    """
    try:
        cookies = pickle.load(open("instagram_cookies.pkl", "rb"))
        driver.get("https://www.instagram.com/")
        time.sleep(5)
        for cookie in cookies:
            driver.add_cookie(cookie)
        driver.refresh()
        print("✅ Logged in using cookies!")
    except:
        print("⚠️ No cookies found. Logging in manually.")

def fetch_explore_images(driver, num_images=40):
    """
    Scrapes images from Instagram's Explore page.
    """
    print("Navigating to Explore page...")
    driver.get("https://www.instagram.com/explore/")
    time.sleep(5)  # Allow page to load

    image_urls = set()
    scroll_attempts = 0

    while len(image_urls) < num_images and scroll_attempts < 20:
        # 🟢 Wait until at least one image is present
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "img"))
            )
        except:
            print("⚠️ No images found! Trying to scroll...")
        
        # 🟢 Grab all image elements
        images = driver.find_elements(By.TAG_NAME, "img")

        for img in images:
            src = img.get_attribute("src")
            if src and "https://scontent" in src:  # Ensures valid Instagram images
                image_urls.add(src)
            if len(image_urls) >= num_images:
                break

        # 🟢 Scroll down in small chunks to trigger lazy loading
        driver.execute_script("window.scrollBy(0, 600);")
        time.sleep(3)

        scroll_attempts += 1

    print(f"✅ Fetched {len(image_urls)} image URLs from Explore page.")
    return list(image_urls)

def is_ai_generated(image_url):
    """
    Uses SightEngine API with the genai model to check if an image is AI-generated.
    """
    api_url = "https://api.sightengine.com/1.0/check.json"
    
    # Using the 'genai' model for detecting AI-generated content
    payload = {
        "models": "genai",  # The genai model for detecting AI-generated images
        "api_user": SIGHTENGINE_API_USER,
        "api_secret": SIGHTENGINE_API_SECRET,
        "url": image_url
    }
    
    try:
        response = requests.get(api_url, params=payload, timeout=10)
        response.raise_for_status()  # Raise an exception for failed requests
        
        result = response.json()
        
        # Print the full API response to inspect its structure
        print("API Response:", result)
        
        # Check if the 'ai_generated' key exists in the 'type' section and extract the score
        ai_score = result.get('type', {}).get('ai_generated', None)
        
        if ai_score is not None:
            # Print out the AI score for debugging
            print(f"AI-Generated Score: {ai_score}")
            
            # Compare against a threshold (e.g., 0.5)
            if ai_score > 0.5:
                print("This image is likely AI-generated.")
                return True
            else:
                print("This image is not AI-generated.")
                return False
        else:
            print("The 'ai_generated' key was not found in the 'type' section.")
            return False

    except requests.exceptions.RequestException as e:
        print(f"⚠️ Request failed: {e}")
        return False

def download_images(image_urls):
    """
    Downloads AI-generated images and saves them in a ZIP file.
    """
    download_folder = "ai_images"
    os.makedirs(download_folder, exist_ok=True)

    ai_images = []
    for index, url in enumerate(image_urls):
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            image_path = os.path.join(download_folder, f"image_{index}.jpg")
            with open(image_path, "wb") as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            ai_images.append(image_path)

    # Create a ZIP file
    zip_filename = "AI_Instagram_Images.zip"
    with zipfile.ZipFile(zip_filename, "w") as zipf:
        for img in ai_images:
            zipf.write(img, os.path.basename(img))

    print(f"✅ AI-generated images saved in {zip_filename}")

def main():
    driver = setup_driver()

    try:
        load_instagram_cookies(driver)
    except:
        login_instagram(driver, INSTAGRAM_USERNAME, INSTAGRAM_PASSWORD)

    # Fetch images from Explore page
    image_urls = fetch_explore_images(driver, num_images=50)

    # Filter AI-generated images
    ai_images = [url for url in image_urls if is_ai_generated(url)]
    print(f"✅ Found {len(ai_images)} AI-generated images.")

    # Download AI-generated images into a ZIP file
    if ai_images:
        download_images(ai_images)
    else:
        print("⚠️ No AI-generated images found.")

    driver.quit()

if __name__ == "__main__":
    main()
