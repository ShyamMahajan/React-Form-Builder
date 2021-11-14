import React, { useEffect, useState } from "react";
import { TableBox } from "./Form.styles";
import { Button } from "reactstrap";
import { FaBackward } from "react-icons/fa";
import { Radio, Space, Checkbox } from "antd";
import { connect } from "react-redux";
import { load_create_form } from "../../Redux/Actions/Actions"
import AddQuestionModal from "./AddQuestionModal"
import { getFormData } from "../../Apis";

const MainForm = (props) => {
  const [formTitle, setFormTitle] = useState(undefined);
  const [Questions, setQuestion] = useState([]);
  const [modal,setModal] = useState(false);
  const toggleModal = ( ) => setModal(!modal)

  const {id, action} = props;
  console.log("###", id, props)

  useEffect(() => {
    if(action === "fill"){
      console.log("tjhis ")
      getFormData(id).then(res => {
        console.log("formData", res)
        setFormTitle(res.name)
        setQuestion(res.formData.questions)
      })

    }
  },[action, id])

  const handleAddQuestion = (ques) => {
    const questions = Questions
    questions.push(ques)
    setQuestion(questions)
  }

  const onSubmitHandler = (e) => {
      e.preventDefault()
      if(props.action === "fill"){



      }else{
        const formData = {
          "createdAt" : new Date().toISOString(),
          name : e.target.name.value,
          formData : {
            questions : Questions
          }
        }
        props.createForm(formData)
      }
  }

  return (
    <TableBox>
        <AddQuestionModal
            handleAddQuestion={handleAddQuestion}
            toggle={toggleModal}
        modal={modal}
      />
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            onChange={e => setFormTitle(e.target.value)}
            type="text"
            className="form-control title text-center fs-30"
            id="name"
            disabled={props.action === "fill"}
            value={formTitle}
            placeholder="Form Title"
          />
        </div>
        <div className="questions-box">
          {Questions.length > 0
            ? Questions.map((question, index) => {
                return (
                  <div className="question-list" key={index*Math.random()}>
                    <div className="question">{`${index + 1}. ${
                      question.Q
                    }`}</div>
                    <div className="options">
                      {question.options ? (
                        question.type === "mcq" ? (
                          <Radio.Group>
                            <Space direction="vertical">
                              {question.options.map((option, index) => {
                                return (
                                  <Radio key={index*Math.random()} disabled={props.action !== "fill"} value={index}>
                                    {option}
                                  </Radio>
                                );
                              })}
                            </Space>
                          </Radio.Group>
                        ) : (
                          <Checkbox.Group style={{ width: "100%" }}>
                            <Space direction="vertical">
                              {question.options.map((option, index) => {
                                return (
                                  <Checkbox disabled={props.action !== "fill"}  value={option}>
                                    {option}
                                  </Checkbox>
                                );
                              })}
                            </Space>
                          </Checkbox.Group>
                        )
                      ) : (
                        <textarea
                          id="textarea"
                          name="textarea"
                          rows="1"
                          disabled={props.action !== "fill"} 
                        ></textarea>
                      )}
                    </div>
                  </div>
                );
              })
            : null}
        </div>

        <div className="action-buttons">
       { props.action !== "fill" ?
          <Button
            data-test="submit-button"
            color="info"
            className="c-btn c-info form-button fs-16"
            style={{ marginRight: "25px" }}
            onClick={toggleModal}
          >
            Add Question
          </Button> : null}
          <Button
            data-test="submit-button"
            color="info"
            className="c-btn c-info form-button fs-16"
            type="submit"
            disabled={((!Questions.length) || formTitle === "") && props.action !== "fill"}
          >
            {props.action === "fill" ? "Submit" : "Save Form"}
          </Button>
        </div>
      </form>
    </TableBox>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    createForm : (data) => dispatch(load_create_form(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(MainForm);
