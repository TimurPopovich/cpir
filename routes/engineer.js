const router = require("express").Router();
const User = require("../db/models/user.model");
const Project = require('../db/models/project.model')

router.post("/", async (req, res) => {
  try {
    const { name, email, surName, thirdName, password } = req.body.info;

    const user = new User({
      name,
      surName,
      thirdName,
      email,
      password,
      status: "engineer",
    });
    await user.save();

    res.json({ massage: true });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const {
      address,
      email,
      phone,
      name,
      surName,
      thirdName,
      startDate,
      objectType,
      wallType,
      wallDamage,
      roofDamage,
      wallWater,
      beamWater,
      otherDefects,
      recommendMonitoring,
      recommendGeological,
      projectId2,
    } = req.body;

    // let fullDate = new Date(startDate);
    // let year = `${fullDate.getFullYear}/${fullDate.getMonth}/${fullDate.getDay}`
    
    // console.log(year)

    await Project.findOneAndUpdate({_id:projectId2}, {address,
      email,
      phone,
      name,
      surName,
      thirdName,
      startDate,
      objectType,
      wallType,
      wallDamage,
      roofDamage,
      wallWater,
      beamWater,
      otherDefects,
      recommendMonitoring,
      recommendGeological})
     
      res.json('updated')
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
