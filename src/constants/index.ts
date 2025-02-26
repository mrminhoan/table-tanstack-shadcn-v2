import { ArrayElement } from "@/models/type/utils";

export const METHODS = ["GET", "POST", "PUT", "DELETE"] as const;
export type TMETHODS = ArrayElement<typeof METHODS>;

export const LEVELS = ["success", "warning", "error"] as const;
export type TLEVELS = ArrayElement<typeof LEVELS>;


export const REGIONS = ["ams", "fra", "gru", "hkg", "iad", "syd"] as const;
export type TREGIONS = ArrayElement<typeof REGIONS>;

export const regions: Record<string, string> = {
  ams: "Amsterdam",
  fra: "Frankfurt",
  gru: "Sao Paulo",
  hkg: "Hong Kong",
  iad: "Washington D.C.",
  syd: "Sydney",
};

export const flags: Record<string, string> = {
  ams: "🇳🇱",
  fra: "🇩🇪",
  gru: "🇧🇷",
  hkg: "🇭🇰",
  iad: "🇺🇸",
  syd: "🇦🇺",
};

export const SORT_TYPE = {
  ASC: "asc",
  DESC: "desc",
} as const
