import { v4 as uuidV4 } from "uuid";

const generateShortUUID = () => uuidV4().slice(0, 8);

export { generateShortUUID };
