package executions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features/drawCardDuplicates.feature", "src/test/resources/features/drawCardsFromDeck.feature", "src/test/resources/features/drawMoreThanInDeck.feature", "src/test/resources/features/getUniqueDeck.feature", "src/test/resources/features/partialDeckAndRetrieve.feature", "src/test/resources/features/createCardPiles.feature"},
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

public class RunAllFeatures {
}
