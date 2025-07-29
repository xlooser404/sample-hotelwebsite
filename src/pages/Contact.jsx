import { useState } from "react";
import Header from "../components/layout/Header";
import AnimatedSection from "../components/sections/AnimatedSection";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulate submission
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="px-6 sm:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
                {/* Hero Section */}
                <AnimatedSection delay={100}>
                    <section className="text-center mb-16">
                        <h1 className="text-4xl font-light text-gray-800 mb-6">Get in Touch</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We’d love to hear from you. Whether you have a question, need assistance with a booking, or want to share feedback, our team is here to help.
                        </p>
                    </section>
                </AnimatedSection>
                <AnimatedSection delay={100}>
                    {/* Contact Info & Map (Side by Side) */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        {/* Contact Details */}
                        <div>
                            <h2 className="text-2xl font-medium text-gray-800 mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Address</h3>
                                    <p className="text-gray-600 mt-1">123 Serenity Lane, Mountain View, CA 94043</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                    <p className="text-gray-600 mt-1">hello@lumehotel.com</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-800">Hours</h3>
                                    <p className="text-gray-600 mt-1">Open daily from 7:00 AM – 10:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-96">
                            <iframe
                                title="Hotel Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.0036534845231!3d40.71305797933223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Serenity%20Lane%2C%20NY!5e0!3m2!1sen!2sus!4v1619210730123!5m2!1sen!2sus"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection delay={300}>
                {/* Contact Form (Now Below Everything) */}
                <section className="bg-white p-8 md:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
                    <h2 className="text-2xl font-medium text-gray-800 mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 mb-6">Fill out the form below and we’ll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none transition ${errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none transition ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-gray-300 focus:outline-none transition ${errors.message ? "border-red-500" : "border-gray-300"
                                    }`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-900 text-white font-light rounded-md hover:bg-gray-800 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Success Message */}
                    {isSubmitted && (
                        <div className="mt-6 p-4 bg-green-50 text-green-800 rounded-md text-sm text-center animate-fade-in">
                            ✅ Thank you! We've received your message and will respond shortly.
                        </div>
                    )}
                </section>
                </AnimatedSection>
            </main>
        </div>
    );
}