import { entrada } from "./components/window.js";
import { writteBytes, getBytesCV } from "./components/bytes-cv.js";

entrada();
writteBytes(await getBytesCV());
