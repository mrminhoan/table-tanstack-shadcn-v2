import { TLEVELS, TMETHODS, TREGIONS } from "@/constants";
import BaseModel from "./base.model";

export class MonitorModel extends BaseModel{
  uuid: string;
  method: TMETHODS;
  host: string;
  pathname: string;
  level: TLEVELS;
  latency: number;
  status: number;
  regions: TREGIONS[];
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any
  percentile?: number
  message?: string
}
