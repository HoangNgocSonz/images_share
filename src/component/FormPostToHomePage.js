import React, { Component } from "react";
import axios from "axios";
import "./FormPostToHomePage.css";
import Select from "./Select";
import { Row, Col, Container } from "react-bootstrap";

export default class FormPostToHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.user = JSON.parse(localStorage.user);
  }

  componentDidMount() {}
  post = () => {
    var imageLinkString = document.getElementById("imgLink").value;
    var imageLinkList = imageLinkString.split(",");
    axios
      .post("https://travel-share-backend.herokuapp.com/api/post", {
        author: this.user._id,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        images: imageLinkList,
        date: new Date(),
        season: document.getElementById("season").value,
        country: document.getElementById("country").value,
      })
      .then((res) => {
        console.log(res.data);
        console.log(document.getElementById("title").value);
      })
      .catch((err) => console.log("err: " + err));
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="form">
          <div className="top">
            <span>Tạo bài viết</span>
            <img
              src={require("../access/x-png-18.png")}
              onClick={this.props.hideForm}
            ></img>
          </div>
          <div className="middle">
            <img src={this.user.avatar}></img>
            <input type="text" id="title" placeholder="Tiêu đề"></input>
            <textarea
              id="description"
              className="textarea"
              rows="2"
              cols="40"
              placeholder="Bạn đang nghĩ gì ?"
            ></textarea>
          </div>
          <div className="hrDiv">
            <div className="hr"></div>
          </div>
          <div className="bottom">
            <Row>
              <Col>
                <div className="addImg">
                  <img src={require("../access/img.png")}></img>
                  <input id="imgLink" placeholder="Link ảnh"></input>
                </div>
              </Col>
              <Col>
                <div className="addTime">
                  <select className="select-time" id="season">
                    <option>Mùa xuân</option>
                    <option>Mùa Hạ</option>
                    <option>Mùa thu</option>
                    <option>Mùa đông</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="addLocation">
                  <select class="select-location" id="country">
                    <option value="0" selected="selected">
                      Quốc gia
                    </option>
                    <option>Afghanistan</option>
                    <option>Ả Rập Ai Cập</option>
                    <option>Albania</option>
                    <option>Algérie</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Anh và Bắc Ireland</option>
                    <option>Antigua và Barbuda</option>
                    <option>Áo</option>
                    <option>Ả Rập Xê Út</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Azerbaijan</option>
                    <option>Ấn Độ</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Ba Lan</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Bắc Macedonia</option>
                    <option>Belarus</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bhutan</option>
                    <option>Bỉ</option>
                    <option>Bolivia</option>
                    <option>Bosna và Hercegovina</option>
                    <option>Botswana</option>
                    <option>Bồ Đào Nha</option>
                    <option>Bờ Biển Ngà</option>
                    <option>Brazil</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cabo Verde</option>
                    <option>Cameroon</option>
                    <option>Campuchia</option>
                    <option>Canada</option>
                    <option>Chile</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Công-gô</option>
                    <option>Costa Rica</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Đan Mạch</option>
                    <option>Đông Timor</option>
                    <option>Đức</option>
                    <option>Ecuador</option>
                    <option>El Salvador</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Eswatini</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Ghana</option>
                    <option>Grenada</option>
                    <option>Gruzia</option>
                    <option>Guatemala</option>
                    <option>Guiné-Bissau</option>
                    <option>Guinea Xích Đạo</option>
                    <option>Guinée</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Hà Lan</option>
                    <option>Hàn Quốc</option>
                    <option>Hoa Kỳ</option>
                    <option>Honduras</option>
                    <option>Hungary</option>
                    <option>Hy Lạp</option>
                    <option>Iceland</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Jamaica</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Kosovo</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Lào</option>
                    <option>Latvia</option>
                    <option>Lesotho</option>
                    <option>Liban</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Maroc</option>
                    <option>Marshall</option>
                    <option>Mauritanie</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mông Cổ</option>
                    <option>Montenegro</option>
                    <option>Mozambique</option>
                    <option>Myanmar</option>
                    <option>Namibia</option>
                    <option>Nam Sudan</option>
                    <option>Nam Phi</option>
                    <option>Nauru</option>
                    <option>Na Uy</option>
                    <option>Nepal</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>Nga</option>
                    <option>Nhật Bản</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Palestine</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Pháp</option>
                    <option>Phần Lan</option>
                    <option>Philippines</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts và Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent và Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>São Tomé và Príncipe</option>
                    <option>Séc</option>
                    <option>Sénégal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Síp</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon</option>
                    <option>Somalia</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Syria</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Tây Ban Nha</option>
                    <option>Tchad</option>
                    <option>Thái Lan</option>
                    <option>Thổ Nhĩ Kỳ</option>
                    <option>Thụy Điển</option>
                    <option>Thụy Sĩ</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Triều Tiên</option>
                    <option>Trinidad và Tobago</option>
                    <option>Trung Quốc</option>
                    <option>Trung Phi</option>
                    <option>Tunisia</option>
                    <option>Turkmenisan</option>
                    <option>Tuvalu</option>
                    <option>Úc</option>
                    <option>Uganda</option>
                    <option>Ukraina</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Vatican</option>
                    <option>Venezuela</option>
                    <option>Việt Nam</option>
                    <option>Ý</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>
              </Col>
            </Row>
            <button className="post" onClick={this.post}>
              Đăng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
