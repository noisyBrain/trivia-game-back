import { Sequelize } from 'sequelize'
import 'dotenv/config';

const URI = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:5432/${process.env.DATABASE_NAME}`

export const db = new Sequelize(URI)
