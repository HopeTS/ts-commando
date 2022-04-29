import express from "express";

export default function (app: express.Express) {
  app.get("/shit", (req, res) => {
    console.log("I guess man");
    res.send("Please for the love of christ");
  });
}
