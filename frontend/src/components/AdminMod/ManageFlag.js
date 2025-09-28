import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFlaggedPins,
  getNextFlaggedPins,
  adminDeleteFlaggedPin,
} from "../../actions/pins";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";
function ManageFlag() {
  const [showReport, setshowReport] = useState("");
  const flagLimitNum = 5;
  const flaggedPins = useSelector((state) => state.pins.flaggedPins);
  const dispatch = useDispatch(); // dispatches the action

  useEffect(() => {
    //similar to component did mount
    dispatch(getFlaggedPins());
  }, [dispatch]);
  const toggleReports = (id) => {
    setshowReport((prevshowReport) => ({
      ...showReport,
      [id]: !prevshowReport[id],
    }));
  };

  return (
    <div className={"manage-container"}>
      manage flagged posts
      <div className={"manage-paginate-buttons"}>
        <PrevNext next={flaggedPins.next} previous={flaggedPins.previous} />
      </div>
        {flaggedPins.results && (
          <ListFlags
            pins={flaggedPins.results}
            flagLimit={flagLimitNum}
            toggleReports={toggleReports}
            showReport={showReport}
          />
        )}
      </div>
  );
}

export default ManageFlag;

const PrevNext = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      {props.previous ? (
        <button
          onClick={() => dispatch(getNextFlaggedPins(props.previous))}
          className="btn btn-sm default-btn-purple"
        >
          Previous{" "}
        </button>
      ) : (
        ""
      )}
      {props.next ? (
        <button
          onClick={() => dispatch(getNextFlaggedPins(props.next))}
          className="btn btn-sm default-btn-purple"
        >
          Next
        </button>
      ) : (
        ""
      )}
    </>
  );
};

function ListFlags(props) {
  const dispatch = useDispatch();
  return (
    <Card className={"manage-card"}>
      <table className="table manage-table table-responsive-sm table-responsive-md">
        <thead className="manage-table-head">
          <th>story title</th>
          <th>owner</th>
          <th>number of flags</th>
          <th>action</th>
          <th>reason</th>
          <th>link to story</th>
        </thead>
        <tbody>
          {props.pins.map((pin, index) => {
            if (pin.flagscore >= 0) {
              return (
                <tr key={index}>
                  <td>{pin.title}</td>
                  <td>
                    <strong>
                      {pin.username ? (
                        <Link to={`/users/${pin.username}`}>
                          {pin.username}
                        </Link>
                      ) : (
                        "Anonymous"
                      )}
                    </strong>
                  </td>
                  <td>{pin.flagscore} flags</td>
                  <td>
                    <button
                      onClick={() => dispatch(adminDeleteFlaggedPin(pin.id))}
                      className="btn btn-sm default-btn-purple"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => props.toggleReports(pin.id)}
                      className="btn btn-sm default-btn-purple"
                    >
                      Show Reports
                    </button>
                    {props.showReport[pin.id]
                      ? pin.flaggerstory && (
                          <div className={"manage-reports"}>
                            <StoryReports reports={pin.flaggerstory} />
                          </div>
                        )
                      : null}
                  </td>
                  <td>
                    <Link
                      className="sidebar-story-read-more"
                      to={`/Story/${pin.id}`}
                    >
                      view story
                    </Link>
                  </td>
                </tr>
              );
            } else {
              return "";
            }
          })}
        </tbody>
      </table>
    </Card>
  );
}

const StoryReports = (props) => {
  return (
    <ul>
      {props.reports.length > 0
        ? props.reports.map((report) => {
            return <li key={report.id}>{report.reason}</li>;
          })
        : "none"}
    </ul>
  );
};
