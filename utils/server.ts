const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://next-ecommerce-front.vercel.app";
export const ingramserver = dev
  ? "https://api.ingrammicro.com:443"
  : "https://api.ingrammicro.com:443";
