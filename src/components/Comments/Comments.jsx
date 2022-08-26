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
  const all = react.concat(angular, vue);

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
    all.slice(indexFirstComment, indexLastComment)
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
    if (type === "reactjs") {
      setCurrentComments(react.slice(indexFirstComment, indexLastComment));
    } else if (type === "angular") {
      setCurrentComments(angular.slice(indexFirstComment, indexLastComment));
    } else if (type === "vuejs") {
      setCurrentComments(vue.slice(indexFirstComment, indexLastComment));
    } else {
      setCurrentComments(all.slice(indexFirstComment, indexLastComment));
    }
  }, [currentPage,type]);

  return (
    <div>
      <div className="gridSelect">
        <select className="optionSelect" onChange={(e) => handleType(e)}>
          <option value="all">All</option>
          <option value="angular">
            Angular
          </option>
          <option value="reactjs">Reactjs</option>
          <option value="vuejs">Vuejs</option>
        </select>
      </div>

      <div className="grid">
        {currentComments.map((comment, i) => {
          return (
            <Card
              title={comment.story_title}
              created_at={comment.created_at}
              comment={comment}
              key={i}
            />
          );
        })}
      </div>
      <div className="gridPaginate">
        <Paginate
          commentsPerPage={commentsPerPage}
          all={
            type === "all"
              ? all.length
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
