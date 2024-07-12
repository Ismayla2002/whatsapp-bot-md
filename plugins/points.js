const fs = require('fs');
const pointsFile = './storage/points.json';

if (!fs.existsSync(pointsFile)) {
  fs.writeFileSync(pointsFile, JSON.stringify({}));
}

const getPoints = () => JSON.parse(fs.readFileSync(pointsFile));
const savePoints = (points) => fs.writeFileSync(pointsFile, JSON.stringify(points));

const addPoints = (user, amount) => {
  const points = getPoints();
  points[user] = (points[user] || 0) + amount;
  savePoints(points);
};

const removePoints = (user, amount) => {
  const points = getPoints();
  points[user] = (points[user] || 0) - amount;
  if (points[user] < 0) points[user] = 0;
  savePoints(points);
};

const getUserPoints = (user) => {
  const points = getPoints();
  return points[user] || 0;
};

module.exports = {
  addPoints,
  removePoints,
  getUserPoints,
};
