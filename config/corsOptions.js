const whitelist = [
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "https://confident-jennings-d10152.netlify.app/*",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
