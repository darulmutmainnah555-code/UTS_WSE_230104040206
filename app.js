const express = require("express");
const app = express();
const eventsRoutes = require("./routes/eventsRoutes");

app.use(express.json());

app.get("/api/info", (req, res) => {
  res.status(200).json({
    name: "SYFA AULIA DARUL MUTMAINNAH",
    nim: "NIM_ANDA",
    resource: "events",
    message: "RESTful API untuk UTS WSE",
    time: new Date().toISOString()
  });
});

app.use("/api/events", eventsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
