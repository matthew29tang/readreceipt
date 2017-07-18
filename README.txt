Version History

V0.0.0 (7/10/17)- Soft launch for just my own read receipts. Minimal Viable Product- Supports read receipts for channels, private channels, and IMs.

V0.1.0 (7/17/17)- Added a server for Esther. Bug-fixing in progress.


FAQ:
What is this? What does this do?
This is basically an app that adds read receipts to slack. Read receipts are markers that indicate that you have read a message to let others know that you have seen it.

How does this work?
You do need to give me your API key to create a server for you. The code automatically reacts with your face (custom emoji) once you update your read marker. It will automatically removes the reaction of your face for previous messages above this. I set up a server using Heroku to run the code 24/7. You can check out the code in clientread.js!

But isn't that dangerous to give out your API key?
Yes! It is. But I'm a nice person and I won't exploit your account. I swear!! (It basically gives me permission to post messages and react to messages under your account.

What is an API key?
An API key is a token that allows me to authenticate using Oath to the slack Real Time Messaging (RTM) server. Basically it makes sure that random people can't just post for users.

Yikes! What if I don't want a read receipt?
No worries! You need to give me an API key for me to add read receipts for you. There's literally no way for me to see if you updated your read marker unless you give me your API key.

Why would I want read receipts?
This is helpful if you don't like responding to general messages but want to let the person know that you've seen the message.

I want a read receipt!!! How can I get one?
Currently this app is in soft-launch so you cannot get one yet. Once I open it to everyone, you can send me your API key (legacy token) and I can set up a read receipt server for you.

Are there any downsides to getting a read receipt?
The tradeoff is that your availability will always be set to "on" because the server runs 24/7. But you have read markers so people will know if you see their message! Don't worry, you will still receive notifications.

Why do Matthew and Esther keep reacting with their faces?
Those are read receipts! They are deactivated in #announcements and #team since there are so many members, but they are active for the rest of the channels.

I found a bug! How do I report it?
Please submit an issue under the issues tab. Updating read markers via mobile device (phone app) is known to cause some bugs (this is an API problem, not mine! Bascially that is slack's fault.) Adding files/objects will also make the read receipt temporarily disappear (no known fix at the moment). 
