// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require("mongoose");
const Company = require("./model/Company");

const nftMaker = (uid) => {
  mongoose
    .connect(
      "mongodb+srv://root:toor@cluster0.uv1pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));


  return Company.findOne({ uid }, (err, res) => {
    if (err) console.log(err);
    return res;
  });

};

export default async function handler(req, res) {
  const uid = req.body.uid;
  const response = await nftMaker(uid);
  res.status(200).json({ response });
}
