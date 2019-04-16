import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PowerOptions.module.css'
import OptionsSeperator from "./OptionsSeperator";


class InteriorOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);

        this.allowedValues = [
            'floormatsColor',
            'hasAirConditioning',
            'numCigaretteLighters',
            'numCupholders',
            'hasCupholders',
            'hasGloveBox',
            'radioType',
            'hasRadio',
            'hasGPS',
            'hubcapsMaterial',
            'dashboardLightsColor',
            'dashboardColor',
            'interiorFabricColor',
            'numSeats',
        ];
    }
    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanel(e)} className={styles.header}>Interior Options</div>
                {
                    this.state.open ? (
                            <div className={styles.content}>
                                {
                                    <OptionsSeperator
                                        options={this.props.options}
                                        allowedValues={this.allowedValues}
                                        selectedProduct={this.props.selectedProduct}
                                        selectedOptions={this.props.selectedOptions}
                                        setProductOption={this.props.setProductOption}/>
                                }
                            </div>
                        ) :
                        null
                }
            </div>)
    }
}

InteriorOptions.propTypes = {
    selectedProduct: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    selectedOptions: PropTypes.object.isRequired,
    setProductOption: PropTypes.func.isRequired
};

export default InteriorOptions;