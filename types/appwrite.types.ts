import { Models } from "node-appwrite";

export interface Client extends Models.Document {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  }