const router = require("express").Router();
const Controller = require("../controllers");

router.get("/elephants", Controller.allElephant);
router.get("/elephants/random", Controller.randomElephant);
router.get("/elephants/sex/:sex", Controller.sexElephant);
router.get("/elephants/name/:name", Controller.nameElephant);
router.get("/elephants/species/:species", Controller.speciesElephant);

module.exports = router;
