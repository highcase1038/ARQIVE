import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export const FlagReportModal = (props) => {
  return (
    <Modal
      isOpen={props.modalState}
      toggle={props.toggle}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader toggle={props.toggle}> {props.title} </ModalHeader>
      <Form onSubmit={props.onSubmit}>
        <ModalBody>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="reportType"
                value={"1"}
                onChange={props.handleChange}
                checked={props.flagForm.reportType === "1"}
              />{" "}
              Suspicious or Spam
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="reportType"
                value={"2"}
                onChange={props.handleChange}
                checked={props.flagForm.reportType === "2"}
              />{" "}
              Harassment
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="reportType"
                value={"3"}
                onChange={props.handleChange}
                checked={props.flagForm.reportType === "3"}
              />{" "}
              Other
            </Label>
          </FormGroup>
          <FormGroup style={{ marginTop: "20px" }}>
            <Label for="exampleText">Explain Your reason</Label>
            <Input
              type="textarea"
              name="reason"
              id="exampleText"
              onChange={props.handleChange}
              value={props.flagForm.reason}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            className="default-btn-purple"
            style={{ marginRight: "20px" }}
            onClick={props.toggle}
          >
            Cancel
          </Button>
          <Button className="default-btn-purple">submit</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default FlagReportModal;
