import cors from 'cors'
import express from 'express'

const a = 0

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})
