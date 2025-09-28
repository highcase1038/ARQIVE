import React, {useState} from "react";

export default function CustomSelector( options, selectorFunction, selectedValue ) {
        const [isSelected, setIsSelected] = useState(selectorOptions.map((option) => { return false; }));

        const SelectorButton = ({ option, isSelected, setIsSelected }) => {

            const selectionIndex = (option.value - 1)
            const borderStyle = option.color + " solid 1px";
            const backgroundStyle = option.color;
            // const selectedStyle = {
            //     marginLeft: "5px",
            //     marginRight: "5px",
            //     border: borderStyle,
            //     padding: "5px",
            //     borderRadius: "8px",
            //     fontSize: ".65rem",
            //     fontWeight: "600",
            //     backgroundColor: backgroundStyle,
            //     color: "white",
            //
            // };
            // const deselectedStyle = {
            //     marginLeft: "5px",
            //     marginRight: "5px",
            //     border: borderStyle,
            //     backgroundColor: "transparent",
            //     padding: "5px",
            //     borderRadius: "8px",
            //     fontSize: ".65rem",
            //     fontWeight: "600",
            //
            // };
            //

            const [styles, setStyles] = useState(deselectedStyle)

            // let styles = deselectedStyle;


            const handleClick = () => {
                const nextSelected = isSelected.map((element, i) => {
                    if (i === selectionIndex) {
                        return !element;
                    } else {
                        return false;
                    }
                }
                )
                setIsSelected(nextSelected);
                setStyles(selectedStyle);
            }

            return (
                <>
                    {(isSelected[selectionIndex]) ?
                        (<span
                            key={option.value}
                            onClick={() => {
                                handleClick();
                            }}
                            style={selectedStyle} >
                            {option.label}
                        </span >
                        ) :
                        (<span
                            key={option.value}
                            onClick={() => handleClick()}
                            onMouseEnter={() => setStyles(selectedStyle)}
                            onMouseLeave={() => setStyles(deselectedStyle)}
                            style={styles} >
                            {option.label}
                        </span >
                        )
                    }
                </>
            )

        }

        return (
            selectorOptions.map((option) => {
                return (
                    <SelectorButton
                        key={option.label}
                        isSelected={isSelected}
                        option={option}
                        setIsSelected={setIsSelected} />
                )
            })

        )

    }
