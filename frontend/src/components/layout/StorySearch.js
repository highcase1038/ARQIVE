import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPins } from "../../actions/pins";
import Select, { components } from "react-select";
import DatePicker from "react-date-picker";
import Slider from "@material-ui/core/Slider";
import { Form, Input, Label } from "reactstrap";
import moment from "moment";
import { getPins } from "../../actions/pins";
import StorySearchResults from "./StorySearchResults";
const options = [
  { value: "1", label: "Personal" },
  { value: "2", label: "Resources" },
  { value: "3", label: "Historical" },
];

const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "#fff" }),
  valueContainer: (styles, { data }) => ({
    ...styles,
    padding: "2px 2px",
  }),

  multiValue: (styles, { data }) => {
    const category = data.value;
    let color = "white";
    if (category === "1") {
      color = "#e01783";
    } else if (category === "2") {
      color = "#00ce7d";
    } else {
      color = "#248dc1";
    }
    return {
      ...styles,
      backgroundColor: color,
      color: "white",
      letterSpacing: "0px",
      fontFamily: "Eina, Arial",
      textTransform: "lowercase",
      borderRadius: "8px",
      fontWeight: "800",
      // padding: "2px 4px",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    display: "none",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    padding: "2px 8px",
    borderRadius: "8px",
  }),
};

const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      {props.data.label}
    </components.MultiValueRemove>
  );
};

function StorySearch(props) {
  const dispatch = useDispatch();
  const pinData = useSelector((state) => state.pins.pins);
  const minPinDate = useSelector((state) => state.pins.pinMinDate);
  const maxPinDate = useSelector((state) => state.pins.pinMaxDate);

  const dateRangeDefault = {
    start: minPinDate,
    end: maxPinDate,
    first: Number(moment(minPinDate).format("YYYY")),
    last: Number(moment(maxPinDate).format("YYYY")),
  };
  const [prevSearchTerms, setPrevSearchTerms] = useState({
    searchText: "",
    selectedCategories: options,
    dateRange: null,
  });

  const StorySearchForm = () => {
    const { maxPinDate, minPinDate } = props;
    const [searchText, setSearchText] = useState(
      prevSearchTerms.searchText ? prevSearchTerms.searchText : "",
    );
    const [selectedCategories, setSelectedCategories] = useState(
      prevSearchTerms.selectedCategories
        ? prevSearchTerms.selectedCategories
        : options,
    );
    const [dateRange, setDateRange] = useState(
      prevSearchTerms.dateRange !== null
        ? prevSearchTerms.dateRange
        : dateRangeDefault,
    );
    const submitSearch = (e) => {
      e.preventDefault(); //prevents refresh of page
      const start = moment(dateRange.start).format("YYYY-MM-DD");
      const end = moment(dateRange.end).format("YYYY-MM-DD");

      let categorySearchQuery = "";
      if (selectedCategories === null) {
        setSelectedCategories(options);
      } else {
        for (const [index, value] of selectedCategories.entries()) {
          if (index < selectedCategories.length - 1) {
            categorySearchQuery += value.value + ",";
          } else {
            categorySearchQuery += value.value;
          }
        }
      }

      setPrevSearchTerms({
        searchText: searchText,
        selectedCategories: selectedCategories,
        dateRange: dateRange,
      });
      dispatch(searchPins(searchText, categorySearchQuery, start, end));
    };

    const clearFilters = () => {
      setSelectedCategories(options);
      setSearchText("");
      setDateRange({
        first: Number(moment(minPinDate).format("YYYY")),
        last: Number(moment(maxPinDate).format("YYYY")),
        start: minPinDate,
        end: maxPinDate,
      });

      setPrevSearchTerms({
        searchText: "",
        selectedCategories: options,
        dateRange: dateRangeDefault,
      });
      dispatch(getPins());
    };

    function valuetext(value) {
      return value;
    }

    return (
      <>
        <div style={{ marginTop: "10px", padding: "5px" }}>
          <Form noValidate={true}>
            <div>
              <Label className="custom-form-text">Search:</Label>
              <Input
                className="form-control sidebar-input-placeholder"
                id="searchForm"
                label="Search"
                placeholder={"name of stories, location, tags, etc."}
                name={"searchText"}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </div>
            <div>
              <Label className="custom-form-text">Category:</Label>
              <Select
                components={{ MultiValueRemove }}
                isMulti
                // Disable Input (text) based search
                // On mobile this causes the input field to focus 
                // and the keyboard to pop up
                isSearchable={false}
                isClearable={false}
                defaultValue={options}
                value={selectedCategories}
                onChange={(categories) => setSelectedCategories(categories)}
                options={options}
                styles={colorStyles}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "1.15rem",
                flexWrap: "wrap",
              }}
            >
              <Label
                style={{ marginRight: "10px" }}
                className="custom-form-text"
                for="dateRange"
              >
                date range:
              </Label>
              <div
                style={{ display: "flex" }}
              >
                <DatePicker
                  value={dateRange.start}
                  minDate={minPinDate}
                  maxDate={dateRange.end}
                  onChange={(sdate) => {
                    setDateRange({
                      ...dateRange,
                      first: Number(moment(sdate).format("YYYY")),
                      start: sdate,
                    });
                  }}
                  format={"MM/dd/yyyy"}
                  clearIcon={null}
                />
                <Label>&nbsp;</Label>
                <DatePicker
                  minDate={dateRange.start}
                  maxDate={maxPinDate}
                  value={dateRange.end}
                  onChange={(date) => {
                    setDateRange({
                      ...dateRange,
                      last: Number(moment(date).format("YYYY")),
                      end: date,
                    });
                  }}
                  format={"MM/dd/yyyy"}
                  clearIcon={null}
                />
              </div>
            </div>
            <div
              style={{ margin: "0 1rem 0 1rem" }}
            >
              <Slider
                style={{ marginTop: "1rem", paddingBottom: "0px" }}
                min={Number(moment(minPinDate).format("YYYY"))}
                max={Number(moment(maxPinDate).format("YYYY"))}
                value={[dateRange.first, dateRange.last]}
                defaultValue={[dateRange.first, dateRange.last]}
                valueLabelDisplay="auto"
                onChange={(event, newValue) => {
                  event.stopPropagation();
                  setDateRange({
                    first: newValue[0],
                    last: newValue[1],

                    start: new Date(
                      moment(dateRange.start).set("year", newValue[0]),
                    ),
                    end: new Date(
                      moment(dateRange.end).set("year", newValue[1]),
                    ),
                  });
                }}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
              <div className="search-bar-btn-group">
                <span>{(dateRange.first) ? dateRange.first : <br />}</span>
                <span>{(dateRange.last) ? dateRange.last : <br />}</span>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }} className="search-bar-btn-group">
              <button
                type="button"
                className="search-bar-btn"
                onClick={() => clearFilters()}
              >
                clear
              </button>
              <button
                type="submit"
                className="search-bar-btn"
                onClick={(e) => {
                  submitSearch(e);
                }}
              >
                apply
              </button>
            </div>
          </Form>
        </div>
      </>
    );
  };

  return (
    <>
      <StorySearchForm
        pinData={pinData}
      />
      <StorySearchResults
        loginToggle={props.loginToggle}
        pinData={pinData}
        maplink={props.maplink}
        centerMarker={props.centerMarker}
        isMobile={props.isMobile}
        handleCloseSidebar={props.handleCloseSidebar}
      />
    </>
  );
}
export default StorySearch;
