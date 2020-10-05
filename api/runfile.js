const { execFile } = require("child_process");
const Shell = require("node-powershell");

module.exports = (path) => {
  const ps = new Shell({
    executionPolicy: "Bypass",
    noProfile: true,
  });
  ps.addCommand(`Start-Process -FilePath "${path}"`);
  return ps.invoke();
};
