import * as express from "express";
import * as cors from "cors";
import * as routes from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//add routings
routes.setupProductsRoutes(app);

export { app };
