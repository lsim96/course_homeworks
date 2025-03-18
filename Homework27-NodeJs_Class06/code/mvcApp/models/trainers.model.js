import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const filePathDirectory = path.dirname(currentFilePath);
const trainersPath = path.join(
  filePathDirectory,
  "..",
  "data",
  "trainers.json"
);

export default class TrainerModel {
  static async getAll(currentlyActive, sortBy) {
    let trainers = await DataService.readData(trainersPath);

    if (currentlyActive) {
      trainers = trainers.filter((trainer) => trainer.isCurrentlyTeaching);
    }
    if (sortBy === "CourseAsc") {
      trainers.sort((a, b) => a.coursesFinished - b.coursesFinished);
    } else if (sortBy === "CourseDesc") {
      trainers.sort((a, b) => b.coursesFinished - a.coursesFinished);
    }
    return trainers;
  }

  static async getById(id) {
    const trainers = await DataService.readData(trainersPath);
    const foundTrainers = trainers.find((trainer) => trainer.id === id);
    return foundTrainers;
  }

  static async createIndividual(body) {
    const trainers = await this.getAll();
    trainers.push(body);
    await DataService.writeData(trainersPath, trainers);
    return body;
  }

  static async updateIndividual(id, body) {
    const trainers = await this.getAll();
    const index = trainers.findIndex((trainer) => trainer.id === id);
    if (index < 0) {
      throw new Error("Product was not found!");
    }
    trainers[index] = body;
    await DataService.writeData(trainersPath, trainers);
    return trainers[index];
  }

  static async deleteIndividual(id) {
    const trainers = await this.getAll();
    const filteredTrainers = trainers.filter((trainer) => trainer.id !== id);
    await DataService.writeData(trainersPath, filteredTrainers);
  }

  static async deleteAllIndividuals() {
    const trainers = await this.getAll();
    trainers.length = 0;
    await DataService.writeData(trainersPath, trainers);
  }
}
