import express from "express";

const router = express.Router();

router.use("/mandal-arts", (req, res) => {
  res.json({
    message: "hi",
  });
});

export default router;
