import React, { Component } from "react";
class Qeydiyyat extends Component {
  ///submite basanda console log eleyir
  state = {
    ad: "",
    seriya: "",
    cinsiyyet: "male",
    yas: "",
    email: "",
    telefon: "",
    qeyd: "",
    yeniden: false,
    post: false
  };
  addeyis = (event) => {
    this.setState({ ad: event.target.value });
  };

  seriyadeyis = (event) => {
    this.setState({ seriya: event.target.value });
  };

  cdeyis = (event) => {
    this.setState({ cinsiyyet: event.target.value });
  };

  yasdeyis = (event) => {
    this.setState({ yas: event.target.value });
  };

  emaildeyis = (event) => {
    this.setState({ email: event.target.value });
  };

  telefondeyis = (event) => {
    this.setState({ telefon: event.target.value });
  };

  qeyddeyis = (event) => {
    this.setState({ qeyd: event.target.value });
  };

  yenidenqebul = () => {
    this.setState({ yeniden: !this.state.reapply });
  };

  yolla = (event) => {
    event.preventDefault();

    this.setState({ post: true });

    Object.entries(this.state).forEach((keyValuePair) => {
      console.log("  ", ...keyValuePair);
    });
  };
  render() {
    return (
      <form>
        <label for="">
          ad
          <input type="text" value={this.state.ad} onChange={this.addeyis} />
        </label>
        <label for="">
          seriya nomresi
          <input
            type="text"
            value={this.state.seriya}
            onChange={this.seriyadeyis}
          />
        </label>
        <label htmlFor="number">
          <p>Phone:</p>
          <input
            value={this.state.telefon}
            type="text"
            onChange={this.telefondeyis}
          />
        </label>
        <label for="">
          Cinsiyyet
          <select name="" id="" onChange={this.cdeyis}>
            <option value="1">kisi</option>
            <option value="2">qadin</option>
          </select>
        </label>
        <label for="">
          yas
          <input
            type="number"
            value={this.state.yas}
            onChange={this.yasdeyis}
          />
        </label>
        <label for="">
          email
          <input
            type="email"
            value={this.state.email}
            onChange={this.emaildeyis}
          />
        </label>

        <label for="">
          simptonlari
          <textarea
            value={this.state.qeyd}
            id="note"
            onChange={this.qeyddeyis}
          ></textarea>
        </label>
        <label for="">
          tekrar qebul
          <input
            type="checkbox"
            name="reapply"
            checked={this.state.yeniden}
            onChange={this.yenidenqebul}
          />
        </label>
        <button type="submit" onClick={this.yolla}>
          Submit
        </button>
      </form>
    );
  }
}
export default Qeydiyyat;
