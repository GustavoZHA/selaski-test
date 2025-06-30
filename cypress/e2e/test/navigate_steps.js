/// <reference types="cypress"/>

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { Navigate } from "../../selaski/ui/navigate";

var navigate = new Navigate()

Given('I navigate selaski page', () => {
    navigate.loginPage()
})
