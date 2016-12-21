
#   QuestionQuail Readme
#   
#   Semester group project for Comp20: Fall 2016 
#   Group 15: Ballard Blair, Maya DeBellis, Julia Depp, Adam Tracht and Brooke Weil
#

Overview:

> " For this project we had to work on a group project that related to computer or video games. We
    created a free-form answer and question game (similar to Apples to Apples or Cards Against Humanity)
    for friends to play remotley on any device. "

Project title:
   
>  " QuestionQuail "

Problem statement (i.e., what is the problem?)
    
> "  We want people to be able to play a fun, free-form question based game from their own 
     devices and in their own space "

How do we solve the problem?

    Using a unique group code, groups of friends will be able to log on and 
    play a game together. The QR code can be shared with through a text to a friend or 
    a QR code. Friends can be in different places, or the same place,
    all interacting and answering fun questions together. One person will be in charge of 
    the questions for a round, and all other players will submit answers to 
    the question. The person in charge will be able to choose their favorite answer and award points 
    for their answer. At the end of each round, there will be a winner!

Features:

  > Players will be able to log into the game from their computers/devices via 
    a code
    
  > Players will take turns posing and anonymously answering questions, and the 
    player posing questions will pick the best answer(s) to win points each 
    round
    
  > Players can receive a game code via SMS 
  
  > Client-side data persistence with local storage 
  
  > Server-side data persistence (MongoDB) 
  
  > Front-end framework (Bootstrap) 
  
  > QR Code API (http://goqr.me/api/)

What data will our prototype be using and collecting?

 >  We are collecting answers from every player of the game 
 
 >  We are collecting a question from a game-master 
 
 >  Each user’s rate of correct answers will be stored across all games they’ve 
    ever played
    
 >  Each game’s overall point leaderboard will be collected throughout the game 
    and displayed graphically at the end of a game

Any algorithms or special techniques that will be necessary

  > During each round of play, the role of the question-master will rotate 
  
  > The question master will pose questions which will be displayed on the site,
    and they will receive anonymous answers
    
  > The questions master will pick the winning answer(s); each winning answer 
    earns a point for whomever submitted it



