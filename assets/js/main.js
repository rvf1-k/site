import { entrada } from "./components/window.js";
import { btnSecret } from "./components/btn-secret.js";
import { btnProyects } from "./components/btn-proyects.js   ";
import { writteBytes, getBytesCV } from "./components/bytes-cv.js";

btnSecret();
btnProyects();
entrada();
writteBytes(await getBytesCV());
