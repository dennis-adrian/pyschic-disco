import express from 'express';
const app = express();
const PORT = 8001;
const name = 'Dennis Adrian'
app.get('/', (req,res) => res.send(`Express + TypeScript Server. Jenkins is already linked with a Jenkinsfile by ${name}`));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});