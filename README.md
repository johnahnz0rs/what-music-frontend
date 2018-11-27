#whatMusic
Exploring music together is a great way to get to know your new friend(s). But sometimes, it's hard to list what music we listen to.
@whatMusic we got your back. We show you what music yous both like, so you can get going! #besafe #havefun #onelove


l33t hax0rs: @hanapotski, @nicolenyc, @johnahnz0rs






---
### what's the big idea?

* when users successfully sign in, they receive: 
    * new api calls to their music provider for latest data (top tracks & artists, etc)
    * save newest data to mongo dbase
    * privacy statement: 
        * we do not post on any social media on your behalf;
        * we do not share nor sell ur personal information unless forced by law;
        * we might use show your first name, last name initial, profile picture, location, etc. to help you connect with other users;
        * you're automatically signed out of our app in [i think] 30 mins, and you have to sign in again after that.
    * redirect to /user
    
    
* /user (front-end)
    * methods:
        * pageHandler()
        * compareMeAndUser()
        * findRandoUser()
        * findNearby()
    * <MyNavbar />
        * search bar (if not showing <Friends />)
    * <Home />: user sees four buttons: 
        * My Music, 
        * Friends, 
        * Nearby, 
        * Meet a Rando.
    * <My Music />: 
        * show me my top artists, tracks, albums, genres, etc., using:
            * navbar tabs
    * <Friends />:
        * search bar
        * summary / details
    * <Nearby />: 
        * show the users a msg: coming soon, see users near you with similar tastes in music.
    * <Meet a Rando />: 
        * compare with a random user




---
###to-do list



#####11/26/18
- [ ] after login --> homepage:
    - [ ] landing page: four centered buttons:
- [x] login page:
    - [x] re-design landing page where u can login -- currently only for spotify users
    - [ ] login with music providers (postponed):
        - [ ] apple music
        - [ ] youtube music
        - [ ] soundcloud - soundcloud is currently not accepting new app development 
            - [msg from soundcloud](https://docs.google.com/forms/d/e/1FAIpQLSfNxc82RJuzC0DnISat7n4H-G7IsPQIdaMpe202iiHZEoso9w/closedform)
            - [sign up for a new app](https://soundcloud.com/you/apps/new) 
        - [ ] yo mama


- [ ] review route /createUser - currently it first queries the dbase for the user's email; if an account doesn't exist, it creates one, but if an account *does* exist, it tries to update that user. let's make it so that it just returns an error msg that says user already exists (11/8/18)








---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
