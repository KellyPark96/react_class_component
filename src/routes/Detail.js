import React from 'react';

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		console.log(this.props);
		if (location.state === undefined) {
			history.push('/');
		}
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			return <span>{location.state.title}</span>;
		} else {
			return null;
		}
	}
}
// render 후에 componentDidMount 작동됨.

export default Detail;
