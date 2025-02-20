import { MonitorModel } from "@/models/class/monitor.model";

export const MockData: MonitorModel[] = [
  {
    "uuid": "3d01b872-3977-4579-93a0-33507c277616",
    "level": "success",
    "latency": 1000,
    "regions": ["ams"],
    "status": 200,
    "date": "2025-02-19T01:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 50
  },
  {
    "uuid": "438636b4-07f9-47f9-aa6c-8b059a711a55",
    "level": "success",
    "latency": 956,
    "regions": ["iad"],
    "status": 200,
    "date": "2025-02-19T01:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 27.22222222222222
  },
  {
    "uuid": "88090a2d-2140-430a-8d4b-677bbd651dfd",
    "level": "success",
    "latency": 1066,
    "regions": ["gru"],
    "status": 200,
    "date": "2025-02-19T01:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 59.27083333333333
  },
  {
    "uuid": "72aa370d-6733-4c22-85d1-3b9b5b51900e",
    "level": "success",
    "latency": 1033,
    "regions": ["syd"],
    "status": 200,
    "date": "2025-02-19T01:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 54.65277777777777
  },
  {
    "uuid": "9e125b1e-fc10-48b2-94b9-2585083c2179",
    "level": "success",
    "latency": 978,
    "regions": ["fra"],
    "status": 200,
    "date": "2025-02-19T01:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 30.59027777777778
  },
  {
    "uuid": "09bc756b-6c17-4f8e-be96-9a6b74625eb0",
    "level": "error",
    "latency": 1044,
    "regions": ["hkg"],
    "status": 500,
    "date": "2025-02-19T01:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "message": "ERR_INTERNAL_DISASTER: \"The server spilled coffee on itself.\"",
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 56.25
  },
  {
    "uuid": "35534872-f674-4960-aeaf-4a634ccb3afa",
    "level": "success",
    "latency": 1000,
    "regions": ["ams"],
    "status": 200,
    "date": "2025-02-19T00:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "GET",
    "host": "acme-shop.com",
    "pathname": "/bikes/gravel/road",
    "percentile": 50
  },
  {
    "uuid": "ca839023-6c73-4ad4-997b-f2f4008cd44f",
    "level": "success",
    "latency": 924,
    "regions": ["iad"],
    "status": 200,
    "date": "2025-02-19T00:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "GET",
    "host": "acme-shop.com",
    "pathname": "/bikes/gravel/road",
    "percentile": 23.15972222222222
  },
  {
    "uuid": "d6308f0e-e6f7-4467-bf75-954cdd3da986",
    "level": "success",
    "latency": 1113,
    "regions": ["gru"],
    "status": 200,
    "date": "2025-02-19T00:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "GET",
    "host": "acme-shop.com",
    "pathname": "/bikes/gravel/road",
    "percentile": 65.06944444444444
  },
  {
    "uuid": "552f652d-ddb2-4d26-aab1-af409bd26783",
    "level": "success",
    "latency": 1057,
    "regions": ["syd"],
    "status": 200,
    "date": "2025-02-19T00:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "GET",
    "host": "acme-shop.com",
    "pathname": "/bikes/gravel/road",
    "percentile": 58.229166666666664
  },
  {
    "uuid": "fefca651-f556-4e6a-bc12-04b7bfbbe531",
    "level": "success",
    "latency": 962,
    "regions": ["fra"],
    "status": 200,
    "date": "2025-02-19T00:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "GET",
    "host": "acme-shop.com",
    "pathname": "/bikes/gravel/road",
    "percentile": 28.09027777777778
  },
  {
    "uuid": "e55ed607-266b-4039-80fa-5b90c4db98cb",
    "level": "success",
    "latency": 1076,
    "regions": ["hkg"],
    "status": 200,
    "date": "2025-02-19T00:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "GET",
    "host": "acme-shop.com",
    "pathname": "/bikes/gravel/road",
    "percentile": 60.763888888888886
  },
  {
    "uuid": "ae953032-f83e-4490-b41f-46217fef9573",
    "level": "success",
    "latency": 1000,
    "regions": ["ams"],
    "status": 200,
    "date": "2025-02-18T23:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/orders",
    "percentile": 50
  },
  {
    "uuid": "fefae62a-4491-4829-b9bc-7bfe02cc8f47",
    "level": "success",
    "latency": 627,
    "regions": ["iad"],
    "status": 200,
    "date": "2025-02-18T23:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/orders",
    "percentile": 1.1458333333333333
  },
  {
    "uuid": "07a9929f-3a54-4861-b38a-bfa8f3695d0e",
    "level": "success",
    "latency": 1559,
    "regions": ["gru"],
    "status": 200,
    "date": "2025-02-18T23:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/orders",
    "percentile": 98.92361111111111
  },
  {
    "uuid": "5f5e218f-a61a-43bc-8b4d-e19fe2650c3c",
    "level": "success",
    "latency": 1280,
    "regions": ["syd"],
    "status": 200,
    "date": "2025-02-18T23:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/orders",
    "percentile": 85.38194444444444
  },
  {
    "uuid": "05f037c2-e285-48ee-8426-c15b0290c34c",
    "level": "success",
    "latency": 814,
    "regions": ["fra"],
    "status": 200,
    "date": "2025-02-18T23:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/orders",
    "percentile": 10
  },
  {
    "uuid": "ce3bdf77-5113-4b4c-92bb-7f660667223c",
    "level": "success",
    "latency": 1373,
    "regions": ["hkg"],
    "status": 200,
    "date": "2025-02-18T23:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/orders",
    "percentile": 92.91666666666667
  },
  {
    "uuid": "f9234eb6-6b98-48f2-921d-0c0ea1caf408",
    "level": "success",
    "latency": 1000,
    "regions": ["ams"],
    "status": 200,
    "date": "2025-02-18T22:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 50
  },
  {
    "uuid": "5945c136-7fca-4859-8e05-a037dba1841c",
    "level": "warning",
    "latency": 967,
    "regions": ["iad"],
    "status": 400,
    "date": "2025-02-18T22:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 28.749999999999996
  },
  {
    "uuid": "b618c93f-0f26-4293-892e-c0a04f15257a",
    "level": "success",
    "latency": 1050,
    "regions": ["gru"],
    "status": 200,
    "date": "2025-02-18T22:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 57.1875
  },
  {
    "uuid": "9244c2a0-0f9d-4aaf-be82-c8f3a73b4ecf",
    "level": "success",
    "latency": 1025,
    "regions": ["syd"],
    "status": 200,
    "date": "2025-02-18T22:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 53.50694444444445
  },
  {
    "uuid": "ec546db3-fe7b-4ab5-9961-fd7f499eb1f9",
    "level": "success",
    "latency": 983,
    "regions": ["fra"],
    "status": 200,
    "date": "2025-02-18T22:14:15.047Z",
    "headers": {
      "Age": "0",
      "Cache-Control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "Server": "Cloudflare"
    },
    "method": "POST",
    "host": "api.acme-shop.com",
    "pathname": "/v1/products",
    "percentile": 31.145833333333332
  }
]
