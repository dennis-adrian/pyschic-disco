import express from 'express';
const app = express();
const PORT = 8001;
const name = 'Dennis Adrian'

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

app.get('/', (req,res) => res.send(`Express + TypeScript Server. Jenkins is already linked with a Jenkinsfile by ${name}`));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  console.log(`The date is: ${dd}/${mm}/${yyyy}`);
});