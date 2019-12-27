// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/web_asm.js";

console.log('runWasm 0');
const runWasm = async () => {
  console.log('runWasm');

  // Instantiate our wasm module
  const helloWorld = await init("./pkg/web_asm_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = helloWorld.add(23, 11);

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
