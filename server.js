const app = require("./app")
// // const connectDB = require("./utils/connectDB");
// require("dotenv").config();

const PORT = process.env.PORT || 3000

// connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

