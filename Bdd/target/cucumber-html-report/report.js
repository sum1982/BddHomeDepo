$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("rental.feature");
formatter.feature({
  "line": 1,
  "name": "HomeDepo Rental Feature",
  "description": "",
  "id": "homedepo-rental-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "HomeDepo Rental Test Scenario",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-rental-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is already on HomeDepo Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the home page is HomeDepo",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on local ad",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on tool rental",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on tillers",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on check availability",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on check nearby stores",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks search box and enters \"\u003czipcode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-rental-test-scenario;",
  "rows": [
    {
      "cells": [
        "zipcode"
      ],
      "line": 15,
      "id": "homedepo-rental-feature;homedepo-rental-test-scenario;;1"
    },
    {
      "cells": [
        "60133"
      ],
      "line": 16,
      "id": "homedepo-rental-feature;homedepo-rental-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "HomeDepo Rental Test Scenario",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-rental-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is already on HomeDepo Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the home page is HomeDepo",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on local ad",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on tool rental",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on tillers",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on check availability",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on check nearby stores",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks search box and enters \"60133\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_already_on_HomeDepo_Page()"
});
formatter.result({
  "duration": 4816556800,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.title_of_the_home_page_is_HomeDepo()"
});
formatter.result({
  "duration": 435485300,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_local_ad()"
});
formatter.result({
  "duration": 5731947800,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_tool_rental()"
});
formatter.result({
  "duration": 1923622000,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_tillers()"
});
formatter.result({
  "duration": 2676336800,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_check_availability()"
});
formatter.result({
  "duration": 2985379500,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_check_nearby_stores()"
});
formatter.result({
  "duration": 2211713600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60133",
      "offset": 35
    }
  ],
  "location": "TestSteps.user_clicks_search_box_and_enters_zip_code(String)"
});
formatter.result({
  "duration": 334106900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "HomeDepo Husky Test Scenario",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-husky-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user is on ad page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user clicks on husky link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user clicks on tool bags",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user sees husky tool bags",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_on_ad_page()"
});
formatter.result({
  "duration": 1310818900,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_husky_link()"
});
formatter.result({
  "duration": 2580765500,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_tool_bags()"
});
formatter.result({
  "duration": 2518594400,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_sees_husky_tool_bags()"
});
formatter.result({
  "duration": 2009388900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "HomeDepo Career Test Scenario",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-career-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user is on HomeDepo site",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user clicks on localad",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user clicks on careers",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks on Search and apply",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user enters \"\u003ckeywords\u003e\" and clicks on location",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user sees jobs near location entered",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-career-test-scenario;",
  "rows": [
    {
      "cells": [
        "keywords"
      ],
      "line": 39,
      "id": "homedepo-rental-feature;homedepo-career-test-scenario;;1"
    },
    {
      "cells": [
        "cashier"
      ],
      "line": 40,
      "id": "homedepo-rental-feature;homedepo-career-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "HomeDepo Career Test Scenario",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-career-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user is on HomeDepo site",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user clicks on localad",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user clicks on careers",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user clicks on Search and apply",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user enters \"cashier\" and clicks on location",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user sees jobs near location entered",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_on_HomeDepo_site()"
});
formatter.result({
  "duration": 1143653000,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_localad()"
});
formatter.result({
  "duration": 2831160300,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_careers()"
});
formatter.result({
  "duration": 4269672100,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_Search_and_apply()"
});
formatter.result({
  "duration": 2619370000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cashier",
      "offset": 13
    }
  ],
  "location": "TestSteps.user_enters_keywords_and_clicks_on_location(String)"
});
formatter.result({
  "duration": 183770100,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_sees_jobs_near_location_entered()"
});
formatter.result({
  "duration": 20381500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "HomeDepo Blinds Test Scenario",
  "description": "",
  "id": "homedepo-rental-feature;homedepo-blinds-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "user is already on local ad",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user clicks on blinds link",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user click on wood blinds",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user selects width and height and clicks on update",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user sees results",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_is_already_on_local_ad()"
});
formatter.result({
  "duration": 1503917400,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_blinds_link()"
});
formatter.result({
  "duration": 1709008300,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_click_on_wood_blinds()"
});
formatter.result({
  "duration": 2227966400,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_selects_width_and_height_and_clicks_on_update()"
});
formatter.result({
  "duration": 815477700,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_sees_results()"
});
formatter.result({
  "duration": 2170384900,
  "status": "passed"
});
});