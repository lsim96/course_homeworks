import TrainerService from "../services/trainers.service.js";

export default class TrainerController {
  static async getTrainers(req, res) {
    try {
      const trainers = await TrainerService.getTrainers(
        req.query.currentlyActive,
        req.query.sortBy
      );
      res.send(trainers);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async getTrainer(req, res) {
    try {
      const trainer = await TrainerService.getSingleTrainer(req.params.id);
      res.send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async createTrainer(req, res) {
    try {
      const trainerBody = req.body;
      const trainer = await TrainerService.createSingleTrainer(trainerBody);
      res.status(201).send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async updateTrainer(req, res) {
    try {
      const trainerId = req.params.id;
      const trainerBody = req.body;
      const trainer = await TrainerService.updateSingleTrainer(
        trainerId,
        trainerBody
      );
      res.send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteTrainer(req, res) {
    try {
      await TrainerService.deleteSingleTrainer(req.params.id);
      res.status(204).send({ message: "Trainer successfully deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async deleteAllTrainers(req, res) {
    try {
      await TrainerService.deleteAllTrainers();
      res
        .status(204)
        .send({ message: "All trainers have been successfully deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
