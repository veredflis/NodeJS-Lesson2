import { app } from "./app";

console.log("My App 4");
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"));
