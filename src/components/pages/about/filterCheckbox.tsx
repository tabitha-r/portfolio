import React from 'react';

// Import required store functions
import { selectDarkMode, selectFilter, addFilter, useAppDispatch, useAppSelector } from '../../../store';

// Define prop types
interface CheckboxProps {
    name: string,
    id: string,
}

function FilterCheckbox(props: CheckboxProps) {
    // Make store data and Redux hoosk available to component
    const selectedFilters = useAppSelector(selectFilter);
    const darkMode = useAppSelector(selectDarkMode);
    const dispatch = useAppDispatch();

    // Check if the current tag is already in the filter list
    // If it is, the checkbox is returned with the 'checked' attribute
    // ClassName attribute checks for darkMode to apply correct styling
    if (selectedFilters.includes(props.id)) {
        return (
            <div className="filter-checkbox">
                <input
                    type="checkbox"
                    id={props.id}
                    name={props.id}
                    onChange={() => dispatch(addFilter(props.id))}
                    className={darkMode ? "theme--dark" : "theme--light"}
                    checked
                />
                <label htmlFor={props.id}>{props.name}</label>
            </div>
        )
    }
    // If the tag is not in the filter list, the checkbox is returned without the 'checked' attribute
    return (
        <div className="filter-checkbox">
            <input
                type="checkbox"
                id={props.id}
                name={props.id}
                onChange={() => dispatch(addFilter(props.id))}
                className={darkMode ? "theme--dark" : "theme--light"}
            />
            <label htmlFor={props.id}>{props.name}</label>
        </div>
    )
};

export default FilterCheckbox;