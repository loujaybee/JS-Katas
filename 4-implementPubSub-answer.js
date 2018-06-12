const subscribers = [];

const subscribe = (channel, callback) => {
    subscribers.push({
      channel, 
      callback
    });
};

const publish = (channel, data) => {
  const emitter = subscribers.find( subscriber  => subscriber.channel === channel);
  if(emitter) {
    emitter.callback(data);
  }
};

module.exports = {
    publish, 
    subscribe
}