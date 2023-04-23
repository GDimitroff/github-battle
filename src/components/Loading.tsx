import * as React from 'react';

const styles: React.CSSProperties = {
  fontSize: '14px',
  position: 'absolute',
  left: '0',
  right: '0',
  marginTop: '20px',
  textAlign: 'center',
};

// interface IDelayedProps {
//   children: React.ReactNode;
// }

// interface IDelayedState {
//   show: boolean;
//   intervalId: number | undefined;
// }

// class Delayed extends React.Component<IDelayedProps, IDelayedState> {
//   constructor(props: IDelayedProps) {
//     super(props);

//     this.state = {
//       show: false,
//       intervalId: undefined,
//     };
//   }

//   componentDidMount() {
//     const newIntervalId = window.setTimeout(() => {
//       this.setState({ show: true });
//     }, this.props.wait);

//     this.setState({
//       intervalId: newIntervalId,
//     });
//   }

//   componentWillUnmount() {
//     window.clearInterval(this.state.intervalId);
//   }

//   render() {
//     return this.state.show === true ? this.props.children : null;
//   }
// }

interface ILoadingProps {
  text: string;
  speed: number;
}

interface ILoadingState {
  content: string;
}

export default class Loading extends React.Component<
  ILoadingProps,
  ILoadingState
> {
  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  intervalId: ReturnType<typeof setInterval> | undefined;

  constructor(props: ILoadingProps) {
    super(props);

    this.state = { content: props.text };
  }

  componentDidMount() {
    const { text, speed } = this.props;

    const newIntervalId = setInterval(() => {
      this.state.content === text + '...'
        ? this.setState((prevState) => {
            return {
              ...prevState,
              content: text,
            };
          })
        : this.setState((prevState) => {
            return {
              ...prevState,
              content: prevState.content + '.',
            };
          });
    }, speed);

    this.intervalId = newIntervalId;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      // <Delayed>
      <p style={styles}>{this.state.content}</p>
      // </Delayed>
    );
  }
}
