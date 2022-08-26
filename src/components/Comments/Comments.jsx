import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import "./comments.css";

const Comments = () => {
  const [type, setType] = useState("all");
  const react = JSON.parse(localStorage.getItem("reactComments"));
  const angular = JSON.parse(localStorage.getItem("angularComments"));
  const vue = JSON.parse(localStorage.getItem("vueComments"));
  const allComments = JSON.parse(localStorage.getItem("all"));
  // Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setcommentsPerPage] = useState(8);
  const [indexLastComment, setIndexLastComment] = useState(
    currentPage * commentsPerPage
  );
  const [indexFirstComment, setIndexFirstComment] = useState(
    indexLastComment - commentsPerPage
  );
  const [currentComments, setCurrentComments] = useState(
    allComments.slice(indexFirstComment, indexLastComment)
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // 2
    let last = pageNumber * commentsPerPage;
    setIndexLastComment(last);
    setIndexFirstComment(last - commentsPerPage);
  };

  //Select
  const handleType = (e) => {
    // e.preventDefault();
    let typeValue = e.target.value;
    setType(`${typeValue}`);
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log("cambio current");
    // setIndexLastComment(currentPage * commentsPerPage);
    setTimeout(() => {
      if (type === "reactjs") {
        setCurrentComments(react.slice(indexFirstComment, indexLastComment));
      } else if (type === "angular") {
        setCurrentComments(angular.slice(indexFirstComment, indexLastComment));
      } else if (type === "vuejs") {
        setCurrentComments(vue.slice(indexFirstComment, indexLastComment));
      } else {
        setCurrentComments(allComments.slice(indexFirstComment, indexLastComment));
      }
  }, 1);
    
  }, [currentPage,type]);

  return (
    <div>
      <div className="gridSelect">
        <select className="optionSelect" onChange={(e) => handleType(e)}>
          <option value="">Select any tool</option>
          {allComments.length ? <option value="all">All</option> : null}
          <option value="angular">
            Angular
          </option>
          <option value="reactjs">Reactjs</option>
          <option value="vuejs">Vuejs</option>
        </select>
      </div>

      <div className="grid">
        {
        currentComments.length ? currentComments.map((comment, i) => {
          return (
            <Card
              title={comment.story_title}
              created_at={comment.created_at}
              comment={comment}
              key={i}
            />
          );
        })
      : <h1 className="noComments">"You have not selected any tool..."</h1>
      }
      </div>
      <div className="gridPaginate">
        <Paginate
          commentsPerPage={commentsPerPage}
          all={
            type === "all"
              ? allComments.length
              : type === "reactjs"
              ? react.length
              : type === "angular"
              ? angular.length
              : vue.length
          }
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Comments;
