# Netflix GPT

-Create React App
-Configured Tailwind CSS
-Header
-Routing
-Login/SignUp form
-Form validation
-useRef hook
-Firebase Setup
-Deploying our App to production
-Create SignUp user account
-Implement SignIn user api
-Created Redux store with userSlice
-Implemented Sign out
-Update profile
-BugFix: SignUp user display name and profile picture update
-BugFix: if the user is not logged and still try to access /browse then Redirect from /browse to /login page and 
         if the user is logged in and try to access /login he should be redirect to /browse page.
-Unsubscribe to the onAuthStageChanged callback.
-Added harcoded values in to the constants file.
-Register TMDB API and create an APP and get access token
-Get Data from TMDB now playing movies list API
-Custom hook for now playing movies
-create movie slice
-update store with movie data
-plannnig for main container and secondary container
-Fetch data for Trailer video
-Update store with Trailer video data
-Embedded the youtube video and make it autoplay and mute.
-Tailwind classes to make main container look awesome.
-Build secondary component
-Build Movie list
-build movie card
-TMDB image CDN url
-UsePopularMovies custom hook
-GPT Search Feature



# Features

-Login Page
   - login form
   - redirect to browse page

- Browse page (After authentication)
     - Header
     - Main movie 
        - Trailer in background
        - Title , play button, more info button and description

     - Other movie suggestions
         - Movies list * n

- NetflixGPT
    - Search Bar
    - Movie Suggestions


# Steps for Deployment :-

0) npm install -g firebase-tools
1) firebase login
2) firebase init - and then select hosting
3) firebase deploy


# General Tips :-

1) host you project on production(e.g. here we did firebase deploy) and put it on resume and share that on social media.
2) this will help me to get oppurtunities much more.
3) reading documetation is a Super Power of a developer.