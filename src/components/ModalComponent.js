import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const ModalComponent = () => {
  return (
    <div>
      <Modal>
        <ModalHeader>Tên Nhân Viên</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Tên</Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalComponent;
