import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PowerOptions.module.css'
import OptionsSeperator from "./OptionsSeperator";


class ExteriorOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.togglePanelExteior = this.togglePanelExteior.bind(this);
        this.togglePanelInterior = this.togglePanelInterior.bind(this);
        this.togglePanelPower = this.togglePanelPower.bind(this);
        this.togglePanelPremium = this.togglePanelPremium.bind(this);

        this.exteriorAllowedValues = [
            'monogram',
            'hasMonogrammedSteeringWheelCover',
            'hasGloveBox',
            'hasTintedWindows',
            'color',
        ];

        this.interiorAllowedValues = [
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

        this.powerAllowedValues = [
            'engine',
            'spareTire',
            'numExhausts',
        ];

        this.premiumAllowedValues = [
            'trunkMonkey',
            'hasTrunkMonkey',
            'hoodOrnament',
            'hasHoodOrnament',

        ];
    }
    togglePanelExteior(e){
        if(this.state.value === 1) {
            this.setState({value: 0});
        } else {
            this.setState({value: 1});
        }
    }

    togglePanelInterior(e){
        if(this.state.value === 2) {
            this.setState({value: 0});
        } else {
            this.setState({value: 2});
        }
    }

    togglePanelPower(e){
        if(this.state.value === 3) {
            this.setState({value: 0});
        } else {
            this.setState({value: 3});
        }
    }

    togglePanelPremium(e){
        if(this.state.value === 4) {
            this.setState({value: 0});
        } else {
            this.setState({value: 4});
        }
    }

    getExterior() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelExteior(e)} className={styles.header}>Exterior Options</div>
                {
                    this.state.value === 1 ? (
                            <div className={styles.content}>
                                {
                                    <OptionsSeperator
                                        options={this.props.options}
                                        allowedValues={this.exteriorAllowedValues}
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

    getInterior() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelInterior(e)} className={styles.header}>Interior Options</div>
                {
                    this.state.value === 2 ? (
                            <div className={styles.content}>
                                {
                                    <OptionsSeperator
                                        options={this.props.options}
                                        allowedValues={this.interiorAllowedValues}
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

    getPower() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelPower(e)} className={styles.header}>Power Options</div>
                {
                    this.state.value === 3 ? (
                            <div className={styles.content}>
                                {
                                    <OptionsSeperator
                                        options={this.props.options}
                                        allowedValues={this.powerAllowedValues}
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

    getPremium() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelPremium(e)} className={styles.header}>Premium Options</div>
                {
                    this.state.value === 4 ? (
                            <div className={styles.content}>
                                {
                                    <OptionsSeperator
                                        options={this.props.options}
                                        allowedValues={this.premiumAllowedValues}
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

    render() {
        console.log("Inside main ");
        console.log(this.state);
        return <div className={styles["top-panel"] +" " + styles.main_div}>
            {this.getExterior()}
            {this.getInterior()}
            {this.getPower()}
            {this.getPremium()}
        </div>
    }
}

ExteriorOptions.propTypes = {
    selectedProduct: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    selectedOptions: PropTypes.object.isRequired,
    setProductOption: PropTypes.func.isRequired
};

export default ExteriorOptions;