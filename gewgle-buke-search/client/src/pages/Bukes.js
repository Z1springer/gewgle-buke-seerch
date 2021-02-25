import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Bukes() {
  const [bukes, setBukes] = useState([]);
  const [bukeTing, setBukeTing] = useState({});

  useEffect(() => {
    lodeBukes();
  }, []);

  // loads all of the books and sets them to bukes
  function lodeBukes() {
    API.getBukes()
      .then((res) => setBukes(res.data))
      .catch((err) => console.log(err));
  }
}

export default Bukes;
