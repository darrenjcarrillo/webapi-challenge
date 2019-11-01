// EXPRESS & ROUTER
const router = require("express").Router();

// IMPORT MODEL
const actionModel = require("../../data/helpers/actionModel.js");

// GET
router.get("/", (req, res) => {
  console.log("allActions Router GET/");

  actionModel
    .get()
    .then(allActions => {
      console.log("allProjects", allActions);
      allActions && res.status(200).json(allActions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// GET ID
router.get("/:id", (req, res) => {
  console.log("actionModel Router GET id");
  const { id } = req.params;

  actionModel
    .get(id)
    .then(result => {
      console.log(`GET BY ID`, result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// POST
router.post("/", (req, res) => {
  console.log("actionModel post/");
  const newAction = req.body;
  console.log("actionModel", newAction);
  // -- //
  actionModel
    .insert(newAction)
    .then(result => {
      console.log("Insert Project", result);
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT
router.put("/:id", (req, res) => {
  console.log("actionModel Put/");
  const { id } = req.params;
  console.log(id);
  const updateAction = req.body;
  console.log(updateAction);
  actionModel
    .update(id, updateAction)
    .then(updateResult => {
      res.status(200).json(updateResult);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  console.log("actionModel Remove/");
  const { id } = req.params;
  console.log(id);
  actionModel
    .remove(id)
    .then(deleteResult => {
      console.log("deleteResult", deleteResult);
      res.status(200).json(deleteResult);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
