import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./OptionsSeperator.module.css";

class Seperator extends Component {
    /*constructor(props) {
        super(props);
    }*/

    checkIfOptionAllowed(option) {
        if(this.props.allowedValues.indexOf(option.id) !== -1) {
            return true;
        }
        return false;
    }

    getColorOptions(option) {
        const colorDisplay = (color) => ({
            backgroundColor: color,
            color: color
        });

        if (!option.id.startsWith("num") &&
            !option.id.startsWith("has") &&
            option.id.toLowerCase().endsWith("color")) {
            let colors = ["white", "black", "silver", "grey"];
            if (option.requirements) {
                Object.entries(option.requirements).forEach(([key, val]) => {
                    if (key === this.props.selectedProduct) {
                        colors = [val];
                    }
                });
            }
            let optionItems = [];
            optionItems.push(<option key={option.id+"null"} value={null}>No Preference</option>);
            for (let i = 0; i<colors.length; i++ ) {
                optionItems.push(<option key={option.id+colors[i]} value={colors[i]} style={colorDisplay(colors[i])}>{colors[i]}</option>);
            }
            return optionItems;
        }
        return null;
    }

    getHoodOrnaments(option) {
        if (option.id === 'hoodOrnament' && this.props.selectedOptions['hasHoodOrnament']) {
            let optionItems = [];
            Object.values(option.values).forEach((val) => {
                optionItems.push(<div className={styles.option_image} key={"uni"+val.id}
                                      value={val}>
                    <td><input type="checkbox"
                           name={option.name}
                           value={val.id}
                               className={styles.input_box}
                           onChange={this.props.setProductOption.bind(null, option.id)}
                               checked={this.props.selectedOptions['hoodOrnament'] === val.id}/>
                    <img className={styles.option_image}
                         src={val.img}
                         alt={val.id}/>
                    </td>
                </div>);
            });
            return optionItems;
        }
        return null;
    }

    getTruckMonkey(option) {
        if (option.id === 'trunkMonkey' && this.props.selectedOptions['hasTrunkMonkey']) {
            let optionItems = [];
            Object.values(option.values).forEach((val) => {
                optionItems.push(<div className={styles.option_image}
                                     key={"sam"+val.id}
                                      value={val}>
                    <td>
                        <input type="checkbox"
                           name={option.name}
                           value={val.id}
                                   className={styles.input_box}
                           onChange={this.props.setProductOption.bind(null, option.id)}
                                   checked={this.props.selectedOptions['trunkMonkey'] === val.id}/>
                        <img className={styles.option_image}
                         src={val.img.sm}
                             alt={val.id}/></td>
                </div>);

            });
            return optionItems;
        }
        return null;
    }

    getRadioTypeOptions(option) {
        /*console.log("Setting radio type");
        console.log(this.props.selectedOptions['hasRadio']);
        console.log(option.id);*/
        if (option.id === 'radioType') {
           /* console.log("Inside Set radio");*/
            let types = ["basic", "medium", "fancy"];
            Object.entries(option.values).forEach(([key, val]) => {
                    types = val;
                }
            );
            let optionItems = [];
            optionItems.push(<option value={null}>No Preference</option>);
            for (let i = 0; i<types.length; i++ ) {
                optionItems.push(<option value={types[i]}>{types[i]}</option>);
            }
            return optionItems;
        }
        return null;
    }

    getNumberOrMonogram(option) {
        if (option.id.startsWith("num") || option.id === "monogram") {
            let minNumber = 1;
            let maxNumber = 10;
            if (option.minimumNum) {
                minNumber = option.minimumNum;
            }

            if (option.maximumNum) {
                maxNumber = option.maximumNum;
            }

            if (option.requirements) {
                Object.entries(option.requirements).forEach(([key, val]) => {
                    if (key === 'maximumNum') {
                        maxNumber = val;
                    }
                    if (key === 'minimumNum') {
                        minNumber = val;
                    }
                });
                Object.entries(option.requirements).forEach(([key, val]) => {
                    if (key === this.props.selectedProduct) {
                        minNumber = val;
                        maxNumber = val;
                    }
                });
            }

            let optionItems = [];
            optionItems.push(<option key={option.id+"null"} value={null}>No Preference</option>);
            for (let i = minNumber; i <= maxNumber; i++) {
                optionItems.push(<option key={option.id+i} value={i}>{i}</option>);
            }

            return optionItems;
        }

        return null;
    }

    formRadioButtons(option) {
        if (option.id.startsWith("has")) {
            let radio_flag = true;
            let default_val = null;
            if (option.requirements) {
                Object.entries(option.requirements).forEach(([key, val]) => {
                    if (key === this.props.selectedProduct) {
                        radio_flag = false;
                        default_val = val;
                    }
                });
            }
            if (radio_flag) {
                return <div>
                    <table>
                        <tbody>
                        <tr>
                            <td> <p className={styles.main_text +" " + styles.check_box_input}>{option.name} </p>
                            </td>
                             <td>   <input type="checkbox" name={option.name} value={option.name}
                                           className={styles.input_box}
                                       onChange={this.props.setProductOption.bind(null, option.id)}
                                       checked={this.props.selectedOptions[option.id]}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            } else {
                return <div key={this.getRandom()}>
                    <table>
                        <tbody>
                        <tr>
                    <td><p className={styles.main_text +" " + styles.check_box_input}>{option.name}</p></td>
                    <td><input type="checkbox" name={option.name} value={option.name}
                               className={styles.input_box}
                           onClick={this.props.setProductOption.bind(null, option.id)}
                               checked={default_val} disabled={true}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
        }
        return null;
    }

    formImageOptions(option) {
        let optionItems = this.getTruckMonkey(option);
        if(optionItems == null) {
            optionItems = this.getHoodOrnaments(option);
        }
        if(optionItems != null) {
            return <div key={this.getRandom()}>
                <table>
                    <tbody>
                    <tr><td>{option.name}</td></tr>
                    <tr>{optionItems}</tr>
                    </tbody>
                </table>
            </div>;
        }
        return null;
    }

    getRandom() {
        const min = 1;
        const max = 100000;
        const rand = min + Math.random() * (max - min);
        return rand;
    }

    formAllOtherOptions(option) {

        if (option.id.startsWith("has") ||
            option.id === 'trunkMonkey' ||
            option.id === 'hoodOrnament' ) {
            return null;
        }

        if(option.id === 'radioType' && !this.props.selectedOptions['hasRadio']) {
            return  null;
        }

        if(option.id === 'numCupholders' && !this.props.selectedOptions['hasCupholders']) {
            return  null;
        }
        if(option.id === 'monogram' && !this.props.selectedOptions['hasMonogrammedSteeringWheelCover']) {
            return  null;
        }

        let optionItems = this.getColorOptions(option);

        if(optionItems == null) {
            optionItems = this.getRadioTypeOptions(option);
        }

        if(optionItems == null) {
            optionItems = this.getNumberOrMonogram(option);
        }

        if (optionItems == null && option.values !== undefined) {
            optionItems = [];
            optionItems.push(<option key={option.id+"null"} value={null}>No Preference</option>);
            for (let i = 0; i<option.values.length; i++ ) {
                optionItems.push(<option key={option.id+option.values[i]} value={option.values[i]}>{option.values[i]}</option>);
            }
        }

        if(optionItems != null) {
            return <div id={option.name + " "+ styles.responsive}>
                <table>
                <tbody>
                <tr>
                    <td className={styles.main_text}>{option.name}</td>
                </tr>
                {
                    optionItems != null ?
                        <tr><td><select className={styles.select_width}
                                        key={this.getRandom()}
                                defaultValue="None"
                                onChange={this.props.setProductOption.bind(null, option.id)}>
                            {optionItems}
                        </select>
                        </td>
                        </tr>
                        : null
                }
                </tbody>
                </table>
            </div>

        }
        return null;
    }

    getOptions() {
        return Object.values(this.props.options).map(option => {
            if(!this.checkIfOptionAllowed(option)) {
                return false;
            }
            let return_val = this.formRadioButtons(option);
            if(return_val == null){
                return_val = this.formImageOptions(option);
            }
            if(return_val == null) {
                return_val = this.formAllOtherOptions(option);
            }
            return return_val;
        });
    }

    render() {
        return this.getOptions();
    }
}

Seperator.propTypes = {
    selectedProduct: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    allowedValues: PropTypes.array.isRequired,
    setProductOption: PropTypes.func.isRequired,
    selectedOptions: PropTypes.object.isRequired,
};

export default Seperator;