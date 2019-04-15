import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "./OptionsSeperator.module.css";


const OptionsSeperator = ({props, allowedValues}) => (
        Object.values(props.options).map(option => {
            const colorDisplay = (color) => ({
                backgroundColor: color,
                color: color
            });
            let booleanHasImage = false;
        if(allowedValues.indexOf(option.id) !== -1) {
            let optionItems = null;
            if(option.values) {
                optionItems = Object.values(option.values).map((val) => {
                        return <option value={val}>{val}</option>;
                    }
                );
            }
            if(!option.id.startsWith("num") &&
                !option.id.startsWith("has") &&
                option.id.toLowerCase().endsWith("color")) {
                let colors = ["white", "black", "silver" , "grey"];
                if(option.requirements) {
                    Object.entries(option.requirements).forEach(([key, val]) => {
                        if(key == props.selectedProduct) {
                            colors = [val];
                        }
                    });
                }
                optionItems = Object.values(colors).map((val) => {
                    console.log("Setting color");
                    console.log(val);
                        return <option value={val} style={colorDisplay(val)}>
                            {val}
                            </option>;
                    }
                );
            }

            if(option.id == 'radioType') {
                let types = ["basic","medium","fancy"];
                Object.entries(option.values).forEach(([key, val]) => {
                        types = val;
                    }
                );
                optionItems = Object.values(types).map((val) => {
                        return <option value={val}>{val}</option>;
                    }
                );
            }

            if(option.id == 'hoodOrnament') {
                booleanHasImage = true;
                optionItems = Object.values(option.values).map((val) => {
                        return <div className={styles.option_image}>
                            <img className={styles.option_image} src={val.img} alt={val.id} />
                        </div>;
                    }
                );
            }

            if(option.id == 'trunkMonkey') {
                booleanHasImage = true;
                optionItems = Object.values(option.values).map((val) => {
                    return <div className={styles.option_image}>
                            <img className={styles.option_image} src={val.img.sm} alt={val.id} />
                        </div>;
                    }
                );
            }

            if (option.id.startsWith("num") || option.id == "monogram") {
                let minNumber = 1;
                let maxNumber = 10;
                if(option.minimumNum) {
                    minNumber = option.minimumNum;
                }

                if(option.maximumNum) {
                    maxNumber = option.maximumNum;
                }

                if(option.requirements) {
                    Object.entries(option.requirements).forEach(([key, val]) => {
                        if(key == 'maximumNum') {
                            maxNumber =  val;
                        }
                        if(key == 'minimumNum') {
                            minNumber =  val;
                        }
                    });
                    Object.entries(option.requirements).forEach(([key, val]) => {
                        if(key == props.selectedProduct) {
                            minNumber =  val;
                            maxNumber = val;
                        }
                    });
                }

                optionItems = []
                for (let i = minNumber; i <= maxNumber; i++) {
                    optionItems.push(<option value={i}>{i}</option>);
                }
            }

            if(option.id.startsWith("has")) {
                let radio_flag = true;
                let default_val = null;
                if(option.requirements) {
                    Object.entries(option.requirements).forEach(([key, val]) => {
                        if(key == props.selectedProduct) {
                            radio_flag = false;
                            default_val = val;
                        }
                    });
                }
                if(radio_flag) {
                    return <div>
                        <p className={styles.main_text}>{option.name} </p>
                        <input type="radio" name={option.name} value={option.name+"true"} checked/> True
                        <input type="radio" name={option.name} value={option.name+"false"}/> False
                    </div>
                } else {
                    return <div>
                        <p className={styles.main_text}>{option.name}</p>
                        {default_val.toString()}
                    </div>
                }
            } else if (booleanHasImage) {
                return <div>
                    <p className={styles.main_text}>{option.name}</p>
                    {optionItems}
                    </div>;
            }
            else {
                return <div id={option.name} > <p className={styles.main_text}>{option.name} </p>
                    {
                        optionItems != null ?
                            <select className={styles.select_width}>
                                {optionItems}
                            </select>
                            : null
                    }
                </div>
            }
        } else {
            return null;
        }
    })
);

OptionsSeperator.propTypes = {
    allowedValues: PropTypes.array.isRequired,
    props: PropTypes.object.isRequired,
};

export default OptionsSeperator;