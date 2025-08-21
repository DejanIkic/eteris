import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

import EmailForm from "../form/email";

const ContactItem = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex items-start">
            <div>
                <h4 className=" text-bold">{title}</h4>
                <p className="">{description}</p>
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-foreground text-background py-16 px-4 sm:px-6"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <EmailForm />

                {/* Contact Information */}
                <div className=" p-8 rounded-xl  text-background">
                    <h3 className="text-5xl font-light  mb-6 ">
                        Kontaktirajte nas!
                    </h3>

                    <div className="space-y-6 ">
                        <ContactItem
                            title="Email"
                            description="info@eterisevents.com"
                        />

                        <ContactItem
                            title="Call us"
                            description="+1 (234) 567-890"
                        />

                        <ContactItem
                            title="Visit us"
                            description="123 Event Street"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
