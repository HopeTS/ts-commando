import path from "path";

/** Get the client-side public path */
const getPublicPath = () => {
  const buildPath = path.join(__dirname, "../../Client/public");
  return buildPath;
};

export default getPublicPath;
