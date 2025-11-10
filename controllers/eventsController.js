let events = require("../data/eventsData");

// GET all
exports.getAllEvents = (req, res) => {
  res.status(200).json({
    status: "success",
    data: events
  });
};

// GET by ID
exports.getEventById = (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);

  if (!event) {
    return res.status(404).json({
      status: "fail",
      message: "Event tidak ditemukan"
    });
  }

  res.status(200).json({
    status: "success",
    data: event
  });
};

// POST
exports.createEvent = (req, res) => {
  const { title, date, location } = req.body;

  if (!title) return res.status(400).json({ status: "fail", message: "Field 'title' wajib diisi" });
  if (!date) return res.status(400).json({ status: "fail", message: "Field 'date' wajib diisi" });
  if (!location) return res.status(400).json({ status: "fail", message: "Field 'location' wajib diisi" });

  const newEvent = {
    id: events.length + 1,
    title,
    date,
    location
  };

  events.push(newEvent);

  res.status(201).json({
    status: "success",
    data: newEvent
  });
};

// PUT
exports.updateEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const eventIndex = events.findIndex(e => e.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Event tidak ditemukan"
    });
  }

  const { title, date, location } = req.body;

  if (!title) return res.status(400).json({ status: "fail", message: "Field 'title' wajib diisi" });
  if (!date) return res.status(400).json({ status: "fail", message: "Field 'date' wajib diisi" });
  if (!location) return res.status(400).json({ status: "fail", message: "Field 'location' wajib diisi" });

  events[eventIndex] = {
    id,
    title,
    date,
    location
  };

  res.status(200).json({
    status: "success",
    data: events[eventIndex]
  });
};

// DELETE
exports.deleteEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const eventIndex = events.findIndex(e => e.id === id);

  if (eventIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Event tidak ditemukan"
    });
  }

  events.splice(eventIndex, 1);

  res.status(204).send();
};
