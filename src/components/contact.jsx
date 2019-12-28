import React from 'react';
import axios from "axios";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      status: null,
    }
    this.handleServerResponse = this.handleServerResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleServerResponse (ok, msg, form) {
    this.setState({
      submitting: false,
      status: { ok, msg },
      errors: [],
    });
    if (ok) {
      form.reset();
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    this.setState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mgeonelo",
      data: new FormData(form)
    })
      .then(r => {
        this.handleServerResponse(true, "Thanks for your email!", form);
      })
      .catch(r => {
        this.handleServerResponse(false, r.response.data.error, form);
      });
  };

  render() {
    return (
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form onSubmit={this.handleSubmit} className="form-contact contact_form">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message"></label>
                      <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} placeholder="Enter your message" defaultValue={""} required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name"></label>
                      <input className="form-control valid" name="name" id="name" type="text" placeholder="Name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email"></label>
                      <input className="form-control valid" name="email" id="email" type="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject"></label>
                      <input className="form-control" name="subject" id="subject" type="text" placeholder="Subject" required />
                    </div>
                  </div>
                </div>
                {this.state.status && (
                  <p className={!this.state.status.ok ? "errorMsg" : ""}>
                    {this.state.status.msg}
                  </p>
                )}
                <div className="form-group mt-3">
                  <button type="submit" className="button boxed-btn" disabled={this.state.submitting}>Send</button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home" /></span>
                <div className="media-body">
                  <h3>Located in</h3>
                  <p>Burlington, VT</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-mobile" /></span>
                <div className="media-body">
                  <h3>(802) 371-9247</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email" /></span>
                <div className="media-body">
                  <h3>nicholasfarnhamwinter@gmail.com</h3>
                  <p>Shoot me an email anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}