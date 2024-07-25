import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/;
export const phoneRegex =
  /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));
