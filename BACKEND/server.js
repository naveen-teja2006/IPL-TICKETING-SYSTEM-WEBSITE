let db = require("./config/db");
let express = require("express");
let app = express(); // Express Server 
let cors = require("cors"); // This Is For Cross-Origin Platforms
app.use(cors());
app.use(express.json());
let matchRoutes = require("./routes/matchesRoutes");
let RegisterRoutes = require("./routes/registerRoutes");
let signinRoutes = require("./routes/signInRoutes");
let bookingsRoutes = require("./routes/bookingsRoutes");
app.use("/api/matches", matchRoutes);
app.use("/api/register", RegisterRoutes);
app.use("/api/signin", signinRoutes);
app.use("/api/bookings", bookingsRoutes);
app.listen(3000, () => {
    console.log("Server Is Running On 3000...");
});