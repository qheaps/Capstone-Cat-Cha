# Cat-Cha Overview
Cat-Cha is inspired by various card collection and gacha franchises in which you collect objects, characters, etc. As one might assume, Cat-Cha allows the user to collect various cats by rolling for them. To use the site, the user must create an account in order to have the cats that they rolled associated with their account.

# Technologies Used
- JavaScript
- CORS
- Express
- Node
- SQL
- Sequelize
- HTML
- CSS

# Set Up
1. Clone the Repo
2. Run npm i in the root of the project folder
3. Create a new postgres SQL database
4. Create a .env file in the root of the project folder that resembles this:
    1. SERVER_PORT=9876
CONNECTION_STRING=postgres://postgres:%YOURPASSWORDHERE%@localhost:%YOURPORTHERE%/%YOURDATABASENAMEHERE%
5. Run nodemon and open a live server
6. Collect some cats!

# Features 
Account Registration and Logging In: Cat-Cha requires the user to create an account to keep track of the user's cats. The user can enter a unique username and password, which can then be used to login at a later time to continue collecting cats. Users can also logout of their account.
![Cat Collection](./planning/login.png "This is some image...")
Cat Rolling: Users can roll for cats each time the roll button is pressed, which generates 10 cats of varying rarities, from 3 stars to 5 stars. The rolled cats have unique styling based upon their rarity, and upon being rolled are then associated to the user's account as being owned by that user.
![Cat Collection](./planning/catrolling.png "This is some image...")
Cat Collection: Here users can view and sort the database of cats, and see what cats they have collected.
![Cat Collection](./planning/catcollection.png "This is some image...")