import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/indexRouter"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(router)


const uri: string = `mongodb+srv://akohli:accountDB123@account.zmlno4q.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
