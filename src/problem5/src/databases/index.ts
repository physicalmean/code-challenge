import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import * as path from "path";
import { Resource, Schema } from "../models";

class Database {
  private static instance: Database;
  private data: Schema;
  private filePath: string;

  private constructor() {
    this.filePath = path.join(__dirname, "db.json");
    this.data = this.loadData();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private loadData(): Schema {
    let data: Schema = { resources: [] };
    if (fs.existsSync(this.filePath)) {
      const fileData = fs.readFileSync(this.filePath, "utf-8");
      if (typeof fileData === "object") {
        data = JSON.parse(fileData);
      }
    }
    return data;
  }

  private saveData(): void {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }

  public create(resource: Omit<Resource, "id">): Resource {
    const newResource = { id: uuidv4(), ...resource };
    this.data.resources.push(newResource);
    this.saveData();
    return newResource;
  }

  public list(): Resource[] {
    return this.data.resources;
  }

  public get(id: string): Resource | undefined {
    return this.data.resources.find((resource) => resource.id === id);
  }

  public update(
    id: string,
    updatedResource: Partial<Resource>
  ): Resource | undefined {
    const resource = this.data.resources.find((resource) => resource.id === id);
    if (resource) {
      Object.assign(resource, updatedResource);
      this.saveData();
      return resource;
    }
    return undefined;
  }

  public delete(id: string): boolean {
    const index = this.data.resources.findIndex(
      (resource) => resource.id === id
    );
    if (index !== -1) {
      this.data.resources.splice(index, 1);
      this.saveData();
      return true;
    }
    return false;
  }
}

export default Database;
