import { app } from './app';
import { db } from './db';

db.sync({ force: true }).then(() => {
  console.log("Database connected")
  app.listen(3000, () => console.log("Listening on port 3000"))
}).catch(() => console.error('something went wrong'))

// prueba para push ssh
