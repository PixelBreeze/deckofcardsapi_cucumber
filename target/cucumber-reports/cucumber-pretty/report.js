$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cards.feature");
formatter.feature({
  "name": "Simple Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Demonstrating how Cucumber-JVM works",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RestsTests"
    }
  ]
});
formatter.step({
  "name": "endpoint url is \"https://stackoverflow.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RESTcalls2.endpointUrlIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"GET\" request is called and response html doc is saved",
  "keyword": "When "
});
formatter.match({
  "location": "RESTcalls2.requestIsCalledAndResponseIsSaved(String)"
});
formatter.result({
  "status": "passed"
});
});