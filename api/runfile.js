const { execFile } = require("child_process");

module.exports = (path) => {
  execFile(path, (err, data) => {
    console.log(err);
    console.log(data);
  });
};
