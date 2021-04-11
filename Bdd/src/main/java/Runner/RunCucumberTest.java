package Runner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty" , "html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber.xml", "rerun:target/rerun.txt"} ,
        features="C:\\Users\\kohli\\OneDrive\\Desktop\\Eclipse Work\\Bdd\\src\\main\\java\\feature",
        glue = {"StepDefinations"},
        dryRun = false
//        tags= {"@TC1,TC2,TC3,TC4"}
)
public class RunCucumberTest {

}
