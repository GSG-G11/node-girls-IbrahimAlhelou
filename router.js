  
  

  const path = require("path");
  const userHandler = require("./userHnadler");
  const postHandler = require("./postHandler");

  const router = (request, response) => {
    const endpoint = request.url;
    const method = request.method;
    if (endpoint === "/") {
      userHandler("/public/index.html", response);
    } else if (endpoint.includes("public")) {
      userHandler(endpoint, response);
    } else if (endpoint == "/posts") {
      userHandler("src/posts.json", response);
    } else if (endpoint == "/create-post" && method === "POST") {
      postHandler(request, response);
    } else {
      response.writeHead(404);
      response.end("Aint no nothing hrasdasdbuagsdu");
    }
  };


module.exports = router;

//   if (endPoint === "/") {
//     const filePath = path.join(__dirname, "public", "index.html");
//     fs.readFile(filePath, (error, file) => {
//       if (error) {
//         response.writeHead(500);
//         response.end("SERVER ERROR!");
//       } else {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.end(file);
//       }
//     });
//   } else if (endPoint === "/main.css") {
//     const filePathCss = path.join(__dirname, "public", "main.css");
//     fs.readFile(filePathCss, (error, file) => {
//       if (error) {
//         response.writeHead(500);
//         response.end("SERVER ERROR!");
//       } else {
//         response.writeHead(200, { "Content-Type": "text/css" });
//         response.end(file);
//       }
//     });
//   } else if (endPoint === "/img/image.jpg") {
//     const filePathImg = path.join(__dirname, "public", "img", "image.jpg");
//     fs.readFile(filePathImg, (error, file) => {
//       if (error) {
//         response.writeHead(500);
//         response.end("SERVER ERROR!");
//       } else {
//         response.end(file);
//       }
//     });
//   } else if (endPoint === "/create-post") {
//     let allTheData = "";
//     request.on("data", (chunkOfData) => {
//       allTheData += chunkOfData;
//     });
//     request.on("end", () => {
//       const convertedData = queryString.parse(allTheData);
//       console.log(convertedData);
//       response.end();
//     });
//   }
// };
