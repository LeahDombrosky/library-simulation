require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
// const { dbUser, database } = require("./config");
// const { secret } = require("./config");
// const { domain, clientID, clientSecret } = require("./config");
// const { connectionString } = require("./config");
const secret = process.env.SECRET;
const domain = process.env.DOMAIN;
const clientID = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;
const connectionString = process.env.CONNECTIONSTRING;

const port = 3001;

const app = express();

app.use(json());
app.use(cors());
massive(connectionString)
  .then(db => app.set("db", db))
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(passport.initialize());
passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: "/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .getUserByAuth(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUser([profile.id, profile.displayName])
              .then(created => {
                console.log(created);
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

// passport.serializeUser(function(customers, done) {
//   done(null, customers);
// });

// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/"
  })
);

app.get("/api/me", function(req, res) {
  if (!req.user) return res.status(404).json("no go");
  res.status(200).json(req.user);
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`We are listening on port: ${port}`);
});
