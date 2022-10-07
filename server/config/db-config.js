import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection: Success");
  })
  .catch((err) => console.log(err));