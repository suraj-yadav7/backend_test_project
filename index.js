const express = require('express')
require("dotenv").config()

const app=express()

// user object
const githubUsr={
    "login": "suraj-yadav7",
    "id": 112300059,
    "node_id": "U_kgDOBrGQGw",
    "avatar_url": "https://avatars.githubusercontent.com/u/112300059?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/suraj-yadav7",
    "html_url": "https://github.com/suraj-yadav7",
    "followers_url": "https://api.github.com/users/suraj-yadav7/followers",
    "following_url": "https://api.github.com/users/suraj-yadav7/following{/other_user}",
    "gists_url": "https://api.github.com/users/suraj-yadav7/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/suraj-yadav7/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/suraj-yadav7/subscriptions",
    "organizations_url": "https://api.github.com/users/suraj-yadav7/orgs",
    "repos_url": "https://api.github.com/users/suraj-yadav7/repos",
    "events_url": "https://api.github.com/users/suraj-yadav7/events{/privacy}",
    "received_events_url": "https://api.github.com/users/suraj-yadav7/received_events",
    "type": "User",
    "site_admin": false,
    "name": "suraj yadav",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 40,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2022-08-28T04:37:44Z",
    "updated_at": "2023-09-11T11:36:43Z"
  }

app.get("/",(req, res)=>{
    res.send("<h1>hello developers</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h3>This is the homepage of the project-one</h3>")
})

app.get("/contact",(req,res)=>{
    res.send("<h3>This is contact page of the project-one</h3>")
})

// sending json  data
app.get("/github",(req,res)=>{
    res.json(githubUsr)
})

// listening console value using port
app.listen(process.env.PORT,()=>{
    console.log("Example how to listen things on sever ")
});