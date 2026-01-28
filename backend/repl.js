import readline from "readline";
import engine from "./db/engine.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "rdbms> "
});

.console.log("Simple RDBMS REPL");
rl.prompt();

rl.on("line", (line) => {
  try {
    const result = engine.execute(line);
    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
  rl.prompt();
});