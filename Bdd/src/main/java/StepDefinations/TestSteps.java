package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {

	private static WebDriver driver;
	
	@Given("^User is already on HomeDepo Page$")
	public void user_is_already_on_HomeDepo_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","c:\\data\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.homedepot.com/");
        driver.manage().window().maximize(); 
	}

	@When("^title of the home page is HomeDepo$")
	public void title_of_the_home_page_is_HomeDepo() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 String title = driver.getTitle();
		    System.out.println(title);
		    Assert.assertEquals("The Home Depot", title);
	}

	@Then("^user clicks on local ad$")
	public void user_clicks_on_local_ad() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[contains(text(),'Local Ad')]")).click();
	}

	@Then("^user clicks on tool rental$")
	public void user_clicks_on_tool_rental() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[@href='//www.homedepot.com/c/tool_and_truck_rental']")).click();
	}

	@Then("^user clicks on tillers$")
	public void user_clicks_on_tillers() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//img[@title='Tillers']")).click();
	}

	@Then("^user clicks on check availability$")
	public void user_clicks_on_check_availability() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//body/div[@id='container']/div[4]/div[3]/div[2]/div[1]/div[12]/div[7]/div[1]/a[1]/span[1]")).click();
	}

	@Then("^user clicks on check nearby stores$")
	public void user_clicks_on_check_nearby_stores() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Check Nearby Stores')]")).click();
	}

	@Then("^user clicks search box and enters \"([^\"]*)\"$")
	public void user_clicks_search_box_and_enters_zip_code(String zipcode) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("search-bar")).click();
	    driver.findElement(By.id("search-bar")).clear();
		driver.findElement(By.id("search-bar")).sendKeys(zipcode, Keys.ENTER);
		Assert.assertEquals("Mantis Mantis Tiller Rental 7262-00-02 - The Home Depot", driver.getTitle());
	}


//	Test2
	
	@Given("^user is on ad page$")
	public void user_is_on_ad_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.get("https://www.homedepot.com/c/localad");
	}
	
	@When("^user clicks on husky link$")
	public void user_clicks_on_husky_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//img[@alt='Husky']")).click();
	}

	@Then("^user clicks on tool bags$")
	public void user_clicks_on_tool_bags() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//img[@alt='Tool Bags']")).click();
	}

	@Then("^user sees husky tool bags$")
	public void user_sees_husky_tool_bags() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//		Assert.assertEquals("Husky - Tool Bags - Tool Storage - The Home Depot", driver.getTitle());
		Thread.sleep(2000);
		Assert.assertEquals("Husky - Tool Bags - Tool Storage - The Home Depot", driver.getTitle());
	}

//	Test3
	
	@Given("^user is on HomeDepo site$")
	public void user_is_on_HomeDepo_site() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.homedepot.com/");
	}
	
	@When("^user clicks on localad$")
	public void user_clicks_on_localad() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[contains(text(),'Local Ad')]")).click();
	}

	@Then("^user clicks on careers$")
	public void user_clicks_on_careers() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[contains(text(),'Careers')]")).click();
	}

	@Then("^user clicks on Search and apply$")
	public void user_clicks_on_Search_and_apply() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("thd-home-takeover")).click();

	}

	@Then("^user enters \"([^\"]*)\" and clicks on location$")
	public void user_enters_keywords_and_clicks_on_location(String keywords) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("cws_jobsearch_keywords")).sendKeys(keywords);
		driver.findElement(By.xpath("//body/div[@id='boxed-wrapper']/div[@id='wrapper']/main[@id='main']/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/button[1]/i[1]")).click();
	}

	@Then("^user sees jobs near location entered$")
	public void user_sees_jobs_near_location_entered() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals("Search for Jobs at The Home Depot", driver.getTitle());
	}
	//Test4
	
	@Given("^user is already on local ad$")
	public void user_is_already_on_local_ad() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 driver.get("https://www.homedepot.com/c/localad");
	}
	
	@When("^user clicks on blinds link$")
	public void user_clicks_on_blinds_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.xpath("//img[@alt='Blinds.com']")).click(); 
	}

	@Then("^user click on wood blinds$")
	public void user_click_on_wood_blinds() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//div[@data-bgimg='//media.blinds.com/infopages/images/homepage/wood-blinds.jpg']")).click();
	}

	@Then("^user selects width and height and clicks on update$")
	public void user_selects_width_and_height_and_clicks_on_update() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 WebElement e=driver.findElement(By.id("SelectedWidth"));
		    Select width= new Select (e);
		    width.selectByVisibleText("60");
		    e=driver.findElement(By.id("SelectedHeight"));
		    Select height= new Select (e);
		    height.selectByVisibleText("50");
		    driver.findElement(By.id("gcc-search-btn-update-prices")).click();
	}

	@Then("^user sees results$")
	public void user_sees_results() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		Assert.assertEquals("Wood Blinds | Custom Window Blinds | Blinds.com", driver.getTitle());
		driver.close();
	}

	
	
	
	
}
