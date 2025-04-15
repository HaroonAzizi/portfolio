import { useState, useEffect } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTerminal,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8TY1JXQTN4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8TY1JXQTN4');
            `,
          }}
        />
        <title>Contact | Haroon Azizi - Get In Touch</title>
        <meta
          name="description"
          content="Get in touch with Haroon Azizi for software development projects, collaborations, or just to say hello. Contact form and social media links available."
        />
        <meta
          name="keywords"
          content="contact Haroon Azizi, hire software developer, software development services, React developer, React Native developer, Afghanistan developer"
        />
        <link rel="canonical" href="https://haroonazizi.com/contact" />

        <meta
          property="og:title"
          content="Contact | Haroon Azizi - Get In Touch"
        />
        <meta
          property="og:description"
          content="Get in touch with Haroon Azizi for software development projects, collaborations, or just to say hello."
        />
        <meta property="og:url" content="https://haroonazizi.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Contact | Haroon Azizi" />
        <meta
          name="twitter:description"
          content="Get in touch with Haroon Azizi for software development projects or collaborations."
        />

        {/* Schema.org structured data for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Haroon Azizi",
            description:
              "Get in touch with Haroon Azizi for software development projects or collaborations",
            url: "https://haroonazizi.com/contact",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://haroonazizi.com/contact",
            },
            author: {
              "@type": "Person",
              name: "Haroon Azizi",
              email: "hi@haroonazizi.com",
              url: "https://haroonazizi.com",
            },
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-theme-text text-center max-w-2xl mx-auto font-mono">
            <span className="text-theme-accent">function </span>
            <span className="text-theme-accent-light">contact</span>
            <span className="text-white">() {`{`}</span>
            <br />
            <span className="text-theme-text-muted ml-4">
              {`// Have a question or want to work together?`}
            </span>
            <br />
            <span className="text-theme-text-muted ml-4">
              {`// I'd love to hear from you!`}
            </span>
            <br />
            <span className="text-white">{`}`}</span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-theme-accent/10 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-theme-accent" />
                    </div>
                    <div>
                      <p className="text-theme-text-muted">Email</p>
                      <a
                        href="mailto:hi@haroonazizi.com"
                        className="text-theme-text hover:text-theme-accent transition-colors"
                      >
                        hi@haroonazizi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-theme-accent/10 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-theme-accent" />
                    </div>
                    <div>
                      <p className="text-theme-text-muted">Location</p>
                      <p className="text-theme-text">Earth :)</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-theme-text mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/az_haroon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-theme-accent/10 rounded-lg flex items-center justify-center text-theme-accent hover:bg-theme-accent hover:text-white transition-all duration-300"
                    >
                      <FaSquareXTwitter />
                    </a>
                    <a
                      href="https://github.com/HaroonAzizi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-theme-accent/10 rounded-lg flex items-center justify-center text-theme-accent hover:bg-theme-accent hover:text-white transition-all duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/haroon-azizi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-theme-accent/10 rounded-lg flex items-center justify-center text-theme-accent hover:bg-theme-accent hover:text-white transition-all duration-300"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              {/* Terminal-like element */}
              <div className="terminal p-6">
                <div className="flex items-center px-2 py-1 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-theme-text-muted font-mono">
                    ~/haroon/terminal
                  </div>
                </div>
                <div className="font-mono text-sm">
                  <p className="text-theme-text-muted mb-2">$ whoami</p>
                  <p className="text-theme-text mb-4">haroon</p>
                  <p className="text-theme-text-muted mb-2">$ cat skills.txt</p>
                  <p className="text-theme-text mb-4">
                    React, React Native, Node.js, Express, MongoDB
                  </p>
                  <p className="text-theme-text-muted mb-2">
                    &apos;$ echo &quot;Let&apos;s build something amazing
                    together!&quot;
                  </p>
                  <p className="text-theme-accent">
                    Let&apos;s build something amazing together!
                  </p>
                  <p className="text-theme-text-muted mt-4 flex items-center">
                    $ <span className="animate-blink ml-2">|</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent flex items-center">
                <FaTerminal className="mr-2" />
                Send Me a Message
              </h2>

              {submitStatus.type && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-theme-text-muted mb-2 font-mono"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-theme-secondary border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-theme-text-muted mb-2 font-mono"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-theme-secondary border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-theme-text-muted mb-2 font-mono"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-theme-secondary border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-theme-text-muted mb-2 font-mono"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 bg-theme-secondary border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-modern w-full flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
