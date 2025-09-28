import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
} from "reactstrap";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";

const buttonStyle = {
  float: "right",
};
const size = { width: 300, height: 300 };
const aspect = 1;
export default function ProfileImageModal(props) {
  return (
    <>
      <Modal
        isOpen={props.modalState}
        toggle={props.toggle}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader toggle={props.toggle}> Add a Profile Image </ModalHeader>
        <ModalBody style={{ height: "300px" }}>
          <Form>
            <FormGroup>
              {props.image && (
                <Cropper
                  image={props.image}
                  crop={props.crop}
                  zoom={props.zoom}
                  cropSize={size}
                  aspect={aspect}
                  onCropChange={props.setcrop}
                  onZoomChange={props.setZoom}
                  onCropComplete={props.onCropComplete}
                  cropShape="round"
                />
              )}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <input
            type="file"
            name="file"
            id="exampleFile"
            class="form-control-file"
            onChange={props.onSelectFile}
            accept="image/*"
          />
          {props.previewUrl && (
            <img alt="Crop preview" src={props.previewUrl} />
          )}
          <Slider
            value={props.zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => props.setZoom(zoom)}
          />

          <Button
            className={"default-btn-purple"}
            style={{ marginRight: "20px" }}
            onClick={props.toggle}
          >
            Cancel
          </Button>
          <Button
            style={buttonStyle}
            onClick={props.showCroppedImage}
            className={"default-btn-purple"}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
