import React, {
    Component,
    StyleSheet,
    View,
    Text,
    PropTypes,
    TouchableOpacity,
    TouchableHighlight,
    Platform,
    Animated,
}
from 'react-native';

type Event = Object;

const DELAY = 100;

class Button extends Component {
    static propTypes = {

        //Events
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        onLongPress: PropTypes.func,

    };

    static defaultProps = {

    };

    state = {

    };


    constructor(props: Object) {
        super(props);
    }

    render() {
        const {
            style,
            // onPress, onPressIn, onPressOut, onLongPress,
            children,
        } = this.props;

        return (
            <TouchableOpacity
                style={[{position:'absolute'},style]}
                onPress={this._onPress.bind(this)}
                onPressIn={this._onPressIn.bind(this)}
                onPressOut={this._onPressOut.bind(this)}
                onLongPress={this._onLongPress.bind(this)}
            >
            {children}
            </TouchableOpacity>
        );
    }

    _onPress(e: Event) {
        this.props.onPress && this.props.onPress(e, this);
    }

    _onPressIn(e: Event) {
        this.props.onPressIn && this.props.onPressIn(e, this);
    }

    _onPressOut(e: Event) {
        this.props.onPressOut && this.props.onPressOut(e, this);
    }

    _onLongPress(e: Event) {
        this.props.onLongPress && this.props.onLongPress(e, this);
    }
}

export default Button;