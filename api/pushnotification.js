module.exports = app => {
  const enviopush = (req,res) => {
    var FCM = require('fcm-node');
    var serverKey = 'AAAAB1HfI3I:APA91bHljvVALCO-DA8VnH1rIpLDNYUHYVeErvEfDdWdnltc95N1rG_NSQdCZVFtIgxiOoT7dJeJonCdSpIZAIQE5VajwBoRi1I1_JlFbUsHLBXkg47vSgPJ9kkB0c21TnZaBT6GgeBz'; //put your server key here
    var fcm = new FCM(serverKey);

    var userToken = req.query.userToken;
    var titleMsg = req.query.titleMsg;
    var bodyMsg = req.query.bodyMsg;
    
    var message = {
      //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: userToken,      
      notification: {
        title: titleMsg, 
        body: bodyMsg, 
      }
    };

    fcm.send(message, function(err, response){
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log("Sucesso!");
        res.json(response);
      }
    });
  }
  return { enviopush };
}