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
import { addPin } from "../../actions/pins";
import { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutlineSharp";
import AddressSearch from "../common/AddressSearch";
import { personalIcon, communityIcon, historicalIcon } from "../Map/MapIcons";
const okToPost = {
  ok: true,
};

const TinyMCE_Key = process.env.REACT_APP_TINY_MCE_KEY;

const defaultAddPinValues = {
  category: 1,
  latitude: null,
  longitude: null,
  startDate: new Date(),
  endDate: new Date(),
  anonradius: 1,
  address: "",
  locality: "",
  region: "",
  country: "",
  postCode: "",
  title: "",
  description: "",
  postDate: new Date(),
  lastEditDate: new Date(),
  is_anonymous_pin: false,
};
function AddStory(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const [errorModal, setErrorModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  //const [addPinValues, setaddPinValues] = useState(defaultAddPinValues);
  
  //If there is a droppedLocation, prefill the data.
  const [addPinValues, setaddPinValues] = useState({
  ...defaultAddPinValues,
  ...(props.droppedLocation && {
    latitude: props.droppedLocation.latitude,
    longitude: props.droppedLocation.longitude,
    address: props.droppedLocation.address || '',
    locality: props.droppedLocation.locality || '',
    region: props.droppedLocation.region || '',
    country: props.droppedLocation.country || '',
    postCode: props.droppedLocation.postCode || '',
  })

});

  const toggleErrorModal = () => {
    setErrorModal(() => !errorModal);
  };
  const toggleLoginModal = () => {
    setLoginModal(() => !loginModal);
    props.setKey("stories");
  };

  const editorRef = useRef(null);

  // Add this useEffect to update the form when the drop pin location changes.
  useEffect(() => {
    if (props.droppedLocation) {
      setaddPinValues(prev => ({
        ...prev,
        latitude: props.droppedLocation.latitude,
        longitude: props.droppedLocation.longitude,
        address: props.droppedLocation.address || prev.address,
        locality: props.droppedLocation.locality || prev.locality,
        region: props.droppedLocation.region || prev.region,
        country: props.droppedLocation.country || prev.country,
        postCode: props.droppedLocation.postCode || prev.postCode,
      }));
      
      // Let the map fly to the new location.
      if (props.centerMarker) {
        props.centerMarker({
          latitude: props.droppedLocation.latitude,
          longitude: props.droppedLocation.longitude,
        });
      }
    }
  }, [props.droppedLocation]);

  const setCategory = (nextCategory) => {
  console.log('🎨 Category changed to:', nextCategory);
  console.log('📍 droppedMarker:', props.droppedMarker);
  
  setaddPinValues({ ...addPinValues, category: nextCategory });
  
  if (props.droppedMarker) {
    console.log('✅ Marker exists, changing icon...');
    let newIcon;
    if (nextCategory === 1) {
      newIcon = personalIcon;  
      console.log('Setting personalIcon (pink)');
    } else if (nextCategory === 2) {
      newIcon = communityIcon;  
      console.log('Setting communityIcon (green)');
    } else if (nextCategory === 3) {
      newIcon = historicalIcon;
      console.log('Setting historicalIcon (blue)');
    }
    props.droppedMarker.setIcon(newIcon);
    }


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
  const handleClearForm = () => {
    setaddPinValues(defaultAddPinValues);
    if (editorRef.current !== undefined) {
      editorRef.current.setContent("");
    }
    if (props.clearDroppedMarker) {
    props.clearDroppedMarker();
    }
    if (props.setShouldOpenAddStory) {
    props.setShouldOpenAddStory(false);
    }


  };
  // console.log(editorRef);
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

  const submitAddPinForm = (e) => {
    if (
      addPinValues.title && addPinValues.description && addPinValues.latitude &&
      addPinValues.longitude && addPinValues.address
    ) {
      let truncatedAddress = "";
      if (addPinValues.address.length > 150) {
        truncatedAddress = addPinValues.address.slice(0, 148);
      } else {
        truncatedAddress = addPinValues.address;
      }
      console.log(truncatedAddress);
      dispatch(
        addPin({
          ...addPinValues,
          address: truncatedAddress,
          lastPersonEdit: auth.user.id,
          owner: auth.user.id,
        }),
      );
      setaddPinValues(() => defaultAddPinValues);
      if (editorRef.current !== undefined) {
        editorRef.current.setContent("");
      }
      props.setKey("stories");
      if (props.clearDroppedMarker) {
        props.clearDroppedMarker();
      }

      history.push(`/story`, { storySidebarOpen: true });
    } else {
      setErrorModal(true);
    }
  };

  if (okToPost.ok === false) {
    return (
      <>
        <Modal
          isOpen={props.modalState}
          toggle={props.toggle}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <p>Please wait a few seconds before posting again</p>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Form
        className="custom-form-text"
        style={{ marginTop: "2rem" }}
      >
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
          handleAddressChange={handleAddressChange}
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
            onClick={() => handleClearForm()}
          >
            clear
          </Button>
          <Button
            type="button"
            disabled={!auth.isAuthenticated}
            className="search-bar-btn"
            onClick={(e) => {
              submitAddPinForm(e);
            }}
          >
            submit
          </Button>
        </div>
      </Form>
      <Modal
        // isOpen={false}
        isOpen={!auth.isAuthenticated && props.currentPage}
        toggle={toggleLoginModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader>
          Oops, you must be registered and logged in to add a story
        </ModalHeader>
        <ModalBody>
          <Button
            onClick={() => props.setKey("stories")}
            style={{ float: "left", marginRight: "10px" }}
            className={"btn default-btn-purple"}
          >
            back
          </Button>
          <Link to="/register">
            <Button
              style={{ float: "right", marginRight: "10px" }}
              className={"btn default-btn-purple"}
            >
              register
            </Button>
          </Link>
          <Link to="/login">
            <Button
              style={{ float: "right", marginRight: "10px" }}
              className={"btn default-btn-purple"}
            >
              login
            </Button>
          </Link>
        </ModalBody>
      </Modal>
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
    </>
  );
}

export default AddStory;
