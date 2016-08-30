# auth-user-server
Simple Auth server, for signup and singin purposes

Clone this repository and then `npm install`
if you have already installed mongodb just run `mongodb` into you db folder

Once it has already, run `node index` for start the node server 
if you need to make many changes just run `node run dev` for start this server with a watch listener.
So you don't need stop and restart your server for every change.

Your server will running on 3090 port

http://localhost:3090/signup for create a new user (email, password) keys are needed in your POST request
once the user is created succesfully you need to copy the token key and pass it as authorization key header 
into http://localhost:3090/ 

If you need your token again just POST the (email, password) keys into http://localhost:3090/signin  
and check the response
