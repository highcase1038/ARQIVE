import React from "react";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import Select from "react-select";
import { ErrorOutline } from "@material-ui/icons";

function AddressSearch({
  setaddPinValues,
  addPinValues,
  handleAddressChange,
}) {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const provider = new OpenStreetMapProvider({
    params: {
      addressdetails: 1, // include additional address detail parts
    },
  });
  const [addressQuery, setAddressQuery] = useState("");
  const [addressQueryResults, setAddressQueryResults] = useState([]);
  const [addressQueryLoading, setAddressQueryLoading] = useState(false);
  const [addressQueryResultsEmpty, setAddressQueryResultsEmpty] = useState(
    false,
  );

  async function validateAddress() {
    setAddressQueryLoading(true);
    let results = await provider.search({ query: addressQuery });
    if (results.length > 0) {
      const mappedResults = results.map((r) => ({
        value: { x: r.x, y: r.y, raw: r.raw },
        label: r.label,
      }));
      // console.log(results);
      // console.log(mappedResults);
      setAddressQueryResults(mappedResults);
      setAddressQueryLoading(false);
      setAddressQuery("");
    } else {
      setAddressQueryResultsEmpty(true);
      setAddressQueryLoading(false);
    }
  }

  return (
    <FormGroup>
      <div>
        <Label className="custom-form-text">
          where did this story happen?
        </Label>
      </div>
      {addressQueryResultsEmpty
        ? (
          <p className="story-form-alerts" style={{ marginBottom: "0px" }}>
            <ErrorOutline /> Hey we couldn't find that, please try again
          </p>
        )
        : (null)}
      {(addPinValues.address.length > 150)
        ? (
          <p className="story-form-alerts">
            <ErrorOutline /> Addresses over 150 characters will be truncated
          </p>
        )
        : (null)}
      <div className="pt-2 pl-2">
        {(addPinValues.address.length > 0)
          ? (
            <div style={{ display: "flex", marginBottom: "4px" }}>
              <div
                style={{
                  display: "block",
                  flex: "0 0 calc(95% - 64px)",
                  // marginRight: "8px",
                }}
              >
                <Label className="custom-form-text">
                  {addPinValues.address}
                </Label>
              </div>
              <Button
                style={{
                  alignSelf: "center",
                  minWidth: "85px",
                  minHeight: "38px",
                }}
                className="btn check-address-btn"
                onClick={() => {
                  setaddPinValues({ ...addPinValues, address: "" });
                  setAddressQuery("");
                  setAddressQueryResults([]);
                }}
              >
                Clear
              </Button>
            </div>
          )
          : (
            <div style={{ display: "flex", marginBottom: "4px" }}>
              <div
                style={{
                  display: "block",
                  flex: "0 0 calc(95% - 100px)",
                  marginRight: "8px",
                }}
              >
                {addressQueryResults.length === 0
                  ? (
                    <Input
                      className="sidebar-input-placeholder"
                      type="text"
                      name="address"
                      value={addressQuery}
                      onChange={(e) => {
                        setAddressQueryResultsEmpty(false);
                        setAddressQuery(e.target.value);
                      }}
                    />
                  )
                  : (
                    <Select
                      // inputValue={addPinValues.address}
                      menuIsOpen={true}
                      placeholder={"Select address"}
                      options={addressQueryResults}
                      onChange={(selectedOption) => {
                      handleAddressChange(selectedOption);
                      setAddressQueryResults([]);
                      }
                      }
                    />
                  )}
              </div>
              {addressQueryResults.length === 0
                ? (
                  <Button
                    style={{
                      alignSelf: "center",
                      minWidth: "85px",
                      minHeight: "38px",
                    }}
                    className="btn check-address-btn"
                    disabled={addressQuery.address === ""}
                    onClick={() => validateAddress()}
                  >
                    {!addressQueryLoading ? <>Check Address</> : (
                      <>
                        <Spinner size="sm" />
                        <span>
                          {" "}Loading
                        </span>
                      </>
                    )}
                  </Button>
                )
                : (
                  <Button
                    style={{
                      alignSelf: "center",
                      minWidth: "85px",
                      minHeight: "38px",
                    }}
                    className="btn check-address-btn"
                    onClick={() => {
                      setAddressQuery("");
                      setAddressQueryResults([]);
                    }}
                  >
                    Clear
                  </Button>
                )}
            </div>
          )}
      </div>
    </FormGroup>
  );
}

export default AddressSearch;
