# Include in this doc the required information for your software reqs for your project as a whole

## Dependancies

# Vision
Summary of idea.
- User can authenticate (login) access history like HighScore, and can create Trivia Sessions based on Categories

What problem or pain point does it solve? a. Keep it high level without going into too much detail.
- Entertaining evaluating users knowledge base around particular categories which they can use to match up and compare against other cohorts, friends, and family.

# Scope (in/out)
IN - What will your product do
- Auth0 Login 
- Trivia Session can be configured with 3 catagories / No difficulty selection until after MVP
- HighScore is functionable displaying in APP
- Form Input for Custom Trivia/ all CRUD Operations are working as intended 
- UI Selector (change UI colors and theme based on User Selection)
- Save user data in dB (backend & Mongo Atlas)

OUT - What will your product not do.
- Will not become a mobile IOS or Android App
- Will not allow for custom theme generation in regards to UI selector (all colors, etc are predefined)

# Minimum Viable Product
Functional calls to Trivia API and backend Server, User can sign in and authenticate with Auth0, Can choose between a minimum of three Categories for Trivia Sessions.

Stretch Goals
Add Difficulty to the Travia Session Configurator for User to choose from when starting new sessions.

# Data Flow
User begins with login, after authenticated is greeted with Travia Session Configurator Page, User can configure Travia Session based on 3 catagories (video games, automotive, and sports),
User can click start button to begin session, Axios call is then made to retrieve Trivia Session from OpenTraviaDB, User completes Travia Session, HighScore is updated, Session data saved to dB, User can also configure custom travia via form input which Creates, Updates, or Deletes user generated Travia, User can also click to retrieve Custom Travia from dB representing Global user base Custom Travia Submissions which would then be displayed on page upon click.

# Functional Requirements 
- Login via Auth0
- Configure Trivia Sessions based on User Preferences
- HighScore/Scoring Functionality
- CRUD Operations for updating Mongo Atlas dB with user constructed Trivia from Form Input
- UI selector changes apperance of Application based on User Selection

# Non Functional Requirements
- Usability 
- Customizable 
- Entertaining
# Dependancies

React,
Js,
CSS,
Axios,
NPM,
Nodemon,
OpenTriviaDB API,  
MongoDB,
Mongo Atlas,
React-Bootstrap

