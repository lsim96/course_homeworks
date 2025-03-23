import TrainerModel from "../models/trainers.model.js";
import { v4 as uuidv4 } from "uuid";

export default class TrainerService {
  static async getTrainers(currentlyActive, sortBy) {

    
    return await TrainerModel.getAll(currentlyActive, sortBy);
  }

  static async getSingleTrainer(id) {
    const trainer = await TrainerModel.getById(id);
    if (!trainer) {
      throw new Error("Trainer was not found");
    }
    return trainer;
  }

  static async createSingleTrainer(body) {
    const trainer = {
      ...body,
      id: uuidv4(),
    };
    return await TrainerModel.createIndividual(trainer);
  }

  static async updateSingleTrainer(id, body) {
    const trainer = await TrainerModel.getById(id);
    if (!trainer) {
      throw new Error("Trainer was not found");
    }
    const updatedTrainer = {
      ...body,
      id,
    };
    return await TrainerModel.updateIndividual(id, updatedTrainer);
  }

  static async deleteSingleTrainer(id) {
    return await TrainerModel.deleteIndividual(id);
  }

  static async deleteAllTrainers() {
    return await TrainerModel.deleteAllIndividuals();
  }
}
