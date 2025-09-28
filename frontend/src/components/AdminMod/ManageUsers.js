import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Card,
} from "reactstrap";
import {
  getUsers,
  editUserRole,
  getNextPreviousUsers,
  deleteUser,
} from "../../actions/users";

export default function ManageUsers() {
  const dispatch = useDispatch();
  // State was moved
  const users = useSelector((state) => state.auth.users);
  const [editUser, seteditUser] = useState();
  const [modalState, setmodalState] = useState(false);
  const [userRole, setuserRole] = useState(3);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const onSubmit = (e) => {
    e.preventDefault();
    let submit = {
      id: editUser.id,
    };
    if (userRole === "1") {
      submit = {
        ...submit,
        is_moderator: false,
        is_administrator: true,
      };
    } else if (userRole === "2") {
      submit = {
        ...submit,
        is_moderator: true,
        is_administrator: false,
      };
    } else {
      submit = {
        ...submit,
        is_moderator: false,
        is_administrator: false,
      };
    }

    dispatch(editUserRole(editUser.id, submit));
    setmodalState(!modalState);
  };
  const setEdit = (userInfo, selection) => {
    setuserRole(selection);
    seteditUser(userInfo);
    setmodalState(!modalState);
  };
  const toggle = () => {
    setmodalState(!modalState);
  };

  return (
    <div className={"manage-container"}>
      manage users
      <div className={"manage-paginate-buttons"}>
        <PrevNext next={users.next} previous={users.previous} />
      </div>
      <div className="container-fluid">
        <ViewUsers
          users={users.results}
          onSubmit={onSubmit}
          setEdit={setEdit}
          editUser={editUser}
          modalState={modalState}
          toggle={toggle}
          userRole={userRole}
          setuserRole={setuserRole}
        />
      </div>
    </div>
  );
}

const PrevNext = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      {props.previous ? (
        <button
          className="btn btn-sm default-btn-purple"
          onClick={() => dispatch(getNextPreviousUsers(props.previous))}
        >
          Previous
        </button>
      ) : (
        ""
      )}
      {props.next ? (
        <button
          className="btn btn-sm default-btn-purple"
          onClick={() => dispatch(getNextPreviousUsers(props.next))}
        >
          Next
        </button>
      ) : (
        ""
      )}
    </>
  );
};

const ViewUsers = (props) => {
  const { user } = useSelector((state) => state.auth);
  let loggedInUser = user;
  const dispatch = useDispatch();
  return (
    <Card className={"manage-card"}>
      <table className="table table-responsive-sm manage-table table-responsive-md">
        <thead className="manage-table-head">
          <th>username</th>
          <th>role</th>
          <th>change role</th>
          <th>delete user</th>
        </thead>
        <tbody>
          {props.users &&
            props.users.map((user, index) => {
              let userRole = "";
              let selection = 3;
              if (user.is_administrator) {
                userRole = <strong>administrator</strong>;
                selection = 1;
              } else if (user.is_moderator) {
                userRole = <strong>moderator</strong>;
                selection = 2;
              }
              // don't show currently logged in user (ie can't manage themselves)
              if (loggedInUser && loggedInUser.id != user.id) {
                if (
                  loggedInUser.is_administrator ||
                  (loggedInUser.is_moderator && !user.is_administrator)
                ) {
                  return (
                    <tr key={index}>
                      <td>{user.username}</td>
                      <td>{userRole}</td>
                      <td>
                        <button
                          onClick={() => props.setEdit(user, selection)}
                          className="btn btn-sm default-btn-purple"
                        >
                          Edit Role
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(deleteUser(user.id))}
                          className="btn btn-sm default-btn-purple"
                        >
                          Delete user
                        </button>
                      </td>
                      <td>
                        <EditUserRole
                          loggedInUser={loggedInUser}
                          editUser={props.editUser}
                          onSubmit={props.onSubmit}
                          index={index}
                          toggle={props.toggle}
                          modalState={props.modalState}
                          userRole={props.userRole}
                          setuserRole={props.setuserRole}
                        />
                      </td>
                    </tr>
                  );
                }
              }
            })}
        </tbody>
      </table>
    </Card>
  );
};

const EditUserRole = (props) => {
  const buttonStyle = {
    float: "right",
  };
  const labelStyle = {
    marginRight: "10px",
  };

  if (props.loggedInUser) {
    return (
      <>
        <Modal
          isOpen={props.modalState}
          toggle={props.toggle}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalHeader toggle={props.toggle}>
            {" "}
            Changing Role for {props.editUser
              ? props.editUser.username
              : ""}{" "}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={props.onSubmit}>
              <FormGroup>
                <Label style={labelStyle} for="category">
                  Select Role
                </Label>
                <select
                  name="Role"
                  value={props.userRole}
                  onChange={(e) => props.setuserRole(e.target.value)}
                  // value={props.userForm.category}
                  // onChange={e =>
                  //   props.setuserForm({
                  //     ...props.userForm,
                  //     category: e.target.value
                  //   })
                  // }
                >
                  {props.loggedInUser.is_administrator ? (
                    <>
                      <option value="1">Administrator</option>
                      <option value="2">Moderator</option>
                      <option value="3">None</option>
                    </>
                  ) : (
                    <>
                      <option value="1">Moderator</option>
                      <option value="2">None</option>
                    </>
                  )}
                  ;
                </select>
              </FormGroup>
              <Button style={buttonStyle} color="success">
                Save
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  } else {
    return null;
  }
};
