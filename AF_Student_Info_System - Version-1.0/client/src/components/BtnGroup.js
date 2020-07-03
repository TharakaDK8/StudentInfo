import React, { Component } from "react";

import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class BtnGroup extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#48494F", width: "295px" }}>
        <div className="inner-link">
          <h4>Important Links</h4>
          <ul>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.transport.gov.lk"}
              >
                Ministry of Transport
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.gic.gov.lk"}
              >
                GIC
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilanka.travel"}
              >
                Tourist Board
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilankan.lk"}
              >
                SL Airlines
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilanka.lk"}
              >
                Lanka Gate
              </a>
            </li>
          </ul>
        </div>
        <br />

        <ButtonGroup
          vertical
          style={{
            marginLeft: "10px",
            height: "450px"
          }}
        >
          <Button className="btn btn-primary btn-block mt-4">ABOUT</Button>
          <Button className="btn btn-primary btn-block mt-4">CONTACT</Button>
          <Button className="btn btn-primary btn-block mt-4">FAQ</Button>
          <Button className="btn btn-primary btn-block mt-4">POLICIES</Button>
          <Button className="btn btn-primary btn-block mt-4">NOTICES</Button>
          <Button className="btn btn-primary btn-block mt-4">SERVICES</Button>
        </ButtonGroup>

        {/* <div className="inner-link">
          <h4>Important Links</h4>
          <ul>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.transport.gov.lk"}
              >
                Ministry of Transport
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.gic.gov.lk"}
              >
                GIC
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilanka.travel"}
              >
                Tourist Board
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilankan.lk"}
              >
                SL Airlines
              </a>
            </li>
            <li>
              <a
                className="alink"
                style={{ color: "white" }}
                href={"http://www.srilanka.lk"}
              >
                Lanka Gate
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default BtnGroup;
