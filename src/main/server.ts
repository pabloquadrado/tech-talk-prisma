import { createApp } from './config'
import { NODE_PORT } from './config/env'

(async () => {
  const app = await createApp()
  app.listen(NODE_PORT, () => {
    console.info(`Server is running on port ${NODE_PORT}`)
  })
})()