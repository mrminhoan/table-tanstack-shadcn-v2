import { MonitorModel } from "@/models/class/monitor.model";

export const MockData: MonitorModel[] = [
  {
    uuid: "3d01b872-3977-4579-93a0-33507c277616",
    level: "success",
    latency: 1000,
    regions: ["ams"],
    status: 200,
    date: "2025-02-19T01:14:15.047Z",
    method: "POST",
    host: "api.acme-shop.com",
    pathname: "/v1/products",
  },
];
