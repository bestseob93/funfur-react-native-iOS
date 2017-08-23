import React, { Component } from 'react'
import { TextInput, Animated, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'


class AnimatedInput extends Component {
    static propTypes = {
        
    }
    
    static defaultProps = {
    
    }

    constructor(props) {
        super(props);

        const value = null;
        this.state = {
            width: null,
            value,
            focusedAnim: new Animated.Value(value ? 1 : 0),
        }

        this.onLayout = this.onLayout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onLayout(ev) {
        console.log(ev.nativeEvent.layout.width);
        this.setState({
            width: ev.nativeEvent.layout.width,
        });
    }

    handleChange(ev) {
        this.setState({
          value: ev.nativeEvent.text,
        });
    
        const onChange = this.props.onChange;
        if (onChange) {
          onChange(ev);
        }
    }

    onFocus(ev) {
        this.onToggle(true);
    
        const onFocus = this.props.onFocus;
        if (onFocus) {
          onFocus(ev);
        }
    }

    onToggle(isActive) {
        this.isActive = isActive;
        Animated.timing(this.state.focusedAnim, {
          toValue: isActive ? 1 : 0,
        }).start();
    }

    onBlur(ev) {
        if (!this.state.value) {
          this.onToggle(false);
        }
    
        const onBlur = this.props.onBlur;
        if (onBlur) {
          onBlur(ev);
        }
     }

    render() {
        console.log(this.props);
        return (
            <View
                onLayout={this.onLayout}
            >
                <TextInput
                    placeholder="이메일을 입력해주세요."
                    style={styles.textInput}
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoFocus={true}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    maxLength={20}
                    returnKeyType="done"
                    { ...this.props }
                />
                <Animated.View
                style={[
                    styles.border,
                    {
                        width: this.state.focusedAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, this.state.width],
                    }),
                        backgroundColor: '#000',
                    },
                ]}
                />
            </View>
        )
    }
}

export default AnimatedInput