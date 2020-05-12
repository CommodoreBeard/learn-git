# learn-git
playground for teaching git and github basics. This will be a two part session.


## Topics
- Overview
  - Git allows us to collaborate through code
  - Git is decentralized

- Getting Started
  - Create github account
  - Install Git (via GitHub Desktop) from [Here](https://desktop.github.com/)
  - Clone this repo

- Tasks for the session
  - Create a new branch
  - Add a new endpoint to `server.js`
  - Add a new test to `test/server.spec.js`
  - Commit changes
  - Push new branch
  - Create Pull Request
  - Review Pull Request
  - Merge Branch

- Tasks for after the session
  - Add a new `POST` endpoint (`/add-up`) which accepts a JSON body in the following structure
  ```json
  {
    "numbers": [1, 2, 3]
  }
  ```
  - The new endpoint should return a JSON object which adds up all of the numbers in the array, e.g.:
  ```json
  {
    "result": 6
  }
  ```

  - Add new tests for this new endpoint
  - Create a branch
  - Commit your changes
  - Push your new branch
  - Submit a pull request
