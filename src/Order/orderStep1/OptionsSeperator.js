import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../OrderStep1.module.css";


const OptionsSeperator = ({props, allowedValues}) => (
        Object.values(props.options).map(option => {
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
                        return <option value={val}>{val}</option>;
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
                let types = [];
                Object.entries(option.values).forEach(([key, val]) => {
                        types = val;
                    }
                );

                optionItems = Object.values(types).map((val) => {
                        return <option value={val.id}>
                            {val.img}
                            {/*<img className={styles.image} src={val.img} />*/}
                        </option>;
                    }
                );
            }

            if(option.id == 'trunkMonkey') {
                optionItems = Object.values(option.values).map((val) => {
                        return <option value={val.id}>
                            {val.img.sm}
                            {/*<img className={styles.image} src={val.img.sm} />*/}
                        </option>;
                    }
                );
            }

            if (option.id.startsWith("num")) {
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

            if(option.id.startsWith(" ")) {
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
                        {option.name}
                        True<input type="radio" name={"true"} value="true"/>
                        False<input type="radio" name={"false"} value="false"/>
                    </div>
                } else {
                    return <div>
                        {option.name}
                        {default_val.toString()}
                    </div>
                }
            }
            else {
                return <div id={option.name}>{option.name}
                    {
                        optionItems != null ?
                            <select>
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