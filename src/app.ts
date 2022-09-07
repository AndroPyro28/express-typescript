import express, {Request, Response, NextFunction, Application} from 'express';
import publicRoutes from './routes/publicRoutes'
const app:Application = express()
app.use(express.json())
app.use('/', publicRoutes)

app.listen(3000, () => console.log('server starts at port 3000'))