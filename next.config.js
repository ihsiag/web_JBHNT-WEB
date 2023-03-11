/* @type {import('next').NextConfig} */

const fs = require("fs");
// const lastUpdatedAt = fs.readFileSync("./.last-updated","utf8");
const getFileUpdatedDate = (path) => {
  const stats = fs.statSync(path);
  return new Date(stats.mtime.getTime() + stats.mtime.getTimezoneOffset() + (9 * 60) * 60 * 1000)
}

const nextConfig = {
  reactStrictMode: true,
  experimental:{
    scrollRestoration: true,
  },
  images: {
    domains: [""],
  },
  env:{
    // NODE_ENV:"development", next already has it maybe??
    // NEXT_PUBLIC_LAST_UPDATED_AT : getFileUpdatedDate("./.next"),
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID : "G-01VD9P8JLT"
  }
};

module.exports = nextConfig;