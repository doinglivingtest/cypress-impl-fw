# cypress-impl-fw
Cypress framework implementation to cover UI and API tests

I decided to use Cypress over other automation frameworks for 3 strong reasons. The most important is the ability to test APIs not only UI, the second one is we are testing a React app (js), first time I consider ReactJS but this tool is not able to test API, and the last one, it is a simple **small** framework, not planned to be expanded, we don't need multiple customization just basic features to test UI, API, and reporting. In a different context if we would need a robust framework to test different components with complex layouts I will probably go for building my own framework. 

I'm a big believer in testing functionality beyond the user interface (UI) whenever possible. And since integration/API tests bypass the UI, they tend to be quicker and much more reliable than UI tests.

That's why it's important to have a test suite that tests several different layers of your application. For that, you need tools (That's why I choose Cypress) that can test both the UI and non-UI components of your application.

# Getting Started

## Prerequisites

React movie app runnning in docker in your local.

## Installation

  1. Clone the Repo
  
  ```
  git clone https://github.com/doinglivingtest/cypress-impl-fw.git
  
  ```
  
  2. Navigate to this project directory
  
  3. Install NPM packages
  
  ```
  npm install
  
  ```
  
  4. Install Cypress
  
  ```
  npm install cypress --save-dev
  
  ```
  
## Running the tests
 
 ```
  npm test
  
  ```
  
## Reports
 
A Mocha report will be automatically generated after test run, please refer to 
 
 ```
 ../cypress/reports/mochareports/report.html
  
  ```

 
