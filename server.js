import { config } from "dotenv";
config(); // load .env
import app from "./src/app.js";
import { connectDB } from "./src/config/mongoose.js";

await connectDB('mongodb+srv://kayalpiriya_09:kayal2004@kayalpiriya.d4mp54n.mongodb.net/?retryWrites=true&w=majority&appName=kayalpiriya');
app.listen(process.env.PORT, () =>
console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);