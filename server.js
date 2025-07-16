import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
// import useroutes from './routes/userRoutes.js';
import warehouseRoutes from './routes/warehouseRoutes.js'
import ProductRoutes from "./routes/productRoutes.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: 'Too many requests. Please try again later.'
});
app.use(limiter);
// app.use('/api/user', useroutes);
app.use('/api/',warehouseRoutes);
app.use('/api/product',ProductRoutes);


app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});


const server = app.listen(PORT, () => {
  console.log(`Server is running on port PORT`,PORT);
});