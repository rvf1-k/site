export async function getBytesCV() {
  try {
    const respuesta = await fetch(`./CV_Rafael_Moreno.pdf`, { method: "HEAD" });
    const bytes = respuesta.headers.get("content-length");

    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }

    return parseInt(bytes).toLocaleString("es-ES");
  } catch (error) {
    console.log("No se pudo obtener el valor del CV", error);
    return "---";
  }
}

export function writteBytes(bytesCV) {
  document.querySelector(".bytes").textContent = `${bytesCV} bytes`;
}
