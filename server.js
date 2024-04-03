// import express from 'express';
// import multer from 'multer';

// const app = express();
// const port = 3003;

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads'); // Set the destination folder for uploaded images
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename for the uploaded image
//   }
// });
// const upload = multer({ storage: storage });

// // Route to handle image upload
// app.post('/upload', upload.single('image'), (req, res) => {
//   res.status(200).send('Image uploaded successfully!'); // Send success response
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique filenames

const app = express();
const port = 3003;

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Set the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueFilename = uuidv4(); // Generate a unique filename using uuid
    const fileExtension = file.originalname.split('.').pop(); // Get the file extension
    const newFilename = `${uniqueFilename}.${fileExtension}`; // Combine unique filename and extension
    cb(null, newFilename); // Use the new filename for the uploaded image
  }
});
const upload = multer({ storage: storage });

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).send('Image uploaded successfully!'); // Send success response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
