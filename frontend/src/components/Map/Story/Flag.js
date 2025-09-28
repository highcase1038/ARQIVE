import React from "react";

import { userUnFlagPin } from "../../../actions/pins";
import { useDispatch } from "react-redux";
import FlagIcon from "../../images/the_arqive_flag.png";
import FlaggedIcon from "../../images/the_arqive_flag_red.png";

function Flag(props) {
  const dispatch = useDispatch();

  const flagid = props.pin.userFlaggedBefore
    ? props.pin.flaggerstory.filter((a) => a.flagger === props.user.id)[0].id
    : 0;
  return (
    <div style={props.style}>
      {props.pin.userFlaggedBefore
        ? (
            <img
              style={{ width: "22px", height: "auto"}}
              onClick={() => dispatch(userUnFlagPin(flagid, props.pin.flagState))}
              type="submit"
              src={props.pin.flagState ? FlaggedIcon : FlagIcon}
            />
        )
        : (
            <img
              style={{ width: "22px", height: "auto"}}
              onClick={() => props.flagToggle(props.pin.id)}
              type="submit"
              src={FlagIcon}
            />
        )}
    </div>
  );
}

export default Flag;
