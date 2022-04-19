import io from 'socket.io-client'
const HOST = "http://localhost:30010"
console.log('in socket.js')
const socket = io(HOST)

export default socket
