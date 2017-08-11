const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits
const connect = require('react-redux').connect
const actions = require('../actions')

module.exports = connect(mapStateToProps)(OraclesForm)

function mapStateToProps (state) {
  return {
    warning: state.appState.warning,
  }
}

inherits(OraclesForm, Component)

function OraclesForm () {
  Component.call(this)
}

OraclesForm.prototype.render = function () {
  var props = this.props

  return h('.flex-column', {
    style: {
      marginTop: '35px',
      padding: '25px',
      width: '100%',
    },
  }, [
    h('.flex-row', {
      style: {
        justifyContent: 'space-around',
        margin: '33px',
        marginTop: '0px',
      },
    }, [
      h('button.btn-green', {
        onClick: this.toOracles.bind(this),
      }, 'Faucet'),

      h('button.btn-red', {
        onClick: () => props.dispatch(actions.backTobuyView(props.accounts.address)),
      }, 'Cancel'),
    ]),
  ])
}

OraclesForm.prototype.toOracles = function () {
  const props = this.props
  const address = props.buyView.buyAddress
  props.dispatch(actions.buyEth({ network: '12648430', address, amount: 0 }))
}

OraclesForm.prototype.renderLoading = function () {
  return h('img', {
    style: {
      width: '27px',
      marginRight: '-27px',
    },
    src: 'images/loading.svg',
  })
}
