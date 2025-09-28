import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PrivacyStatement() {
  const auth = useSelector((state) => state.auth);

  const { user } = auth;
  let authorized = false;
  if (user) {
    if (user.is_administrator || user.is_moderator) {
      authorized = true;
    }
  }

  return (
    <main className={"main-content-div"}>
      <>
        <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n    @import url(https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98);\n\n    .lst-kix_list_4-1>li {\n      counter-increment: lst-ctn-kix_list_4-1;\n    }\n\n    .lst-kix_list_2-1>li {\n      counter-increment: lst-ctn-kix_list_2-1;\n    }\n\n    .lst-kix_list_6-1>li {\n      counter-increment: lst-ctn-kix_list_6-1;\n    }\n\n    ol.lst-kix_list_3-1.start {\n      counter-reset: lst-ctn-kix_list_3-1 0;\n    }\n\n    ol.lst-kix_list_6-6.start {\n      counter-reset: lst-ctn-kix_list_6-6 0;\n    }\n\n    .lst-kix_list_5-0>li {\n      counter-increment: lst-ctn-kix_list_5-0;\n    }\n\n    ol.lst-kix_list_2-3.start {\n      counter-reset: lst-ctn-kix_list_2-3 0;\n    }\n\n    ol.lst-kix_list_1-5.start {\n      counter-reset: lst-ctn-kix_list_1-5 0;\n    }\n\n    ol.lst-kix_list_5-3.start {\n      counter-reset: lst-ctn-kix_list_5-3 0;\n    }\n\n    .lst-kix_list_2-3>li {\n      counter-increment: lst-ctn-kix_list_2-3;\n    }\n\n    .lst-kix_list_4-3>li {\n      counter-increment: lst-ctn-kix_list_4-3;\n    }\n\n    ol.lst-kix_list_4-5.start {\n      counter-reset: lst-ctn-kix_list_4-5 0;\n    }\n\n    .lst-kix_list_1-2>li {\n      counter-increment: lst-ctn-kix_list_1-2;\n    }\n\n    ol.lst-kix_list_3-7.start {\n      counter-reset: lst-ctn-kix_list_3-7 0;\n    }\n\n    .lst-kix_list_5-2>li {\n      counter-increment: lst-ctn-kix_list_5-2;\n    }\n\n    .lst-kix_list_3-2>li {\n      counter-increment: lst-ctn-kix_list_3-2;\n    }\n\n    .lst-kix_list_5-0>li:before {\n      content: "" counter(lst-ctn-kix_list_5-0, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_6-0 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_6-1 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_5-4>li {\n      counter-increment: lst-ctn-kix_list_5-4;\n    }\n\n    .lst-kix_list_1-4>li {\n      counter-increment: lst-ctn-kix_list_1-4;\n    }\n\n    ol.lst-kix_list_1-6.start {\n      counter-reset: lst-ctn-kix_list_1-6 0;\n    }\n\n    .lst-kix_list_5-3>li:before {\n      content: "" counter(lst-ctn-kix_list_5-3, decimal) ". ";\n    }\n\n    .lst-kix_list_5-2>li:before {\n      content: "" counter(lst-ctn-kix_list_5-2, lower-roman) ". ";\n    }\n\n    .lst-kix_list_5-1>li:before {\n      content: "" counter(lst-ctn-kix_list_5-1, lower-latin) ". ";\n    }\n\n    .lst-kix_list_5-7>li:before {\n      content: "" counter(lst-ctn-kix_list_5-7, lower-latin) ". ";\n    }\n\n    .lst-kix_list_5-6>li:before {\n      content: "" counter(lst-ctn-kix_list_5-6, decimal) ". ";\n    }\n\n    .lst-kix_list_5-8>li:before {\n      content: "" counter(lst-ctn-kix_list_5-8, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_6-6 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_6-7 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_5-4>li:before {\n      content: "" counter(lst-ctn-kix_list_5-4, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_6-8 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_5-5>li:before {\n      content: "" counter(lst-ctn-kix_list_5-5, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_6-2 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_6-3 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_6-4 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_6-5 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_1-0.start {\n      counter-reset: lst-ctn-kix_list_1-0 0;\n    }\n\n    .lst-kix_list_6-1>li:before {\n      content: "" counter(lst-ctn-kix_list_6-1, lower-latin) ". ";\n    }\n\n    .lst-kix_list_6-3>li:before {\n      content: "" counter(lst-ctn-kix_list_6-3, decimal) ". ";\n    }\n\n    .lst-kix_list_6-5>li {\n      counter-increment: lst-ctn-kix_list_6-5;\n    }\n\n    .lst-kix_list_6-8>li {\n      counter-increment: lst-ctn-kix_list_6-8;\n    }\n\n    .lst-kix_list_6-0>li:before {\n      content: "" counter(lst-ctn-kix_list_6-0, decimal) ". ";\n    }\n\n    .lst-kix_list_6-4>li:before {\n      content: "" counter(lst-ctn-kix_list_6-4, lower-latin) ". ";\n    }\n\n    .lst-kix_list_3-0>li {\n      counter-increment: lst-ctn-kix_list_3-0;\n    }\n\n    ol.lst-kix_list_4-0.start {\n      counter-reset: lst-ctn-kix_list_4-0 0;\n    }\n\n    .lst-kix_list_3-6>li {\n      counter-increment: lst-ctn-kix_list_3-6;\n    }\n\n    .lst-kix_list_6-2>li:before {\n      content: "" counter(lst-ctn-kix_list_6-2, lower-roman) ". ";\n    }\n\n    .lst-kix_list_2-5>li {\n      counter-increment: lst-ctn-kix_list_2-5;\n    }\n\n    .lst-kix_list_2-8>li {\n      counter-increment: lst-ctn-kix_list_2-8;\n    }\n\n    ol.lst-kix_list_3-2.start {\n      counter-reset: lst-ctn-kix_list_3-2 0;\n    }\n\n    .lst-kix_list_6-8>li:before {\n      content: "" counter(lst-ctn-kix_list_6-8, lower-roman) ". ";\n    }\n\n    .lst-kix_list_6-5>li:before {\n      content: "" counter(lst-ctn-kix_list_6-5, lower-roman) ". ";\n    }\n\n    .lst-kix_list_6-7>li:before {\n      content: "" counter(lst-ctn-kix_list_6-7, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_2-4.start {\n      counter-reset: lst-ctn-kix_list_2-4 0;\n    }\n\n    .lst-kix_list_6-6>li:before {\n      content: "" counter(lst-ctn-kix_list_6-6, decimal) ". ";\n    }\n\n    ol.lst-kix_list_1-3 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_1-4 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_2-7>li:before {\n      content: "" counter(lst-ctn-kix_list_2-7, lower-latin) ". ";\n    }\n\n    .lst-kix_list_2-7>li {\n      counter-increment: lst-ctn-kix_list_2-7;\n    }\n\n    ol.lst-kix_list_1-5 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_1-6 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_1-0 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_2-5>li:before {\n      content: "" counter(lst-ctn-kix_list_2-5, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_6-2.start {\n      counter-reset: lst-ctn-kix_list_6-2 0;\n    }\n\n    ol.lst-kix_list_1-1 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_1-2 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_4-6.start {\n      counter-reset: lst-ctn-kix_list_4-6 0;\n    }\n\n    ol.lst-kix_list_3-0.start {\n      counter-reset: lst-ctn-kix_list_3-0 0;\n    }\n\n    .lst-kix_list_5-7>li {\n      counter-increment: lst-ctn-kix_list_5-7;\n    }\n\n    ol.lst-kix_list_4-3.start {\n      counter-reset: lst-ctn-kix_list_4-3 0;\n    }\n\n    ol.lst-kix_list_1-7 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_4-7>li {\n      counter-increment: lst-ctn-kix_list_4-7;\n    }\n\n    ol.lst-kix_list_1-8 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-5.start {\n      counter-reset: lst-ctn-kix_list_2-5 0;\n    }\n\n    .lst-kix_list_2-6>li {\n      counter-increment: lst-ctn-kix_list_2-6;\n    }\n\n    .lst-kix_list_4-1>li:before {\n      content: "" counter(lst-ctn-kix_list_4-1, lower-latin) ". ";\n    }\n\n    .lst-kix_list_4-3>li:before {\n      content: "" counter(lst-ctn-kix_list_4-3, decimal) ". ";\n    }\n\n    .lst-kix_list_4-5>li:before {\n      content: "" counter(lst-ctn-kix_list_4-5, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_5-7.start {\n      counter-reset: lst-ctn-kix_list_5-7 0;\n    }\n\n    .lst-kix_list_1-8>li {\n      counter-increment: lst-ctn-kix_list_1-8;\n    }\n\n    ol.lst-kix_list_1-4.start {\n      counter-reset: lst-ctn-kix_list_1-4 0;\n    }\n\n    .lst-kix_list_5-5>li {\n      counter-increment: lst-ctn-kix_list_5-5;\n    }\n\n    .lst-kix_list_3-5>li {\n      counter-increment: lst-ctn-kix_list_3-5;\n    }\n\n    ol.lst-kix_list_1-1.start {\n      counter-reset: lst-ctn-kix_list_1-1 0;\n    }\n\n    .lst-kix_list_3-4>li {\n      counter-increment: lst-ctn-kix_list_3-4;\n    }\n\n    ol.lst-kix_list_4-4.start {\n      counter-reset: lst-ctn-kix_list_4-4 0;\n    }\n\n    .lst-kix_list_6-4>li {\n      counter-increment: lst-ctn-kix_list_6-4;\n    }\n\n    .lst-kix_list_6-3>li {\n      counter-increment: lst-ctn-kix_list_6-3;\n    }\n\n    ol.lst-kix_list_1-3.start {\n      counter-reset: lst-ctn-kix_list_1-3 0;\n    }\n\n    ol.lst-kix_list_2-8.start {\n      counter-reset: lst-ctn-kix_list_2-8 0;\n    }\n\n    ol.lst-kix_list_1-2.start {\n      counter-reset: lst-ctn-kix_list_1-2 0;\n    }\n\n    ol.lst-kix_list_6-1.start {\n      counter-reset: lst-ctn-kix_list_6-1 0;\n    }\n\n    .lst-kix_list_1-1>li:before {\n      content: "" counter(lst-ctn-kix_list_1-1, lower-latin) ". ";\n    }\n\n    .lst-kix_list_1-3>li:before {\n      content: "" counter(lst-ctn-kix_list_1-3, decimal) ". ";\n    }\n\n    .lst-kix_list_4-8>li {\n      counter-increment: lst-ctn-kix_list_4-8;\n    }\n\n    .lst-kix_list_1-7>li:before {\n      content: "" counter(lst-ctn-kix_list_1-7, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_5-8.start {\n      counter-reset: lst-ctn-kix_list_5-8 0;\n    }\n\n    ol.lst-kix_list_2-7.start {\n      counter-reset: lst-ctn-kix_list_2-7 0;\n    }\n\n    .lst-kix_list_1-3>li {\n      counter-increment: lst-ctn-kix_list_1-3;\n    }\n\n    .lst-kix_list_1-5>li:before {\n      content: "" counter(lst-ctn-kix_list_1-5, lower-roman) ". ";\n    }\n\n    .lst-kix_list_5-6>li {\n      counter-increment: lst-ctn-kix_list_5-6;\n    }\n\n    .lst-kix_list_2-1>li:before {\n      content: "" counter(lst-ctn-kix_list_2-1, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_6-0.start {\n      counter-reset: lst-ctn-kix_list_6-0 0;\n    }\n\n    .lst-kix_list_2-3>li:before {\n      content: "" counter(lst-ctn-kix_list_2-3, decimal) ". ";\n    }\n\n    .lst-kix_list_4-2>li {\n      counter-increment: lst-ctn-kix_list_4-2;\n    }\n\n    ol.lst-kix_list_3-1 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_3-2 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_3-1>li {\n      counter-increment: lst-ctn-kix_list_3-1;\n    }\n\n    ol.lst-kix_list_3-3 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_3-4.start {\n      counter-reset: lst-ctn-kix_list_3-4 0;\n    }\n\n    .lst-kix_list_5-1>li {\n      counter-increment: lst-ctn-kix_list_5-1;\n    }\n\n    ol.lst-kix_list_3-4 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_3-0 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_1-1>li {\n      counter-increment: lst-ctn-kix_list_1-1;\n    }\n\n    ol.lst-kix_list_2-6.start {\n      counter-reset: lst-ctn-kix_list_2-6 0;\n    }\n\n    .lst-kix_list_3-0>li:before {\n      content: "" counter(lst-ctn-kix_list_3-0, lower-latin) ". ";\n    }\n\n    .lst-kix_list_3-1>li:before {\n      content: "" counter(lst-ctn-kix_list_3-1, lower-latin) ". ";\n    }\n\n    .lst-kix_list_3-2>li:before {\n      content: "" counter(lst-ctn-kix_list_3-2, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_1-8.start {\n      counter-reset: lst-ctn-kix_list_1-8 0;\n    }\n\n    .lst-kix_list_4-0>li {\n      counter-increment: lst-ctn-kix_list_4-0;\n    }\n\n    .lst-kix_list_6-0>li {\n      counter-increment: lst-ctn-kix_list_6-0;\n    }\n\n    .lst-kix_list_3-5>li:before {\n      content: "" counter(lst-ctn-kix_list_3-5, lower-roman) ". ";\n    }\n\n    .lst-kix_list_3-4>li:before {\n      content: "" counter(lst-ctn-kix_list_3-4, lower-latin) ". ";\n    }\n\n    .lst-kix_list_3-3>li:before {\n      content: "" counter(lst-ctn-kix_list_3-3, decimal) ". ";\n    }\n\n    ol.lst-kix_list_3-5 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_3-6 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_3-7 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_3-8 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_3-8>li:before {\n      content: "" counter(lst-ctn-kix_list_3-8, lower-roman) ". ";\n    }\n\n    .lst-kix_list_2-0>li {\n      counter-increment: lst-ctn-kix_list_2-0;\n    }\n\n    .lst-kix_list_3-6>li:before {\n      content: "" counter(lst-ctn-kix_list_3-6, decimal) ". ";\n    }\n\n    .lst-kix_list_3-7>li:before {\n      content: "" counter(lst-ctn-kix_list_3-7, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_5-0.start {\n      counter-reset: lst-ctn-kix_list_5-0 0;\n    }\n\n    ol.lst-kix_list_4-2.start {\n      counter-reset: lst-ctn-kix_list_4-2 0;\n    }\n\n    ol.lst-kix_list_2-2 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-3 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-4 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-5 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_4-4>li {\n      counter-increment: lst-ctn-kix_list_4-4;\n    }\n\n    ol.lst-kix_list_2-0 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-1 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_4-8>li:before {\n      content: "" counter(lst-ctn-kix_list_4-8, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_6-4.start {\n      counter-reset: lst-ctn-kix_list_6-4 0;\n    }\n\n    .lst-kix_list_4-7>li:before {\n      content: "" counter(lst-ctn-kix_list_4-7, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_5-6.start {\n      counter-reset: lst-ctn-kix_list_5-6 0;\n    }\n\n    ol.lst-kix_list_4-1.start {\n      counter-reset: lst-ctn-kix_list_4-1 0;\n    }\n\n    ol.lst-kix_list_4-8.start {\n      counter-reset: lst-ctn-kix_list_4-8 0;\n    }\n\n    ol.lst-kix_list_3-3.start {\n      counter-reset: lst-ctn-kix_list_3-3 0;\n    }\n\n    ol.lst-kix_list_2-6 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-7 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_2-8 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_3-3>li {\n      counter-increment: lst-ctn-kix_list_3-3;\n    }\n\n    ol.lst-kix_list_6-3.start {\n      counter-reset: lst-ctn-kix_list_6-3 0;\n    }\n\n    ol.lst-kix_list_5-5.start {\n      counter-reset: lst-ctn-kix_list_5-5 0;\n    }\n\n    .lst-kix_list_2-2>li {\n      counter-increment: lst-ctn-kix_list_2-2;\n    }\n\n    ol.lst-kix_list_4-7.start {\n      counter-reset: lst-ctn-kix_list_4-7 0;\n    }\n\n    .lst-kix_list_6-2>li {\n      counter-increment: lst-ctn-kix_list_6-2;\n    }\n\n    ol.lst-kix_list_5-0 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_2-6>li:before {\n      content: "" counter(lst-ctn-kix_list_2-6, decimal) ". ";\n    }\n\n    .lst-kix_list_3-7>li {\n      counter-increment: lst-ctn-kix_list_3-7;\n    }\n\n    ol.lst-kix_list_5-1 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_5-2 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_2-4>li:before {\n      content: "" counter(lst-ctn-kix_list_2-4, lower-latin) ". ";\n    }\n\n    .lst-kix_list_2-8>li:before {\n      content: "" counter(lst-ctn-kix_list_2-8, lower-roman) ". ";\n    }\n\n    .lst-kix_list_6-6>li {\n      counter-increment: lst-ctn-kix_list_6-6;\n    }\n\n    ol.lst-kix_list_5-4.start {\n      counter-reset: lst-ctn-kix_list_5-4 0;\n    }\n\n    ol.lst-kix_list_5-1.start {\n      counter-reset: lst-ctn-kix_list_5-1 0;\n    }\n\n    ol.lst-kix_list_5-7 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_6-7>li {\n      counter-increment: lst-ctn-kix_list_6-7;\n    }\n\n    ol.lst-kix_list_5-8 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_5-3 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_5-4 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_1-7>li {\n      counter-increment: lst-ctn-kix_list_1-7;\n    }\n\n    ol.lst-kix_list_3-8.start {\n      counter-reset: lst-ctn-kix_list_3-8 0;\n    }\n\n    ol.lst-kix_list_5-5 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_5-6 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_5-8>li {\n      counter-increment: lst-ctn-kix_list_5-8;\n    }\n\n    .lst-kix_list_4-0>li:before {\n      content: "" counter(lst-ctn-kix_list_4-0, lower-latin) ". ";\n    }\n\n    .lst-kix_list_3-8>li {\n      counter-increment: lst-ctn-kix_list_3-8;\n    }\n\n    ol.lst-kix_list_6-8.start {\n      counter-reset: lst-ctn-kix_list_6-8 0;\n    }\n\n    .lst-kix_list_4-6>li {\n      counter-increment: lst-ctn-kix_list_4-6;\n    }\n\n    ol.lst-kix_list_1-7.start {\n      counter-reset: lst-ctn-kix_list_1-7 0;\n    }\n\n    .lst-kix_list_4-4>li:before {\n      content: "" counter(lst-ctn-kix_list_4-4, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_2-2.start {\n      counter-reset: lst-ctn-kix_list_2-2 0;\n    }\n\n    .lst-kix_list_1-5>li {\n      counter-increment: lst-ctn-kix_list_1-5;\n    }\n\n    ol.lst-kix_list_6-5.start {\n      counter-reset: lst-ctn-kix_list_6-5 0;\n    }\n\n    .lst-kix_list_4-2>li:before {\n      content: "" counter(lst-ctn-kix_list_4-2, lower-roman) ". ";\n    }\n\n    .lst-kix_list_4-6>li:before {\n      content: "" counter(lst-ctn-kix_list_4-6, decimal) ". ";\n    }\n\n    ol.lst-kix_list_4-0 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_4-1 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_4-2 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_4-3 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_2-4>li {\n      counter-increment: lst-ctn-kix_list_2-4;\n    }\n\n    ol.lst-kix_list_6-7.start {\n      counter-reset: lst-ctn-kix_list_6-7 0;\n    }\n\n    ol.lst-kix_list_3-6.start {\n      counter-reset: lst-ctn-kix_list_3-6 0;\n    }\n\n    .lst-kix_list_5-3>li {\n      counter-increment: lst-ctn-kix_list_5-3;\n    }\n\n    ol.lst-kix_list_4-8 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_1-0>li:before {\n      content: "" counter(lst-ctn-kix_list_1-0, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_4-4 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_4-5 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_1-2>li:before {\n      content: "" counter(lst-ctn-kix_list_1-2, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_2-0.start {\n      counter-reset: lst-ctn-kix_list_2-0 0;\n    }\n\n    ol.lst-kix_list_4-6 {\n      list-style-type: none;\n    }\n\n    ol.lst-kix_list_4-7 {\n      list-style-type: none;\n    }\n\n    .lst-kix_list_1-4>li:before {\n      content: "" counter(lst-ctn-kix_list_1-4, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_3-5.start {\n      counter-reset: lst-ctn-kix_list_3-5 0;\n    }\n\n    .lst-kix_list_1-0>li {\n      counter-increment: lst-ctn-kix_list_1-0;\n    }\n\n    .lst-kix_list_1-6>li {\n      counter-increment: lst-ctn-kix_list_1-6;\n    }\n\n    .lst-kix_list_1-6>li:before {\n      content: "" counter(lst-ctn-kix_list_1-6, decimal) ". ";\n    }\n\n    li.li-bullet-0:before {\n      margin-left: -36pt;\n      white-space: nowrap;\n      display: inline-block;\n      min-width: 36pt;\n    }\n\n    .lst-kix_list_2-0>li:before {\n      content: "" counter(lst-ctn-kix_list_2-0, lower-latin) ". ";\n    }\n\n    ol.lst-kix_list_2-1.start {\n      counter-reset: lst-ctn-kix_list_2-1 0;\n    }\n\n    .lst-kix_list_4-5>li {\n      counter-increment: lst-ctn-kix_list_4-5;\n    }\n\n    .lst-kix_list_1-8>li:before {\n      content: "" counter(lst-ctn-kix_list_1-8, lower-roman) ". ";\n    }\n\n    .lst-kix_list_2-2>li:before {\n      content: "" counter(lst-ctn-kix_list_2-2, lower-roman) ". ";\n    }\n\n    ol.lst-kix_list_5-2.start {\n      counter-reset: lst-ctn-kix_list_5-2 0;\n    }\n\n    ol {\n      margin: 0;\n      padding: 0;\n    }\n\n    table td,\n    table th {\n      padding: 0;\n    }\n\n    .c0 {\n      -webkit-text-decoration-skip: none;\n      color: #000000;\n      font-weight: 400;\n      text-decoration: underline;\n      vertical-align: baseline;\n      text-decoration-skip-ink: none;\n      font-size: 12pt;\n      font-family: "Arial";\n      font-style: normal;\n    }\n\n    .c5 {\n      color: #000000;\n      font-weight: 700;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 12pt;\n      font-family: "Arial";\n      font-style: normal;\n    }\n\n    .c3 {\n      background-color: #ffffff;\n      padding-top: 0pt;\n      padding-bottom: 12pt;\n      line-height: 1;\n      orphans: 2;\n      widows: 2;\n      text-align: justify;\n    }\n\n    .c16 {\n      color: #000000;\n      font-weight: 400;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 11pt;\n      font-family: "Arial";\n      font-style: normal;\n    }\n\n    .c1 {\n      color: #000000;\n      font-weight: 400;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 12pt;\n      font-family: "Arial";\n      font-style: normal;\n    }\n\n    .c21 {\n      background-color: #ffffff;\n      padding-top: 0pt;\n      padding-bottom: 12pt;\n      line-height: 1;\n      orphans: 2;\n      widows: 2;\n      text-align: center;\n    }\n\n    .c9 {\n      color: #000000;\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 12pt;\n      font-style: italic;\n    }\n\n    .c6 {\n      padding-top: 0pt;\n      padding-bottom: 0pt;\n      line-height: 1;\n      text-align: left;\n    }\n\n    .c12 {\n      text-decoration: none;\n      vertical-align: baseline;\n      font-size: 12pt;\n      font-style: normal;\n    }\n\n    .c22 {\n      padding-top: 0pt;\n      padding-bottom: 0pt;\n      line-height: 1;\n      text-align: center;\n    }\n\n    .c19 {\n      background-color: #ffffff;\n      max-width: 468pt;\n      padding: 72pt 72pt 72pt 72pt;\n    }\n\n    .c17 {\n      orphans: 2;\n      widows: 2;\n      height: 12pt;\n    }\n\n    .c15 {\n      color: #000000;\n      font-weight: 400;\n      font-family: "Arial";\n    }\n\n    .c10 {\n      text-decoration-skip-ink: none;\n      -webkit-text-decoration-skip: none;\n      text-decoration: underline;\n    }\n\n    .c11 {\n      font-weight: 700;\n      font-family: "Arial";\n    }\n\n    .c13 {\n      margin-left: 18pt;\n      padding-left: 18pt;\n    }\n\n    .c2 {\n      font-weight: 400;\n      font-family: "Arial";\n    }\n\n    .c8 {\n      padding: 0;\n      margin: 0;\n    }\n\n    .c7 {\n      color: #1155cc;\n      text-decoration: inherit;\n    }\n\n    .c14 {\n      border: 1px solid black;\n      margin: 5px;\n    }\n\n    .c23 {\n      orphans: 2;\n      widows: 2;\n    }\n\n    .c4 {\n      margin-left: 54pt;\n      padding-left: 18pt;\n    }\n\n    .c20 {\n      color: #0000ff;\n    }\n\n    .c18 {\n      font-style: italic;\n    }\n\n    .c24 {\n      margin-left: 36pt;\n    }\n\n    .title {\n      padding-top: 24pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 36pt;\n      padding-bottom: 6pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    .subtitle {\n      padding-top: 18pt;\n      color: #666666;\n      font-size: 24pt;\n      padding-bottom: 4pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      font-style: italic;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    li {\n      color: #000000;\n      font-size: 12pt;\n      font-family: "Arial";\n    }\n\n    p {\n      margin: 0;\n      color: #000000;\n      font-size: 12pt;\n      font-family: "Arial";\n    }\n\n    h1 {\n      padding-top: 0pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 24pt;\n      padding-bottom: 0pt;\n      font-family: "Arial";\n      line-height: 1;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    h2 {\n      padding-top: 18pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 18pt;\n      padding-bottom: 4pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    h3 {\n      padding-top: 14pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 14pt;\n      padding-bottom: 4pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    h4 {\n      padding-top: 12pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 12pt;\n      padding-bottom: 2pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    h5 {\n      padding-top: 11pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 11pt;\n      padding-bottom: 2pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n\n    h6 {\n      padding-top: 10pt;\n      color: #000000;\n      font-weight: 700;\n      font-size: 10pt;\n      padding-bottom: 2pt;\n      font-family: "Arial";\n      line-height: 1;\n      page-break-after: avoid;\n      orphans: 2;\n      widows: 2;\n      text-align: left;\n    }\n  ',
          }}
        />
        <p className="c21">
          <span className="c5">THE ARQIVE PRIVACY POLICY</span>
        </p>
        <p className="c21">
          <span className="c5">07/30/2024</span>
        </p>
        <p className="c3">
          <span className="c2">At The arqive (</span>
          <span className="c11">“The arqive”</span>
          <span className="c2">&nbsp;</span>
          <span className="c11">“we”</span>
          <span className="c2">&nbsp;or&nbsp;</span>
          <span className="c11">“us”</span>
          <span className="c1">
            ), we are committed to protecting your privacy and keeping your
            information safe. This Privacy Policy applies to all of our
            Services. We hope you will take the time to look at this Privacy
            Policy, as you should when you engage with any online service.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            The arqive processes information about you in a few different ways.
            This Privacy Policy explains how we collect, use, disclose, and keep
            information that can identify you (
          </span>
          <span className="c11">“Personal Information”</span>
          <span className="c2">
            ) when you create a The arqive account and use thearqive.com browser
            platform or mobile application (the&nbsp;
          </span>
          <span className="c11">“Site”</span>
          <span className="c2">
            ), to post content to the The arqive community, including stories
            you create, comments and messages you post, and information you
            include on your profile (together with the Site, the&nbsp;
          </span>
          <span className="c11">“Services”</span>
          <span className="c1">
            ). By accessing and using the Services, you agree to this Privacy
            Policy, as it may be amended from time to time.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0 start" start={1}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">What is Personal Information?</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            "Personal Information" is any information that can identify you.
            This may include, but is not limited to, account information,
            Internet Protocol (“IP”) address, credit card information, and other
            identifying details of a personal nature.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={2}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">What We Collect</span>
            <span className="c1">:</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c10 c2">Information You Provide to Us</span>
        </p>
        <p className="c3">
          <span className="c1">
            We collect information you provide to us directly when you use the
            Services. This includes:
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-1 start" start={1}>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Account information</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; To create an account, you must provide a username and
              password. Your username is public, and it does not have to be
              related to your real name. You must also provide an email address.
              We also store your user account preferences and settings.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Content you submit</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We collect the content you submit to the Services. This
              includes your written content, including saved drafts, photos,
              posts and comments, and your reports and other communications with
              us. Your content may include text, links, images, gifs, audio
              clips, and videos.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Actions you take</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We collect information about the actions you take when
              using the Services. This includes your{" "}
            </span>
            <span className="c1">
              interactions with content, like bookmarking, hiding, and
              reporting. It also includes your interactions with other users,
              such as{" "}
            </span>
            <span className="c2">commenting, likes,</span>
            <span className="c1">
              and blocking. We collect your interactions with communities, like
              your subscriptions or moderator status.&nbsp;
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Transactional information</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; If you purchase products or services from us{" "}
            </span>
            <span className="c1">(e.g.,</span>
            <span className="c2">The arqive</span>
            <span className="c1">&nbsp;publications,</span>
            <span className="c2">The arqive</span>
            <span className="c1">&nbsp;Premium Services)</span>
            <span className="c1">, or d</span>
            <span className="c2">onate to The arqive,</span>
            <span className="c1">
              &nbsp;we will collect certain information from you, including your
              name, address, email address, and information about the product or
              service you are purchasing. Payments are processed by third-party
              payment processors (e.g., Stripe and PayPal), so please refer to
              the applicable processor’s terms and privacy policy for more
              information about how payment information is processed and stored.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Other information</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; You may choose to provide other information directly to us.
              For example, we may collect information when you fill out a form,
              participate in{" "}
            </span>
            <span className="c2">The arqive</span>
            <span className="c1">
              -sponsored activities or promotions, research surveys
            </span>
            <span className="c2">,</span>
            <span className="c1">
              apply for a job, request customer support, or otherwise
              communicate with us.
            </span>
          </li>
        </ol>
        <p className="c3">
          <span className="c0">Information We Collect Automatically</span>
        </p>
        <p className="c3">
          <span className="c1">
            When you access or use our Services, we may also automatically
            collect information about you. This includes:
          </span>
        </p>
        <ol className="c8 lst-kix_list_1-0 start" start={1}>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Log and usage data</span>
            <span className="c2 c9">.</span>
            <span className="c1">
              &nbsp; We may log information when you access and use the
              Services. This may include your IP address, user-agent string,
              browser type, operating system, referral URLs, device information
              (e.g., device IDs), pages visited, links clicked, the requested
              URL, hardware settings, and search terms.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">
              Information collected from cookies and similar technologies
            </span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may receive information from cookies, which are pieces
              of data your browser stores and sends back to us when making
              requests, and similar technologies. We use this information to
              improve your experience, understand user activity, personalize
              content and advertisements, and improve the quality of our
              Services. For example, we store and retrieve information about
              your preferred language and other settings. For more information
              on how you can disable cookies, please see “Your Preferences”
              below.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Location information</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may receive and process information about your location,
              when you choose to share such information on our Services,
              including by associating your content with a location, or we may
              derive your approximate location from other information about you,
              including your IP address.
            </span>
          </li>
        </ol>
        <p className="c3">
          <span className="c0">Information Collected from Other Sources</span>
        </p>
        <p className="c3">
          <span className="c1">
            We may receive information about you from other sources, including
            from other users and third parties, and combine that information
            with the other information we have about you. For example, we may
            receive demographic or interest information about you from third
            parties, including advertisers, and combine it with our own data
            using a common account identifier such as a hash of an email address
            or a mobile-device ID.
          </span>
        </p>
        <p className="c3">
          <span className="c10 c2">Linked services</span>
          <span className="c2 c18">.</span>
          <span className="c2">
            &nbsp; If you authorize or link other services (e.g., third-party
            apps or websites) to access your The arqive account, The arqive
            receives information about your use of that service when it uses
            that authorization. Linking services may also cause the other
            service to send us information about your account with that service.
            The arqive has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party
            websites or services. To learn how information is shared with linked
            services, see “How do we share your per
          </span>
          <span className="c2">sonal information.”</span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={3}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">Why We Use Information About You</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">We use information about you to:</span>
        </p>
        <ol className="c8 lst-kix_list_2-0 start" start={1}>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Provide, maintain, and improve the Services;
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">Research and develop new services;</span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">Help protect the safety of</span>
            <span className="c2">The arqive</span>
            <span className="c1">
              &nbsp;and our users, which includes blocking suspected spammers,
              addressing abuse, and enforcing the{" "}
            </span>
            <span className="c2">The arqive</span>
            <span className="c1">&nbsp;</span>
            <span className="c1">
              <Link
                className="c7"
                to="/Terms"
              >
                Terms of Use
              </Link>
            </span>
            <span className="c1">, this Privacy Policy, the</span>
            <span className="c1">
            &nbsp;
              <Link
                className="c7"
                to="/Terms#ContentPolicy"
              >
                Content Policy
              </Link>
            </span>
            <span className="c1">&nbsp;and our other policies;</span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Send you technical notices, updates, security alerts, invoices and
              other support and administrative messages;
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">Provide customer service;</span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Communicate with you about products, services, offers, promotions,
              and events, and provide other news and information we think will
              be of interest to you (for information about how to opt out of
              these communications, see “Your Preferences” below);
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Monitor and analyze trends, usage, and activities in connection
              with our Services;
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Personalize the Services and provide content and features that
              match user profiles or interests; and
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Respond to legal/regulatory inquiries as we believe to be required
              by applicable laws or regulatory or administrative authorities.
            </span>
          </li>
        </ol>
        <ol className="c8 lst-kix_list_6-0" start={4}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">What Can</span>
            <span className="c11">The arqive</span>
            <span className="c5">&nbsp;Members, and Others, See?</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            When you use the Services, certain information may be shared with
            other users and the public. For example:
          </span>
        </p>
        <ol className="c8 lst-kix_list_3-0 start" start={1}>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              When you submit content (such as written or photographic content
              and commen
            </span>
            <span className="c2">ts</span>
            <span className="c1">&nbsp;to the</span>
            <span className="c2">The arqive</span>
            <span className="c1">&nbsp;</span>
            <span className="c2">map and story posts</span>
            <span className="c1">
              ) to the Services, any visitors to and users of our Services will
              be able to see that content,{" "}
            </span>
            <span className="c1">the username associated</span>
            <span className="c1">
              &nbsp;with the content (unless the poster chooses to make the post
              anonymous), and the date and time you originally submitted the
              content.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              When other users view your profile, they may be able to see
              information about your activities on the Services,
            </span>
            <span className="c1">
              &nbsp;such as your username, prior posts and comments, and{" "}
            </span>
            <span className="c2">badges</span>
            <span className="c1">.</span>
            <span className="c1">
              &nbsp;If you choose to make the information public, your profile
              may also include your bookmarks/saved posts.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">We may offer social sharing features</span>
            <span className="c1">
              &nbsp;that let you share content or actions you take on our
              Services with other media. Your use of these features enables the
              sharing of certain information with your friends or the public,
              depending on the settings you establish with the third party that
              provides the social sharing feature. For more information about
              the purpose and scope of data collection and processing in
              connection with social sharing features, please visit the privacy
              policies of the third parties that provide these social sharing
              features (e.g.,&nbsp;
            </span>
            <span className="c12 c2">Tumblr</span>
            <span className="c2 c12">,&nbsp;</span>
            <span className="c12 c2">Facebook</span>
            <span className="c12 c2">, Instagram,</span>
            <span className="c2">X, and others</span>
            <span className="c1">).</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            Please note that, even when you delete your account, the posts,
            comments, and messages you submit through the Services may still be
            viewable or available on our servers. For more information, see
            “Your Preferences” below.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={5}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">
              How Do We Share Your Personal Information?
            </span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            We do not share, sell, or give away your personal information to
            third parties unless one of the following circumstances applies:
          </span>
        </p>
        <ol className="c8 lst-kix_list_4-0 start" start={1}>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">With linked services</span>
            <span className="c9 c2">.</span>
            <span className="c1">&nbsp; If you link your</span>
            <span className="c2">The arqive</span>
            <span className="c1">
              &nbsp;account with a third-party service,
            </span>
            <span className="c2">The arqive</span>
            <span className="c1">
              &nbsp;will share the information you authorize with that
              third-party service.{" "}
            </span>
            <span className="c1">
              You can control this sharing as described in "Your{" "}
            </span>
            <span className="c2">Preferences</span>
            <span className="c1">" below.</span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">With our partners</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information with vendors, consultants, and
              other service providers (but not with advertisers and ad partners)
              who need access to such information to carry out work for us. The
              partner
            </span>
            <span className="c2">s’</span>
            <span className="c1">
              &nbsp;use of personal data will be subject to appropriate
              confidentiality and security measures.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">To comply with the law</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information in response to a request for
              information if we believe disclosure is in accordance with, or
              required by, any applicable law, regulation, legal process, or
              governmental request, including, but not limited to, meeting
              national security or law enforcement requirements. To the extent
              the law allows it, we will attempt to provide you with prior
              notice before disclosing your information in response to such a
              request.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">In an emergency</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information if we believe it's necessary to
              prevent imminent and serious bodily harm to a person.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">To enforce our policies and rights</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information if we believe your actions are
              inconsistent with our Terms of Use, this Privacy Policy, the
              Content Policy,
            </span>
            &nbsp;
            <span className="c0">
              <Link className="c7" to="/Terms#ContentPolicy">
                rules
              </Link>
            </span>
            <span className="c1">, or other</span>
            <span className="c2">The arqive</span>
            <span className="c1">
              &nbsp;policies, or to protect the rights, property, and safety of
              ourselves and others.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">With our affiliates</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information between and among{" "}
            </span>
            <span className="c2">The arqive</span>
            <span className="c1">
              , and any of our parents, affiliates, subsidiaries, and other
              companies under common control and ownership.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">With your consent</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information about you with your consent or at
              your direction.
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c0">Aggregated or de-identified information</span>
            <span className="c9 c2">.</span>
            <span className="c1">
              &nbsp; We may share information about you that has been aggregated
              or anonymized such that it cannot reasonably be used to identify
              you. For example, we may show the total number of times a post has
              been{" "}
            </span>
            <span className="c2">bookmarked</span>
            <span className="c1">
              &nbsp;without identifying who the visitors were.
            </span>
          </li>
        </ol>
        <ol className="c8 lst-kix_list_6-0" start={6}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">Ads</span>
            <span className="c5">&nbsp;and Analytics Partners</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c2">We may partner with</span>
          <span className="c1">
            third-party advertisers, ad networks, and analytics providers to
            deliver advertising and content targeted to your interests and to
            better understand your use of the Services. These third parties may
            collect information sent by your computer, browser, or mobile device
            in response to a request for content, such as unique identifiers,
            your IP address, or other information about your computer or device.
            For example:
          </span>
        </p>
        <p className="c3">
          <span className="c0">Advertisers and Ad Networks</span>
        </p>
        <p className="c3">
          <span className="c2">
            Our ad partners and ad networks may use cookies and related
            technologies to collect information when ads are delivered to you on
            our Services, but The arqive does not link to or provide them with
            your actual The arqive account details. This means that The arqive
            does not share your individual account browsing habits with
            advertisers. The arqive cannot see advertisers’ cookies and
            advertisers will not see The arqive{" "}
          </span>
          <span className="c2">cookies.&nbsp;</span>
        </p>
        <p className="c3">
          <span className="c0">Analytics Partners</span>
        </p>
        <p className="c3">
          <span className="c2">We may use analytics partner</span>
          <span className="c2">s (such as&nbsp;</span>
          <span className="c10 c2">
            <a
              className="c7"
              href="https://www.google.com/policies/privacy/partners/"
            >
              Google Analytics
            </a>
          </span>
          <span className="c1">
            ) to help analyze usage and traffic for our Services. As an example,
            we may use analytics partners to analyze and measure, in the
            aggregate, the number of unique visitors to our Services.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={7}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">Where Do You Store My Information?</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            Our Services are provided from our offices in the United States,
            presently located in Los Angeles, CA and hosted on the web by
            Digital Ocean, LLC. In addition, our third-party service providers
            also may process or store your personal information on servers
            outside your country.
          </span>
        </p>
        <p className="c3">
          <span className="c1">
            The arqive makes no representations that the use or the content of
            the Site is appropriate or lawful in territories or jurisdictions
            outside of the United States or that any products are available
            outside of the United States. Use or access of this Site from
            countries or territories where the use of the Site or any of its
            content is illegal, unlawful, or violative of obscenity, privacy or
            other laws is strictly prohibited. Those who choose to access this
            Site from other countries or territories do so at their own risk and
            such users are solely responsible for compliance with applicable
            local laws and regulations, including but not limited to the General
            Data Protection Regulation (GDPR) for users from the European
            Economic Area.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={8}>
          <li className="c6 c13 c23 li-bullet-0">
            <span className="c5">How does</span>
            <span className="c11">The arqive</span>
            <span className="c5">&nbsp;protect my Personal Information?</span>
          </li>
        </ol>
        <p className="c6 c17 c24">
          <span className="c5" />
        </p>
        <p className="c3">
          <span className="c2">
            We are continuously implementing and updating physical,
            organizational, contractual, and technological security measures to
            protect your Personal Information from loss, theft, unauthorized
            access, disclosure, copying, use, or modification.{" "}
          </span>
          <span className="c2">
            For example, we use HTTPS encryption while information is being
            transmitted to protect Personal Information submitted on our Site.
            We also enforce technical and administrative access controls to
            limit which of our employees and volunteers have access to
            non-public personal information.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={9}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">Your Preferences</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            As a The arqive user, you have choices about how to protect and
            limit the collection, use, and disclosure of information about you.
          </span>
        </p>
        <p className="c3">
          <span className="c0">Accessing and Changing Your Information</span>
        </p>
        <p className="c3">
          <span className="c2">
            You can access and change certain information through the Services.
            See our&nbsp;
          </span>
          <span className="c2">FAQ&nbsp;page for more information.</span>
        </p>
        <p className="c3">
          <span className="c0">Deleting Your Account</span>
        </p>
        <p className="c3">
          <span className="c2">
            You may delete your account information at any time from the account
            settings page. When you delete your account,{" "}
          </span>
          <span className="c2">
            your profile is no longer visible to other users and disassociated
            from content you posted under that account.
          </span>
          <span className="c1">
            &nbsp;Please note, however, that the posts, comments, and messages
            you submitted prior to deleting your account will still be visible
            to others unless you first delete the specific content. We may also
            retain certain information about you as required by law or for
            legitimate business purposes after you delete your account.&nbsp;
          </span>
        </p>
        <p className="c3">
          <span className="c10 c2">Controlling the Use of</span>
          <span className="c2 c10">Cookies</span>
        </p>
        <p className="c3">
          <span className="c1">
            Most web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove or
            reject first- and third-party cookies. Please note that if you
            choose to remove or reject cookies, this could affect the
            availability and functionality of our Services.
          </span>
        </p>
        <p className="c3">
          <span className="c0">Controlling Advertising and Analytics</span>
        </p>
        <p className="c3">
          <span className="c2">
            Some analytics providers we partner with may provide specific
            opt-out mechanisms and we may provide, as needed and as available,
            additional tools and third-party services that allow you to better
            understand cookies and how you can opt-out. For example, you may
            manage the use and collection of certain information by Google
            Analytics&nbsp;
          </span>
          <span className="c10 c2 c20">
            <a className="c7" href="https://tools.google.com/dlpage/gaoptout">
              here
            </a>
          </span>
          <span className="c1">.</span>
        </p>
        <p className="c3">
          <span className="c0">Do Not Track</span>
        </p>
        <p className="c3">
          <span className="c1">
            Most modern web browsers give you the option to send a Do Not Track
            signal to the websites you visit, indicating that you do not wish to
            be tracked. However, there is no accepted standard for how a website
            should respond to this signal, and we do not take any action in
            response to this signal. Instead, in addition to publicly available
            third-party tools, we offer you the choices described in this
            Privacy Policy to manage the collection and use of information about
            you.
          </span>
        </p>
        <p className="c3">
          <span className="c0">Controlling Promotional Communications</span>
        </p>
        <p className="c3">
          <span className="c2">
            You may opt out of receiving some or all categories of{" "}
          </span>
          <span className="c2">promotional communications</span>
          <span className="c1">
            from us by following the instructions in those communications. If
            you opt out of promotional communications, we may still send you
            non-promotional communications, such as information about your
            account or your use of the Services.
          </span>
        </p>
        <p className="c3">
          <span className="c0">Controlling Mobile Notifications</span>
        </p>
        <p className="c3">
          <span className="c1">
            With your consent, we may send promotional and non-promotional push
            notifications or alerts to your mobile device. You can deactivate
            these messages at any time by changing the notification settings on
            your mobile device.
          </span>
        </p>
        <p className="c3">
          <span className="c0">Controlling Location Information</span>
        </p>
        <p className="c3">
          <span className="c1">
            If you initially consent to our collection of location information,
            you can subsequently stop the collection of this information at any
            time by changing the preferences on your mobile device.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={10}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">Information Security</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c0">Data Retention</span>
        </p>
        <p className="c3">
          <span className="c1">
            We store the information we collect for as long as it is necessary
            for the purpose(s) for which we originally collected it. We may
            retain certain information for legitimate business purposes or as
            required by law.
          </span>
        </p>
        <p className="c3">
          <span className="c0">International Data Transfers</span>
        </p>
        <p className="c3">
          <span className="c1">
            By using our Services, you understand that we may transfer some of
            the information we gather to the United States for storage purposes.
            The United States (US), European Economic Area (“EEA”) Member
            States, and other countries all have different laws. When your
            information is moved from your home country to another country, the
            laws and rules that protect your personal information in the country
            to which your information is transferred may be different from those
            in the country in which you live. For example, the circumstances in
            which law enforcement can access personal information may vary from
            country to country. In particular, if your information is in the US,
            it may be accessed by government authorities in accordance with US
            law. To the extent that The arqive is deemed to transfer personal
            information outside of the EEA, we rely separately, alternatively,
            and independently on the following legal basis to transfer your
            information:
          </span>
        </p>
        <ol className="c8 lst-kix_list_5-0 start" start={1}>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              You have consented for us to do so for a specific purpose;
            </span>
            <span className="c5">&nbsp;</span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              We need to process the information to provide you the Services,
              including to operate the Services, provide customer support and
              personalized features, and to protect the safety and security of
              the Services;
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              It satisfies a legitimate interest (which is not overridden by
              your data protection interests), such as preventing fraud,
              ensuring network and information security, enforcing our rules and
              policies, protecting our legal rights and interests, research and
              development, and marketing and promoting the Services;
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              We need to process your information to comply with our legal
              obligations; and
            </span>
          </li>
          <li className="c3 c4 li-bullet-0">
            <span className="c1">
              Necessary for the performance of the contract between{" "}
            </span>
            <span className="c2">The arqive</span>
            <span className="c1">&nbsp;and its Site users.</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c1">
            As we operate in countries worldwide (including in the US) and use
            technical infrastructure in the US to deliver services to you, in
            accordance with the contract between us, we need to transfer your
            personal information to the US. We cannot provide you with our
            services and perform our obligations to you without moving your
            personal information to the US. By providing us with information,
            you consent to your information being transferred to and processed
            in the United States.
          </span>
        </p>
        <p className="c3">
          <span className="c10 c2">Children</span>
        </p>
        <p className="c3">
          <span className="c1">
            Children under the age of 18 are not allowed to create an account,
            without permission from a verifiable parent or legal guardian.
            Additionally, if you are outside of the US, you must be over the age
            required by the laws of your country to create an account or
            otherwise use the Services, or we need to have obtained verifiable
            consent from your parent or legal guardian.
          </span>
        </p>
        <p className="c3">
          <span className="c0">Changes to This Policy</span>
        </p>
        <p className="c3">
          <span className="c1">
            We may change this Privacy Policy from time to time. If we do, we
            will let you know by revising the date at the top of the Privacy
            Policy. If we make a change to this Privacy Policy that, in our sole
            discretion, is material, we will provide you with additional notice
            (such as adding a statement to&nbsp;announcements, the front page of
            the Services or sending you a notification). We encourage you to
            review the Privacy Policy whenever you access or use our Services or
            otherwise interact with us to stay informed about our information
            practices and the ways you can help protect your privacy. By
            continuing to use our Services after Privacy Policy changes go into
            effect, you agree to be bound by the revised Privacy Policy.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={11}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">California Residents</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c2">
            If you are a California resident and have an established business
            relationship with us, you can request a notice disclosing{" "}
          </span>
          <span className="c2">
            the categories of personal information we have shared with third
            parties, for the third parties’ direct marketing purposes, during
            the preceding calendar year.
          </span>
        </p>
        <p className="c3">
          <span className="c2">
            To request a notice, please submit your request to:
            thearqive@gmail.com.
          </span>
          <span className="c2">&nbsp;</span>
        </p>
        <p className="c3">
          <span className="c2">
            If you are a California resident under 18 years old and a registered
            user, you can request that we remove content or information that you
            have posted to our Site or other online services. Note that
            fulfillment of the request may not ensure complete or comprehensive
            removal (e.g., if the content or information has been reposted by
            another user). To request removal of content or information, please
            email: thearqive@gmail.com.
          </span>
        </p>
        <p className="c3">
          <span className="c0">California Do Not Track Disclosure</span>
        </p>
        <p className="c3">
          <span className="c1">
            Some browsers have a do not track feature that lets you tell
            websites that you do not want to have your online activities
            tracked. At this time, we do not respond to browsers’ do not track
            signals, but we do provide you the option to opt out of
            interest-based advertising (IBA). To learn more about IBA or to
            opt-out of this type of advertising, visit the Network Advertising
            Initiative website and the Digital Advertising Alliance website.
            Options you select are browser- and device-specific.
          </span>
        </p>
        <ol className="c8 lst-kix_list_6-0" start={12}>
          <li className="c3 c13 li-bullet-0">
            <span className="c5">Contact Us</span>
          </li>
        </ol>
        <p className="c3">
          <span className="c2">
            If you have any questions about this Privacy Policy, please contact
            us at:&nbsp;thearqive@gmail.com.
          </span>
          <span className="c1">
            <br />
          </span>
        </p>
        <div>
          <p className="c17 c22">
            <span className="c1" />
          </p>
          <p className="c6 c17">
            <span className="c12 c15" />
          </p>
        </div>
      </>;
    </main>
  );
}
