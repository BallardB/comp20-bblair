Status Report 3

Group 15: Ballard Blair, Maya DeBellis, Julia Depp, Adam Tracht, Brooke Weil

(1) what was accomplished during the week 
- created several GET POST requests
        - adding game master and regular users
        - creating instances of multiple codes and games 
- linked front end with the server and mongodb
- created front end game logic, linking pages based on who is asking Qs

(2) challenges and issues team faced during the week
- figuring out how and when the send requests to sever
- thinking about flow of game. How do we know when all players are in
        or when all players have entered answers to their qs

(3) your goals for the next week
- finishing front end game logic
- storing everything on heroku app instead of running front end locally
- encorpirating more style and UI changes
- implementing share by SMS

#COmments by Ming
* "added QR codes with the game codes included to the "create" page" => cool
* "thinking about flow of game. How do we know when all players are in
        or when all players have entered answers to their qs" => what comes to mind: socket.io for this.  You can track number of people who have answered a question in real time.
