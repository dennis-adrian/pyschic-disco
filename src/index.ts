import express from 'express';
const app = express();
const PORT = 8001;
app.get('/', (req,res) => res.send('Express + TypeScript Server. Jenkins is already linked with a Jenkinsfile'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});