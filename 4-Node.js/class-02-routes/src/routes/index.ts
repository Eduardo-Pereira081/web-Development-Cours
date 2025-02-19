import { request, Router } from "express";

export const router = Router();

router.get("/", (_request, response) => {
  response.json({ name: "Class Routes" });
});

router.get("/users", (_request, response) => {
  response.json([
    { name: "Ash", age: 10 },
    { name: "Mestre Came", age: 300 },
    { name: "Alucard", age: 500 },
  ]);
});

//route params
router.get("/user/:id", (request, response) => {
  const { id } = request.params;

  const users = [
    { id: 1, name: "Ash", age: 10 },
    { id: 2, name: "Mestre Came", age: 300 },
    { id: 3, name: "Alucard", age: 500 },
  ];

  response.json(users[Number(id) - 1] || {});
});

// query params
router.get("/user", (req, res) => {
  const { id, name, value } = req.query;
  res.json({ id, name, value });
});

// body param
router.post("/user", (req, res) => {
  const { id, name, value } = req.body;
  res.json({ id, name, value });
});
