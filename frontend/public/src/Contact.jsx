import React from 'react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    const students = [
        {
            name: 'Dr. Pramod T C',
            phone: "+91 7667677891",
            major: 'B.E, M.Tech, Ph.D',
            description: 'Assistant Professor of CSE Dept. SIT Tumkur.',
        },
        {
            name: 'Arif A',
            phone: "+91 7259110820",
            major: 'CSE (1SI21CS402)',
            description: 'Student at SIT, Tumkur.',
        },
        {
            name: 'Aditya K M',
            phone: "+91 7259110820",
            major: 'CSE (1SI21CS003)',
            description: 'Student at SIT, Tumkur.',
        },
        {
            name: 'Muzaffar M Motiwale',
            phone: "+91 7259110820",
            major: 'CSE (1SI21CS064)',
            description: 'Student at SIT, Tumkur.',
        },
    ];

    return (<>
        <div className="wrapper">
            <Header />
            <div className="content_contact">
                <div className="contact_top1 ">
                    <h1>Contact Us</h1>
                    <div className="contact_top1_sub">
                        {students.map((student, index) => (
                            <div key={index} className="contact_card">
                                <h2>{student.name}</h2>
                                <p><span>{student.major}</span></p>
                                <p><strong>Phone:</strong> {student.phone}</p>
                                <p>{student.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
           <div className="contact_footer">
           <Footer />
            </div>         
        
        </>
    );
};

export default About;
