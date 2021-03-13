import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSpring, animated, config } from 'react-spring/native';
import BezierEasing from 'bezier-easing';
import CustomerCare from './Index';

const propTypes = {
    children: PropTypes.node,
    contentHeight: PropTypes.number,
    defaultCollapsed: PropTypes.bool,
    style: PropTypes.any,
    title: PropTypes.string,
    useBezier: PropTypes.bool,
};

const defaultProps = {
    contentHeight: 200,
};

function CollapsibleCard( {
    children,
    contentHeight,
    defaultCollapsed,
    style,
    title,
    useBezier,
    navigation,
    ...props
}) {
    const [isCollapsed, setCollapsed] = useState(
        defaultCollapsed ? defaultCollapsed : true
    );

    const animationConfig = {
        height: isCollapsed ? 0 : contentHeight,
        progress: isCollapsed ? 0 : 100,
        rotation: isCollapsed ? `0deg` : `-180deg`,
        // config: config.stiff,
    };

    if (useBezier) {
        animationConfig.config = {
            
            duration: 600,
            easing: t => BezierEasing(0.25, 0, 0, 1)(t),
        };
    }

    const animation = useSpring(animationConfig);
    const AnimatedView = animated(View);

    return (
        <View {...props} style={[styles.card, style]}>
            {/* Card Top */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setCollapsed(c => !c)}
                style={styles.cardTop}>
                <View>{title}
                    
                        <TouchableHighlight style={{ alignItems: 'center' }} onPress={() => setCollapsed(c => !c)}>
                            <View style={{ backgroundColor: 'rgb(0,0,100)', width: 200, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', padding: 20, borderRadius: 25, margin: 5, }}>
                                <AnimatedView style={{ transform: [{ rotate: animation.rotation }] }}>
                                    <Ionicons name='arrow-down-outline' size={20} color={'rgb(218,165,32)'} />
                                </AnimatedView>
                                <Text style={{ color: 'rgb(218,165,32)', fontSize: 20, marginLeft: 10 }}>Details</Text>
                            </View>
                        </TouchableHighlight>
                        
                    
                
                </View>
                
            </TouchableOpacity>

            {/* Card Content */}
            <AnimatedView
                style={[
                    styles.cardContent,
                    {
                        height: animation.height,
                        borderTopWidth: animation.progress.interpolate({
                            range: [0, 25, 50, 75, 100],
                            output: [0, 0, 0, 0, 1],
                        }),
                        opacity: animation.progress.interpolate({
                            range: [0, 85, 95, 100],
                            output: [0, 0, 0.5, 1],
                        }),
                    },
                ]}>
                {/* Inner */}
                <AnimatedView
                    style={{
                        transform: [
                            {
                                translateY: animation.progress.interpolate({
                                    range: [0, 85, 95, 100],
                                    output: [7.5, 5, 2.5, 0],
                                }),
                            },
                        ],
                    }}>
                    {children}
                </AnimatedView>
            </AnimatedView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(0,0,0,0.0)',
        borderRadius: 6,
        justifyContent: 'center',
        
    },
    cardTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    cardContent: {
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.0)',
    },
    rw: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
});

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

export default CollapsibleCard;
