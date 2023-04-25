import server from "./app";



const PORT = process.env.PORT || 1360;
server.listen(PORT, () => {
  console.log(`Server start on http://localhost:${PORT}`)
})