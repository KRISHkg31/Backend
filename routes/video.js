const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); 

router.post('/upload', upload.single('video'), (req, res) => {
  const videoPath = req.file.path;

  ffmpeg(videoPath)
    .outputOptions('-t 1000') 
    .on('end', () => {
      console.log('Processing finished!');
      res.send('Video processed successfully');
    })
    .on('error', (err) => {
      console.error('Error processing video:', err);
      res.status(500).send('Error processing video');
    })
    .save(`processed/${req.file.filename}`);
});

module.exports = router;
