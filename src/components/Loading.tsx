import * as React from 'react';

const styles = {
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
  text?: string;
  speed?: number;
}

interface ILoadingState {
  content: string;
  speed: number;
  intervalId: number | undefined;
}

export default class Loading extends React.Component<
  ILoadingProps,
  ILoadingState
> {
  constructor(props: ILoadingProps) {
    super(props);

    this.state = {
      content: 'Loading',
      speed: 300,
      intervalId: undefined,
    };
  }

  componentDidMount() {
    const text = this.props.text || this.state.content;

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
    }, this.state.speed);

    console.log(newIntervalId);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      // <Delayed>
      <p style={styles}>{this.state.content}</p>
      // </Delayed>
    );
  }
}
