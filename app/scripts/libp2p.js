console.log('libp2p test active!')
const multiaddr = require('multiaddr')
const PeerInfo = require('peer-info')
const peerId = require('peer-id')

const id = peerId.create()
const peer = new PeerInfo(id)
const mh = multiaddr('/libp2p-webrtc-star/ip4/127.0.0.1/tcp/15555/ws/ipfs/' + id.toB58String())
peer.multiaddr.add(mh)
const node = new libp2p.Node(peer)

console.log('listening for peers')
node.discovery.on('peer', (peerInfo) => {
  console.log(peerInfo)
})