 
 const express = require("express");
 const router = express.Router();
 
 
//  GET new cluck page
  router.get("/newCluck", (_req, _res) => {
    _res.render("newClk");
  });