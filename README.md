## Ravenous
### Introduction
Ravenous is a Yelp-like clone made as part of Codecademy's "Building Front-End Applications with React" course. Below is a description from the exercise.

> In total, there will be four parts to this project:
> * Creating Static Components
> * Passing Information to Components
> * Setting the State of Ravenous Components
> * Interacting with the Yelp API
> 
> Here’s a quick overview of how Ravenous should function:
> * As a user, I should be able to search for restaurants
> * As a user, I should be able to view a list of restaurants returned by the Yelp API
> * As a user, I should be able to sort through restaurants using a filter
> 
> The four projects will test your knowledge of JavaScript and React, all with the goal of building a Yelp-like clone. If you want to get a feel for what Ravenous can be, visit the Yelp website and search for restaurants in your area.

### Part 1 - Create Project & Components
Welcome to the first installment of the Ravenous project! Over the next couple of weeks, you’ll build a website called “Ravenous”, a Yelp-like clone.

Today, you will start by building the first part of Ravenous: Creating Static Components. The final product is a simulation of how the Ravenous project will look and work. Some functionality (like querying the Yelp API) is currently missing, but you’ll build it in the upcoming projects.

Reflect on the knowledge you used in this project. As you do so, consider the following question:

At the moment, some information (like business information) is hard coded into specific components. How might you pass this information dynamically between components? We’ll expand each component through the coming weeks to address the question above (and more).

### Part 2 - Passing Information
Welcome to the second part of the Ravenous project! Take a minute to review what you accomplished in the first part of this project. You:
* Used create-react-app to start your project
* Built all of the components you’ll need for the remainder of the project
* Simulated what Ravenous should look like after returning search results

In this project, you’ll complete the second part of Ravenous: Passing Information to Components.

So far, you’ve hard coded business information and rendered it manually. Now we’ll focus on how information (like business information) can pass from component to component with less hard coding. This is crucial as we build towards the goal of constructing a Yelp-like clone.

### Part 3 - Setting the Search Bar's State
Welcome to the third part of the Ravenous project! Take a minute to review what you accomplished in the second part of this project. You:
* Moved business information to the container component (App)
* Passed information from parent components (App) to child components (BusinessList, Business)
* In this project, you’ll complete the third part of Ravenous: Setting the State of Ravenous Components.

Certain components will need to handle changes in their state. For example, the sorting options in the search bar will change (and we’ll need to know their state when communicating with the Yelp API). The same goes for the two input elements. These are the kinds of changes you’ll handle in this project.
