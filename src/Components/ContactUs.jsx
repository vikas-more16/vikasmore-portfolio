import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail as MailFeather } from "react-feather";
import { Linkedin, Phone, MapPin, Mail, Github } from "lucide-react";

function ContactUs() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  console.log(serviceId, templateId, publicKey);

  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setSuccess("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSuccess("Failed to send message. Try again.");
      }
    );
  };
  return (
    <section id="contact" className="py-5 bg-card min-vh-100 overflow-hidden">
      <div className="container">
        <h2 className="font-serif font-black display-5 text-center mb-5 mt-4 text-foreground text-glow">
          Get In Touch
        </h2>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="mb-4">
              <h3 className="font-bold h2 text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="fs-5 text-muted-custom mb-4 lh-lg">
                Ready to bring your next project to life? I'm always excited
                about new challenges and innovative solutions. Let's discuss how
                we can turn your vision into reality.
              </p>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <Mail className=" text-primary-custom  " />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a
                    href="mailto:vikas1662005@gmail.com"
                    className="text-primary-custom text-decoration-none"
                  >
                    vikas1662005@gmail.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <Phone className="text-primary-custom" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+919067718922"
                    className="text-primary-custom text-decoration-none"
                  >
                    +91 9067718922
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(0, 212, 255, 0.2)",
                  }}
                >
                  <MapPin className="text-primary-custom" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Location</p>
                  <p className="text-muted-custom mb-0">
                    SSGMCE, Shegaon, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 pt-3">
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vikasmore16",
                    "_blank"
                  )
                }
              >
                <Linkedin className="me-2" />
                LinkedIn
              </button>
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={() =>
                  window.open("https://github.com/vikas-more16", "_blank")
                }
              >
                <Github className="me-2" />
                GitHub
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title text-foreground h3 mb-2">
                  Send a Message
                </h5>
                <p className="text-muted-custom mb-0">
                  I'll get back to you within 24 hours
                </p>
              </div>
              <div className="card-body">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Project discussion"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-2"
                  >
                    <MailFeather className="me-2 mb-1" />
                    Send Message
                  </button>
                </form>
                {success && <p className="mt-2 text-success">{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
