/// <reference types="cypress"/>

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../selaski/ui/page/home_page";
import { ResultGrid } from "../../selaski/ui/page/result_grid";

var home_page = new HomePage();
var result_grid = new ResultGrid();

Then('verify the login is succesfully', () => {
    home_page.veriftReportTitleAndVisible();
})

And('I click in filter button', () => {
    home_page.clickFilterButton();
})

And('I click in select dropdown', () => {
    home_page.clickSelectDropDown();
})

And('I click {string} item in select dropdown', (itemName) => {
    home_page.clickItemSelectByName(itemName);
})

And('I type {string} in search text box', (value) => {
    home_page.typeSearchTextBox(value);
})

Then('verify the tag search generate is {string}', (valueExpected) => {
    home_page.verifyTagSearchGenerated(valueExpected);
})

Then('verify the first column name is {string}', (valueExpected) => {
    result_grid.verifyFirstColumnsName(valueExpected);
})

Then('verify the result contains the {string}', (valueExpected) => {
    result_grid.verifyItemTextInFirstColumnsContains(valueExpected);
})