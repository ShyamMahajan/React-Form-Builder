import { React, useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { Radio, Space, Input, Checkbox } from "antd";
import { StyledWrapper } from "./AddQuestionModal.style";

const AddQuestionModal = (props) => {
  const { modal, toggle, userDetails } = props;
  const [type, setType] = useState();
  const OnTypeSelect = (e) => {
    setType(e.target.value);
  };

  const onHandleSubmit = (e) => {
      e.preventDefault()
      props.handleAddQuestion({
          Q : e.target.question.value,
          type : type,
          options : type !== "text" ? [e.target.option1.value,e.target.option2.value,e.target.option3.value,e.target.option4.value] : undefined
      })
      props.toggle()

  }
  return (
    <StyledWrapper>
      <Modal   size="lg" centered isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div>
            <h6>
              <strong>Add Question</strong>
            </h6>
          </div>
        </ModalHeader>
        <ModalBody>
          <form className="form" onSubmit={onHandleSubmit}>
            <div className="form-group">
              <input
                // onChange={e => setFormTitle(e.target.value)}
                type="text"
                className="form-control title fs-30"
                id="question"
                disabled={props.action === "fill"}
                placeholder="Question"
              />
            </div>

            <Radio.Group className="st-radio-group" style={{ padding : "25px 10px 25px 0px" }}onChange={OnTypeSelect} value={type}>
              
                <Radio value={'text'}><span style={{paddingRight : "25px" }}> Text </span></Radio>
                <Radio value={'mcq'}> <span style={{paddingRight : "25px" }}> Multi Choice </span> </Radio>
                <Radio value={'msq'}> <span style={{paddingRight : "25px" }}> Multi Select </span>
                </Radio>
                  {type === "mcq" || type === "msq" ? (
                    <Space style={{padding : "25px 0px"}}>
                      <input id="option1" className="form-control title" style={{ width: 200, margin: 10 }} placeholder="Option 1" />
                      <input id="option2" className="form-control title" style={{ width: 200, margin: 10 }} placeholder="Option 2" />
                      <input id="option3" className="form-control title" style={{ width: 200, margin: 10 }} placeholder="Option 3" />
                      <input id="option4" className="form-control title" style={{ width: 200, margin: 10 }} placeholder="Option 4" />
                    </Space>
                  ) : null}
              
            </Radio.Group>

            <div className="action-buttons">
              <Button
                data-test="submit-button"
                color="info"
                className="c-btn c-info form-button fs-16"
                style={{ marginRight: "25px" }}
                type="submit"
              >
                Add Question
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </StyledWrapper>
  );
};

export default AddQuestionModal;
