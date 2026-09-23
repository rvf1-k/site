import { entrada } from "./components/window.js";
import { btnSecret } from "./components/btn-secret.js";
import { writteBytes, getBytesCV } from "./components/bytes-cv.js";

btnSecret();
entrada();
writteBytes(await getBytesCV());
