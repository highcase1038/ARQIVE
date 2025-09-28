import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from "@tinymce/tinymce-react";
import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editPin } from "../../actions/pins";
import { useRef, useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutlineSharp";
import AddressSearch from "../common/AddressSearch";

const TinyMCE_Key = process.env.REACT_APP_TINY_MCE_KEY;

function EditStory(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  const [errorModal, setErrorModal] = useState(false);
  
  const toggleErrorModal = () => {
    setErrorModal(() => !errorModal);
  };

  const editorRef = useRef(null);

  const [addPinValues, setaddPinValues] = useState({
    // ...props.pinData,
    category: props.pinData.category,
    latitude: parseFloat(props.pinData.latitude),
    longitude: parseFloat(props.pinData.longitude),
    startDate: new Date(props.pinData.startDate),
    endDate: new Date(props.pinData.endDate),
    // anonradius: 1,
    address: props.pinData.address,
    locality: props.pinData.locality,
    region: props.pinData.region,
    country: props.pinData.country,
    postCode: props.pinData.postCode,
    title: props.pinData.title,
    description: props.pinData.description,
    lastEditDate: new Date(),
    lastPersonEdit: user.id,
    owner: user.id,
    is_anonymous_pin: props.pinData.is_anonymous_pin,
  });

  const setCategory = (nextCategory) => {
    setaddPinValues({ ...addPinValues, category: nextCategory });
  };
  const handleAddressChange = (selectedOption) => {
    setaddPinValues({
      ...addPinValues,
      address: selectedOption.value.raw.display_name,
      latitude: Number(selectedOption.value.y),
      longitude: Number(selectedOption.value.x),
    });
 
    props.centerMarker({
      latitude: selectedOption.value.y,
      longitude: selectedOption.value.x,
    });
  };

  const categoryOptions = [
    { value: 1, label: "personal", color: "rgb(224, 23, 131)" },
    { value: 2, label: "resources", color: "rgb(0, 206, 125)" },
    { value: 3, label: "historical", color: "rgb(36, 141, 193)" },
  ];

  const setAnon = (nextAnon) => {
    setaddPinValues({ ...addPinValues, is_anonymous_pin: nextAnon });
  };

  const anonymousOptions = [
    { value: false, label: "no", color: "#e63f52" },
    { value: true, label: "yes", color: "#07cf81" },
  ];

  const submitEditPin = (e) => {
    e.preventDefault();
    if (
      addPinValues.title && addPinValues.description && addPinValues.latitude &&
      addPinValues.longitude && addPinValues.address
    ) {
      dispatch(editPin(addPinValues, props.pinData.id));
      props.setEditStory(false);
    } else {
      setErrorModal(true);
    }
  };

  return (
    <div>
      <Form className="custom-form-text">
        <FormGroup>
          <Label className="custom-form-text" for="title">
            What's the name of this story?
          </Label>
          <Input
            className="form-control sidebar-input-placeholder"
            type="text"
            name="title"
            value={addPinValues.title}
            onChange={(e) =>
              setaddPinValues({
                ...addPinValues,
                title: e.target.value,
              })}
          />
        </FormGroup>
        <div className="mb-2">
          <Label className="custom-form-text" for="description">
            What happened in this story?
          </Label>
          <Editor
            apiKey={TinyMCE_Key}
            onInit={(evt, editor) => editorRef.current = editor}
            content={addPinValues.description}
            onChange={(e) =>
              setaddPinValues({
                ...addPinValues,
                description: e.target.getContent(),
              })}
            init={{
              init_instance_callback: (editor) => {
                editor.setContent(addPinValues.description);
              },
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount emoticons",
              ],
              toolbar: "undo redo | bold italic emoticons | link image | help ",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px } .img-responsive {  height: auto;  width: 100%; }",
              image_dimensions: false,
              image_class_list: [
                { title: "img-responsive", value: "img-responsive" },
              ],
            }}
          />
        </div>
        <FormGroup>
          <Label className="custom-form-text" for="category">
            {" which category? "}
            <HelpOutlineSharpIcon style={{ alignSelf: "baseline" }} />
          </Label>
          <div id="category-selector" style={{ display: "inline-flex" }}>
            {categoryOptions.map((category) => {
              return (
                <span
                  key={category.label}
                  value={category.value}
                  style={addPinValues.category === category.value
                    ? { backgroundColor: category.color, color: "white" }
                    : { border: `1px solid ${category.color}` }}
                  className="custom-selector"
                  onClick={() => setCategory(parseInt(category.value))}
                >
                  {category.label}
                </span>
              );
            })}
          </div>
        </FormGroup>
        <FormGroup>
          <Label className="custom-form-text">
            when did this story happen?
          </Label>
          <div style={{ display: "flex" }}>
            <div className="px-2" style={{ display: "block" }}>
              <Label className="custom-form-text pr-1" for="startDate">
                Start Date
              </Label>
              <DatePicker
                format={"MM/dd/yyyy"}
                name="startDate"
                minDate={new Date("0100-01-01")}
                maxDate={addPinValues.endDate}
                value={addPinValues.startDate}
                onChange={(date) =>
                  setaddPinValues({
                    ...addPinValues,
                    startDate: date,
                  })}
              />
            </div>
            <div style={{ display: "block" }}>
              <Label className="custom-form-text pr-1" for="endDate">
                End Date
              </Label>
              <DatePicker
                format={"MM/dd/yyyy"}
                minDate={addPinValues.startDate}
                name="endDate"
                value={addPinValues.endDate}
                onChange={(date) =>
                  setaddPinValues({
                    ...addPinValues,
                    endDate: date,
                  })}
              />
            </div>
          </div>
        </FormGroup>
        <AddressSearch
          setaddPinValues={setaddPinValues}
          addPinValues={addPinValues}
          // addressQuery={addressQuery}
          handleAddressChange={handleAddressChange}
          // validateAddress={validateAddress}
          // addressQueryLoading={addressQueryLoading}
        />
            <FormGroup>
              <Label className="custom-form-text" for="anonymous">
                {" make anonymous? "}
                <HelpOutlineSharpIcon />
              </Label>
              <div id="category-selector" style={{ display: "inline-flex" }}>
                {anonymousOptions.map((anon) => {
                  return (
                    <span
                      key={anon.label}
                      value={anon.value}
                      style={addPinValues.is_anonymous_pin === anon.value
                        ? { backgroundColor: anon.color, color: "white" }
                        : { border: `1px solid ${anon.color}` }}
                      className="custom-selector"
                      onClick={() => {
                        // console.log(anon.value);
                        setAnon(anon.value);
                      }}
                    >
                      {anon.label}
                    </span>
                  );
                })}
              </div>
            </FormGroup>
        <div style={{ marginTop: "2rem" }} className="search-bar-btn-group">
          <Button
            type="button"
            className="search-bar-btn"
            onClick={() => {
              props.setEditStory(false);
              history.replace(history.location.pathname, {});
            }}
          >
            Cancel
          </Button>
          <Button
            type="button"
            disabled={!isAuthenticated}
            className="search-bar-btn"
            onClick={(e) => submitEditPin(e)}
          >
            save changes
          </Button>
        </div>
      </Form>
      <Modal
        isOpen={errorModal}
        toggle={toggleErrorModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>Oops, your post is missing someting</ModalHeader>
        <ModalBody>
          <ul>
            {addPinValues.address === ""
              ? (
                <>
                  <h5 className="mb-0 mt-2">Address</h5>doesn't have to be exact
                </>
              )
              : (null)}
            {addPinValues.title === ""
              ? (
                <>
                  <h5 className="mb-0 mt-2">Title</h5>what are you posting
                  about?
                </>
              )
              : (null)}
            {addPinValues.description === ""
              ? (
                <>
                  <h5 className="mb-0 mt-2">Description</h5>tell us a little
                  something
                </>
              )
              : (null)}
          </ul>
          <Button
            onClick={() => toggleErrorModal()}
            style={{ float: "right", marginLeft: "10px" }}
            className={"btn default-btn-purple"}
          >
            go back
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditStory;
