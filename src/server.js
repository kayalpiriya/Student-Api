import { config } from "dotenv";
config(); // load .env
import app from "./app.js";
import { connectDB } from "./config/mongoose.js";

await connectDB('mongodb+srv://kayalpiriya_09:kayal2004@kayalpiriya.d4mp54n.mongodb.net/?retryWrites=true&w=majority&appName=kayalpiriya');
app.listen(5000, () =>
console.log(`🚀 Server running on http://localhost:5000`)
);