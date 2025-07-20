const express = require("express");
const {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");
const { protect } = require("../middlewares/authMiddleware");
const { uploadResumeImages } = require("../controllers/uploadImages");

const router = express.Router();

// create resume

router.post("/", protect, createResume);

// Get user resume

router.get("/", protect, getUserResumes);

// get resume by id

router.get("/:id", protect, getResumeById);

// update resume

router.put("/:id", protect, updateResume);

// upload resume images

router.put("/:id/upload-image", protect, uploadResumeImages);

// delete resume

router.delete("/:id", protect, deleteResume);

module.exports = router;
