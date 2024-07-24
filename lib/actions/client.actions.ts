"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (client: CreateClientParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      client.email,
      client.phone,
      undefined,
      client.name,
    );

    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([
        Query.equal("email", [client.email]),
      ]);

      return documents?.users[0];
    }
  }
};
