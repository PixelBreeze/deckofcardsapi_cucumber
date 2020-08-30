package executions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features/drawCardDuplicates.feature"},
        glue = {"stepdefs"},
        tags = {"not @Ignore","@RestsTests"},
        plugin = {
                "pretty",
                "html:target/cucumber-reports/",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        },
        monochrome = true
)

public class drawCardDuplicates {
}
