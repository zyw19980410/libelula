const moment = require('moment');
const USER_STATUS = ['ONLINE', 'OFFLINE'];
const users = {};

module.exports = server => {
  const io = require('socket.io')(server, {
    handlePreflightRequest: function (req, res) {
      const headers = {
        'Access-Control-Allow-Origin': req.headers.origin,
        'Access-Control-Allow-Credentials': true
      };
      res.writeHead(200, headers);
      res.end();
    }
  });

  io.on('connection', socket => {
    socket.on('online', username => {
      console.log(`${username} online`)
      socket.username = username;
      users[username] = {
        socketId: socket.id,
        status: USER_STATUS[0]
      };
    })

    socket.on('private_chat', (params, fn) => {
      console.log(params)
      const receiver = users[params.receiver];
      params.createTime = moment().format('YYYY-MM-DD HH:mm:ss');
      params.senderPhotoNickname = params.sender.substr(params.sender.length - 2)
      fn(params);

      if (receiver && receiver.status === USER_STATUS[0]) {
        socket.to(users[params.receiver].socketId).emit('reply_private_chat', params);
      } else {
        console.log(`${params.receiver} is offline`);
      }
    });

    socket.on('disconnect', reason => {
      console.log('disconnect: ', reason);
      
      if (users[socket.username]) {
        users[socket.username].status = USER_STATUS[1];
      }
    });
  });
}