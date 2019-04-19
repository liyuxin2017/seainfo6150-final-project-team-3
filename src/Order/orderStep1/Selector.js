import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PowerOptions.module.css'
import Seperator from "./Seperator";


class Selector extends Component {
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

    getContent(allowedValues) {
       return (
            <div className={styles.content} key={this.getRandom()}>
                {
                    /* eslint-disable */
                    <Seperator
                        key = {this.getRandom()}
                        options={this.props.options}
                        allowedValues={allowedValues}
                        selectedProduct={this.props.selectedProduct}
                        selectedOptions={this.props.selectedOptions}
                        setProductOption={this.props.setProductOption}/>
                }
            </div>
        )
    }

    getExterior() {
        return <div key={this.getRandom()}>
                <div key={this.getRandom()} onClick={(e)=>this.togglePanelExteior(e)} className={styles.header}>Exterior Options</div>
                {
                    this.state.value === 1 ? this.getContent(this.exteriorAllowedValues) : null
                }
            </div>
    }

    getInterior() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelInterior(e)} className={styles.header}>Interior Options</div>
                {
                    this.state.value === 2 ? this.getContent(this.interiorAllowedValues) : null
                }
            </div>)
    }

    getPower() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelPower(e)} className={styles.header}>Power Options</div>
                {
                    this.state.value === 3 ? this.getContent(this.powerAllowedValues) : null
                }
            </div>)
    }

    getRandom() {
        const min = 1;
        const max = 100000;
        const rand = min + Math.random() * (max - min);
        return rand;
    }

    getPremium() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanelPremium(e)} className={styles.header}>Premium Options</div>
                {
                    this.state.value === 4 ? this.getContent(this.premiumAllowedValues) : null
                }
            </div>)
    }

    render() {
        return <div key={this.getRandom()} className={styles["top-panel"] +" " + styles.main_div}>
            {this.getExterior()}
            {this.getInterior()}
            {this.getPower()}
            {this.getPremium()}
        </div>
    }
}

Selector.propTypes = {
    selectedProduct: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    selectedOptions: PropTypes.object.isRequired,
    setProductOption: PropTypes.func.isRequired
};

export default Selector;