import React from 'react';
import PropTypes from 'prop-types';
import styles from "./OptionsSeperator.module.css";

class OptionsSeperator extends React.Component {
    constructor(props) {
        super(props);
    }

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
            optionItems.push(<option value={null}>No Preference</option>);
            for (let i = 0; i<colors.length; i++ ) {
                optionItems.push(<option value={colors[i]}>{colors[i]}</option>);
            }
            return optionItems;
        }
        return null;
    }

    getHoodOrnaments(option) {
        if (option.id === 'hoodOrnament' && this.props.selectedOptions['hasHoodOrnament']) {
            let optionItems = [];
            Object.values(option.values).forEach((val) => {
                optionItems.push(<div className={styles.option_image}
                                      value={val}>
                    <td><input type="checkbox"
                           name={option.name}
                           value={val.id}
                           onChange={this.props.setProductOption.bind(null, option.id)}
                               checked={this.props.selectedOptions['hoodOrnament'] === val.id}/>
                    <img className={styles.option_image}
                         src={val.img}
                         alt={val.id}/></td>
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
                                      value={val}>
                        <td><input type="checkbox"
                           name={option.name}
                           value={val.id}
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
        console.log("Setting radio type");
        console.log(this.props.selectedOptions['hasRadio']);
        console.log(option.id);
        if (option.id === 'radioType') {
            console.log("Inside Set radio");
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
            optionItems.push(<option value={null}>No Preference</option>);
            for (let i = minNumber; i <= maxNumber; i++) {
                optionItems.push(<option value={i}>{i}</option>);
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
                return <div className={styles.linespace}>
                    <table>
                        <tr>
                            <td> <p className={styles.main_text +" " + styles.check_box_input}>{option.name} </p>
                            </td>
                             <td>   <input type="checkbox" name={option.name} value={option.name}
                                       onClick={this.props.setProductOption.bind(null, option.id)}
                                       checked={this.props.selectedOptions['option.name']}/>
                            </td>
                        </tr>
                    </table>
                </div>
            } else {
                return <div>
                    <table>
                        <tr>
                    <td><p className={styles.main_text +" " + styles.check_box_input}>{option.name}</p></td>
                    <td><input type="checkbox" name={option.name} value={option.name}
                           onClick={this.props.setProductOption.bind(null, option.id)}
                               checked={default_val} disabled={true}/></td>
                        </tr>
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
            return <div className={styles.linespace}>
                <table>
                    <tr><p className={styles.main_text}>{option.name}</p></tr>
                    <tr>{optionItems}</tr>
                </table>
            </div>;
        }
        return null;
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
            optionItems.push(<option value={null}>No Preference</option>);
            for (let i = 0; i<option.values.length; i++ ) {
                optionItems.push(<option value={option.values[i]}>{option.values[i]}</option>);
            }
        }

        if(optionItems != null) {
            return <div id={option.name}>
                <table>
                <tr>
                    <p className={styles.main_text + " " + styles.linespace}>{option.name} </p></tr>
                {
                    optionItems != null ?
                        <tr><select className={styles.select_width}
                                defaultValue="None"
                                onChange={this.props.setProductOption.bind(null, option.id)}>
                            {optionItems}
                        </select>
                        </tr>
                        : null
                }
                </table>
            </div>

        }
        return null;
    }

    getOptions() {
        console.log("Ssd");
        console.log(this.props.selectedOptions);
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

OptionsSeperator.propTypes = {
    selectedProduct: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    allowedValues: PropTypes.array.isRequired,
    setProductOption: PropTypes.func.isRequired,
    selectedOptions: PropTypes.object.isRequired,
};

export default OptionsSeperator;