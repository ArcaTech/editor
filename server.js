import express, { static as serveStatic } from "express";
import url from "url";

const app = express();
const port = 8080;

const sendFileOptions = {
	root: url.fileURLToPath(new URL(".", import.meta.url))
};

app.get("/", (_, res) => {
	res.sendFile("./index.html", sendFileOptions);
});

app.get("/index.css", (_, res) => {
	res.sendFile("./index.css", sendFileOptions);
});

app.use("/", serveStatic("dist"));
app.use("/src", serveStatic("src")); // For development use only

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});