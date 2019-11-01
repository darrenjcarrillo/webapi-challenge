// EXPRESS & ROUTER
const router = require("express").Router();

// IMPORT MODEL
const projectModel = require("../../data/helpers/projectModel.js");

// GET
router.get("/", (req, res) => {
  console.log("Projects Router GET/");

  projectModel
    .get()
    .then(allProjects => {
      console.log("allProjects", allProjects);
      allProjects && res.status(200).json(allProjects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// GET ALL ACTIONS
router.get("/:id", (req, res) => {
  console.log("Projects Router GET/");

  const { id } = req.params;
  projectModel
    .getProjectActions(id)
    .then(allProjects => {
      console.log("allProjects", allProjects);
      allProjects && res.status(200).json(allProjects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log("Projects Router GET id");
  const { id } = req.params;

  projectModel
    .get(id)
    .then(result => {
      console.log(`GET BY ID`, result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  console.log("projectModel post/");
  const newProject = req.body;
  console.log("Project", newProject);
  // -- //
  projectModel
    .insert(newProject)
    .then(result => {
      console.log("Insert Project", result);
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  console.log("projectModel Put/");
  const { id } = req.params;
  console.log(id);
  const updateProject = req.body;
  console.log(updateProject);
  projectModel
    .update(id, updateProject)
    .then(updateResult => {
      res.status(200).json(updateResult);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  console.log("projectModel Remove/");
  const { id } = req.params;
  console.log(id);
  projectModel
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
