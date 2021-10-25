const server = require("./api/server");

const PORT = process.env.PORT;

// START YOUR SERVER HERE

server.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
