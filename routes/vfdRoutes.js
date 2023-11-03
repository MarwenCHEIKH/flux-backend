const express = require("express");
const SSHService = require("../service/SSHService");
const {
  createDircomm,
  updateDircomm,
  moveDircomm,
} = require("../commands/VFDcommands");
const service = new SSHService();
const router = express.Router();
router.use(express.json());

// Route to create a directory
router.post("/create-directory", async (req, res) => {
  const formDataObject = req.body;
  try {
    const env = formDataObject["env"];
    const serverConfig = service.getServerConfig(env);
    const commandString = service.generateCommand(
      "vfdadm create_dir",
      createDircomm,
      formDataObject
    );
    res.send(commandString);

    // await service.connect(serverConfig);
    // await service.executeCommand(commandString);
    res.status(200).json({ message: "Command executed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } // finally {
  //     service.closeConnection();
  //   }
});
router.post("/update-directory", async (req, res) => {
  const formDataObject = req.body;
  try {
    const env = formDataObject["env"];
    const serverConfig = service.getServerConfig(env);
    const commandString = service.generateCommand(
      "vfdadm update_dir",
      updateDircomm,
      formDataObject
    );
    res.send(commandString);

    // await service.connect(serverConfig);
    // await service.executeCommand(commandString);
    res.status(200).json({ message: "Command executed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } //finally {
  //     service.closeConnection();
  //   }
});
router.post("/move-directory", async (req, res) => {
  const formDataObject = req.body;
  try {
    const env = formDataObject["env"];
    const serverConfig = service.getServerConfig(env);
    const commandString = service.generateCommand(
      "vfdadm move_dir",
      moveDircomm,
      formDataObject
    );
    res.send(commandString);

    // await service.connect(serverConfig);
    // await service.executeCommand(commandString);
    res.status(200).json({ message: "Command executed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //   finally {
  //     service.closeConnection();
  //   }
});
router.post("/delete-directory", async (req, res) => {
  const formDataObject = req.body;
  try {
    const env = formDataObject["env"];
    const serverConfig = service.getServerConfig(env);
    const commandString = service.generateCommand(
      `vfdadm delete_dir -mp "N" -mdp ""`,
      moveDircomm,
      formDataObject
    );
    res.send(commandString);

    // await service.connect(serverConfig);
    // await service.executeCommand(commandString);
    res.status(200).json({ message: "Command executed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  //   finally {
  //     service.closeConnection();
  //   }
});
module.exports = router;
