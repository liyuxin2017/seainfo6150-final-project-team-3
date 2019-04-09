import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PowerOptions.module.css'
import OptionsSeperator from "./OptionsSeperator";


class PowerOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);

        this.allowedValues = [
            'engine',
            'hoodOrnament',
            'hasHoodOrnament',
            'spareTire',
            'numExhausts',
        ];
    }
    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanel(e)} className={styles.header}>Power Options</div>
                {
                    this.state.open ? (
                        <div className={styles.content}>
                            {
                                <OptionsSeperator props={this.props} allowedValues={this.allowedValues}/>
                            }
                        </div>
                        ) :
                        null
                }
            </div>)
    }
}

PowerOptions.propTypes = {
    selectedProduct: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
};

export default PowerOptions;