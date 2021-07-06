import React from 'lib-app/dist/react';
import Button from 'component-app/dist/Button'
import Dialog from 'component-app/dist/Dialog'
import ToolTip from "component-app/dist/ToolTip"

export default class App extends
  React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      dialogVisible: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true
    })
  }
  HanldeSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible
    })
  }
  render() {

    return (<div>
      <h1>Open Dev Tool And Focus On Network,checkout resources details</h1>
      <p>react、react-dom js files hosted on <strong>lib-app</strong></p>
      <p>
        components hosted on <strong>component-app</strong>
      </p>
      <h4>
        Buttons:
      </h4>
      <Button type="primary" />
      <Button type="warning" />
      <h4>
        Dialog:
      </h4>
      <button onClick={this.handleClick}>click me to open Dialog</button>
      <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible} />
      <h4>hover me please!</h4>
      <ToolTip content="hover me please" message="Hello,world!" />
    </div>)
  }
}