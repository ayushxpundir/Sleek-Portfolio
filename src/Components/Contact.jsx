import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form,
                "YOUR_PUBLIC_KEY"
            );
            setStatus("Message sent! I'll get back to you soon.");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <section>
            <div className="about">
                <div className="s-head"><h1>LET'S CONNECT</h1></div>
                <div className="contact-info">
                    <h2 className="contact-title">Send a Message</h2>
                    <p className="contact-subtitle">
                        Prefer to write? Fill out the form and I'll get back to you within 24 hours.
                    </p>

                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="contact-input" />
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="contact-input" />
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} className="contact-textarea" />

                    <button onClick={handleSubmit} className="contact-button">Send Message</button>
                    {status && <p>{status}</p>}
                </div>
            </div>
        </section>
    );
}

export default Contact;