import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FAQSection.css";
import questionMarkImage from "../assets/qusetion-mark.png";
import Loading from "./Loading";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/contact");
    }, 3000);
  };

  const faqItems = [
    {
      question: "Q1: What does your company do?",
      answer:
        "A: We specialize in developing cutting-edge software solutions that leverage the power of artificial intelligence (AI) and nanotechnology. Our products are designed to improve efficiency, enhance performance, and drive innovation across various industries.",
    },
    {
      question: "Q2: What industries do you serve?",
      answer:
        "A: Our solutions cater to a wide range of industries, including healthcare, manufacturing, finance, telecommunications, and more. Our versatile technology can be customized to meet the unique needs of different sectors.",
    },
    {
      question: "Q3: How does AI enhance your software solutions?",
      answer:
        "A: AI enables our software to analyze vast amounts of data, identify patterns, and make intelligent decisions. This results in smarter, more efficient, and more accurate solutions that can adapt to changing conditions and improve over time.",
    },
    {
      question: "Q4: What types of software solutions do you offer?",
      answer:
        "A: We offer a variety of software solutions, including predictive analytics, process automation, data management, and real-time monitoring systems. Each solution is designed to address specific challenges and deliver measurable results.",
    },
    {
      question: "Q5: How does nanotechnology play a role in your products?",
      answer:
        "A: Nanotechnology allows us to create highly precise and efficient components at a microscopic scale. This enhances the performance and capabilities of our software, enabling us to deliver solutions that are faster, more reliable, and more innovative.",
    },
    {
      question:
        "Q6: Can your software be customized to fit our specific needs?",
      answer:
        "A: Absolutely. Our team works closely with clients to understand their unique requirements and tailor our solutions accordingly. We believe in providing personalized solutions that align with your business goals.",
    },
    {
      question:
        "Q7: How long does it take to implement your software solutions?",
      answer:
        "A: The implementation timeline varies depending on the complexity of the solution and the specific needs of your organization. We work diligently to ensure a smooth and timely deployment, with minimal disruption to your operations.",
    },
    {
      question: "Q8: What kind of support do you offer post-implementation?",
      answer:
        "A: We provide comprehensive support services, including technical assistance, regular updates, and maintenance. Our dedicated support team is always available to address any issues and ensure your software continues to perform optimally.",
    },
    {
      question: "Q9: Do you offer training for our staff?",
      answer:
        "A: Yes, we offer training programs to help your staff understand and effectively use our software solutions. Our training sessions are designed to be user-friendly and can be customized to suit different skill levels.",
    },
    {
      question: "Q10: How secure are your software solutions?",
      answer:
        "A: Security is a top priority for us. Our software solutions are built with robust security features, including encryption, authentication, and regular security audits, to protect your data and ensure compliance with industry standards.",
    },
    {
      question: "Q11: Do your solutions comply with industry regulations?",
      answer:
        "A: Yes, our solutions are designed to comply with relevant industry regulations and standards. We stay updated with the latest regulatory requirements to ensure our products meet all necessary compliance criteria.",
    },
    {
      question: "Q12: How do you stay ahead of technological advancements?",
      answer:
        "A: We invest heavily in research and development to stay at the forefront of technological innovation. Our team continuously explores new AI and nanotechnology advancements to integrate into our solutions and deliver state-of-the-art products.",
    },
    {
      question: "Q13: What are your future plans for product development?",
      answer:
        "A: We are committed to evolving our solutions to meet the ever-changing needs of our clients. Our future plans include expanding our AI capabilities, enhancing our nanotechnology applications, and exploring new markets to bring our innovative solutions to a broader audience.",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="faq-section">
          <button onClick={handleGetStarted} className="get-started-btn2">
            Get Started
          </button>

          <div className="faq-header-container">
            <img
              src={questionMarkImage}
              alt="Question Mark"
              className="faq-icon"
            />
            <h2 className="faq-header">Frequently Asked Question</h2>
            <p className="faq-subheading">
              Here you can find answers to frequently asked questions about
              PROGNIL
            </p>
          </div>

          <div className="faq-question">
            {faqItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="faq-item">
                  <h3 onClick={() => toggleAnswer(index)} className="faq-title">
                    {item.question}
                  </h3>
                  <p
                    className={`faq-answer ${
                      activeQuestion === index ? "active" : ""
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
                {index < faqItems.length - 1 && <hr className="faq-divider" />}
              </React.Fragment>
            ))}
          </div>

          <div className="faq-footer">
            <p>
              Can’t find the answers you’re looking for?{" "}
              <a href="mailto:contact@prognil.com" className="faq-link">
                You can reach out to our friendly team!
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQSection;
