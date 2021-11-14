import React, { useEffect, useState } from "react";
import { TableBox } from "./Form.styles";
import { Button } from "reactstrap";
import { FaBackward } from "react-icons/fa";
import { Radio, Space, Checkbox } from "antd";
import { connect } from "react-redux";
import { load_create_form } from "../../Redux/Actions/Actions";
import AddQuestionModal from "./AddQuestionModal";
import { getFormData, updateForm } from "../../Apis";
import swal from "sweetalert";
const MainForm = (props) => {
  const [formTitle, setFormTitle] = useState(undefined);
  const [Questions, setQuestion] = useState([]);
  const [formData, setFormData] = useState({});
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const { id, action } = props;
  console.log("###", id, props);

  useEffect(() => {
    if (action === "fill" || action === "view") {
      console.log("tjhis ");
      getFormData(id).then((res) => {
        console.log("formData", res);
        setFormTitle(res.name);
        setQuestion(res.formData.questions);
        setFormData(res);
      });
    }
  }, [action, id]);

  const handleAddQuestion = (ques) => {
    const questions = Questions;
    questions.push(ques);
    setQuestion(questions);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("###formData", e.target.Q0.value);

    if (props.action === "fill") {
      const responses = formData.responses;
      const arr = [];
      Questions.map((question, index) => {
        arr.push({
          Q: index,
          ans: e.target[`Q${index}`].value,
        });
      });
      responses.push(arr);
      const formDataApi = {
        ...formData,
        responses: responses,
      };
      console.log("res###", formDataApi);
      updateForm(formDataApi, formData.id).then((res) => {
        console.log("res###");
        swal("Success!").then((value) => {
          window.location.reload();
        });
      });
    } else {
      const formDataApi = {
        createdAt: new Date().toISOString(),
        name: e.target.name.value,
        formData: {
          questions: Questions,
        },
      };
      props.createForm(formDataApi);
    }
  };

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
            onChange={(e) => setFormTitle(e.target.value)}
            type="text"
            className="form-control title text-center fs-30"
            id="name"
            disabled={props.action === "fill" || props.action === "view"}
            value={formTitle}
            placeholder="Form Title"
          />
        </div>
        <div className="questions-box">
          {Questions.length > 0
            ? Questions.map((question, Qindex) => {
                return (
                  <div className="question-list" key={Qindex * Math.random()}>
                    <div className="question">{`${Qindex + 1}. ${
                      question.Q
                    }`}</div>
                    <div className="options">
                      {question.options ? (
                        question.type === "mcq" ? (
                          <Radio.Group>
                            <Space direction="vertical">
                              {question.options.map((option, index) => {
                                return (
                                  <Radio
                                    id={`Q${Qindex}`}
                                    name={`Q${Qindex}`}
                                    key={index * Math.random()}
                                    disabled={props.action !== "fill"}
                                    value={option}
                                  >
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
                                  <Checkbox
                                    key={Qindex * Math.random()}
                                    id={`Q${Qindex}`}
                                    name={`Q${Qindex}`}
                                    disabled={props.action !== "fill"}
                                    value={option}
                                  >
                                    {option}
                                  </Checkbox>
                                );
                              })}
                            </Space>
                          </Checkbox.Group>
                        )
                      ) : (
                        <textarea
                          id={`Q${Qindex}`}
                          name={`Q${Qindex}`}
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
          {props.action !== "fill" && props.action !== "view" ? (
            <Button
              data-test="submit-button"
              color="info"
              className="c-btn c-info form-button fs-16"
              style={{ marginRight: "25px" }}
              onClick={toggleModal}
            >
              Add Question
            </Button>
          ) : null}
          {props.action !== "view" ? (
            <Button
              data-test="submit-button"
              color="info"
              className="c-btn c-info form-button fs-16"
              type="submit"
              disabled={
                (!Questions.length || formTitle === "") &&
                props.action !== "fill"
              }
            >
              {props.action === "fill" ? "Submit" : "Save Form"}
            </Button>
          ) : null}
        </div>
      </form>
    </TableBox>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    createForm: (data) => dispatch(load_create_form(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(MainForm);
