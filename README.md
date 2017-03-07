# Fullstack React - Build a Microblogging Platform Chirp

##Overview
We've been working on React this week, and syncing our application to an API. Now you're going to put all that knowledge together by building a microblogging social network app, called _Chirp_! 

![Chirp](https://tiy-learn-content.s3.amazonaws.com/426f7475-chirp-logo.png)


##Setup 

##### 1. Clone this repo
```
git clone git@github.com:t3tools/webpack-es6-and-scss.git «your-projet»
```

##### 2. Install the packages
```
npm install
```

##### 3. Run the taskrunner & run the local server
- Task Runner
```
npm run go
```

##### 4. Workflow
Do scss and javascript work in the `src/` directory. It will compile to the `dist/` with the taskrunner.

`index.html` pages are served out of the `dist/`

##### 5 Seed Data
[later]

##### 6 User Authentication
[later]


### Normal Mode
- User can submit a chirp
- User can see all chirps posted by all users.
- User can signup with 
  - a name (`username`), 
  - personal name (`personalName`), 
  - password(`password`)
  - and upload an avatar photo (`avatarUrl`)
- User can post a new _chirp_, a 170-character limited text field
- User can login in with username and password
- User can logout
- User expects a well-designed, attractive experience
- Authenticated User should see a chirp form on the `chirps` route to submit a new chirp. Unauthenticated users should not be able to submit new chirps.

The entire site must be built in React and can include views such as Welcome, SignUp, Login, and Chirps. The actual _chirp_ page must be real-time meaning it must submit to and pull from the API without refreshing the page.

### Explorer Mode

- Entire experience should be mobile-first, with an optimized mobile view
- User can include an optional image link for a chirp.
- User can like chirps.
- Provide client side form validation
  - Email must have '@' and '.XXX' at the end
  - Password must have a number

### Adventurer Mode
- User can see list of other users, and follow users
- User can unfollow a user they follow
- User can see _chirps_ from themselves and people they follow in a chronological list below the _chirp_ field


### Epic Mode
- _Chirps_ should use infinite scroll, showing 10 initially and revealing more chirps as they scroll down the page.
- User can view a profile page which will show only their _chirps_
- User can search for _chirps_
- User can search for other users
- Connect to filestack API to upload images for chirp.


#### Roadmap to Success
1. Create the Backbone Router with the major app routes
  ```
  'chirps' : 'showChirpsComponent'
  'login' : 'showLoginComponent'
  'register' : 'showRegisterComponent'
  '' (root) : 'showWelcomePageComponent'
  ```
2. Create React View Components for Routes. Create the simplest HTML to make them functional 
  - LoginView
    - should have input fields for email and password
  - SignUpView
    - should have fields for email, username, 
  - ChirpsView
  - HomePageView

3. Create your AppViewController component
