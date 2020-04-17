import React from "react";
import PropTypes from "prop-types";

class ChildComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: (function () {
      console.log("ChildComponent: defaultProps");
      return "";
    })(),
  };

  constructor(props) {
    super(props);
    console.log("ChildComponent: state");
    this.state = {
      name: "Denis",
    };

    this.oops = this.oops.bind(this);
  }

  oops() {
    this.setState(() => ({ oops: true }));
  }

  UNSAFE_componentWillMount() {
    console.log("ChildComponent: UNSAFE_componentWillMount()");
  }

  componentDidMount() {
    console.log("ChildComponent: componentDidMount()");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("ChildComponent: UNSAFE_componentWillReceiveProps()");
    console.log("nextProps: ", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ChildComponent: shouldComponentUpdate()");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("ChildComponent: UNSAFE_componentWillUpdate()");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ChildComponent: componentDidUpdate()");
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
  }

  componentWillUnmount() {
    console.log("ChildComponent: componentWillUnmount()");
  }

  render() {
    console.log("ChildComponent: render()");
    if (this.state.oops) {
      throw new Error("Something went wrong");
    }
    return (
      <div className="ChildComponent">
        <div>Name: {this.props.name}</div>
        <button onClick={this.oops}>Create error</button>
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: (function () {
      console.log("ParentComponent: defaultProps");
      return "";
    })(),
  };

  constructor(props) {
    super(props);
    console.log("ParentComponent: state");
    this.state = {
      text: this.props.text,
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(event) {
    const text = event.target.value;
    this.setState(() => ({
      text: text,
    }));
  }

  UNSAFE_componentWillMount() {
    console.log("ParentComponent: UNSAFE_componentWillMount()");
  }

  componentDidMount() {
    console.log("ParentComponent: componentDidMount()");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("ParentComponent: UNSAFE_componentWillReceiveProps()");
    console.log("nextProps: ", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ParentComponent: shouldComponentUpdate()");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("ParentComponent: UNSAFE_componentWillUpdate()");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ParentComponent: componentDidUpdate()");
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
  }

  componentWillUnmount() {
    console.log("ParentComponent: componentWillUnmount()");
  }

  componentDidCatch(err, errInfo) {
    console.log("ParentComponent: componentDidCatch()");
    console.error(err);
    console.error(errInfo);
    this.setState(() => ({ err, errInfo }));
  }

  render() {
    console.log("ParentComponent: render()");
    if (this.state.err) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.err && this.state.err.toString()}
          <br />
          {this.state.errInfo.componentStack}
        </details>
      );
    }
    return (
      <div className="ParentComponent">
        <h1>Learn about rendering and lifecycle methods!</h1>
        <form>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChangeText}
          />
        </form>
        <ChildComponent name={this.state.text} />
      </div>
    );
  }
}

const LifecycleMethods = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default LifecycleMethods;
