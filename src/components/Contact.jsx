import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef();
    const containerRef = useRef();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [hasCopied, setHasCopied] = useState(false);

    useGSAP(() => {
        gsap.from('.contact-card', {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            }
        });
    }, { scope: containerRef });

    const handleCopy = () => {
        navigator.clipboard.writeText('prashantbhandaricr07@gmail.com');

        setHasCopied(true);

        setTimeout(() => setHasCopied(false), 2000);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setMessage('Message sent successfully!');

            formRef.current.reset();

        } catch (error) {

            console.log(error);

            setMessage('Something went wrong.');

        }

        setLoading(false);

        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
       <section className='c-space my-20 overflow-hidden' id='contact' ref={containerRef}>
            <p className='head-text text-white mb-12'>Get In Touch</p>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch w-full'>
                
                {/* Left Side: Original grid4 asset, description text, and direct copy-paste component */}
                <div className='contact-animate-left grid-container justify-between h-full'>
                    <img src="/assets/grid4.png" alt="Contact banner" loading="lazy" className='w-full md:h-[230px] h-full object-cover rounded-lg' />
                    
                    <div className='my-4 flex-1 flex flex-col justify-center'>
                        <p className='text-2xl font-semibold text-white mb-2 mt-2 font-generalsans'>Let's build something together</p>
                        <p className='grid-subtext'>
                            Whether you have a fullstack position open, a project in mind, or just want to discuss 3D web animations, my inbox is always open.
                        </p>
                    </div>

                    <div className='bg-black-300 border border-black-400 rounded-xl p-4 mt-auto'>
                        <p className='text-xs text-neutral-400 uppercase tracking-wider mb-2 text-center lg:text-left'>Click below to copy email address</p>
                        <div className='copy-container bg-black-200 p-3 rounded-lg flex justify-center items-center gap-3 border border-neutral-800 transition-all active:scale-98' onClick={handleCopy}>
                            <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy status icon" className='w-5 h-5' />
                            <p className='text-white font-medium text-sm md:text-base break-all selection:bg-transparent'>prashantbhandaricr07@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form Area */}
                <div className='contact-animate-right grid-container h-full'>
                    <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4 h-full w-full justify-between'>
                        <label className='flex flex-col gap-2'>
                            <span className='text-white font-medium text-sm font-generalsans'>Your Name</span>
                            <input type="text" name="user_name" required className='w-full bg-black-300 border border-black-400 text-white text-sm rounded-lg p-3 outline-none focus:border-white transition-colors' placeholder="John Doe" />
                        </label>

                        <label className='flex flex-col gap-2'>
                            <span className='text-white font-medium text-sm font-generalsans'>Your Email</span>
                            <input type="email" name="user_email" required className='w-full bg-black-300 border border-black-400 text-white text-sm rounded-lg p-3 outline-none focus:border-white transition-colors' placeholder="johndoe@gmail.com" />
                        </label>

                        <label className='flex flex-col gap-2 flex-1'>
                            <span className='text-white font-medium text-sm font-generalsans'>Your Message</span>
                            <textarea name="message" required rows="5" className='w-full bg-black-300 border border-black-400 text-white text-sm rounded-lg p-3 outline-none focus:border-white resize-none min-h-[120px] transition-colors' placeholder="Hi, I checked your projects and wanted to connect regarding..." />
                        </label>

                        <button type="submit" disabled={loading} className='bg-white text-black font-semibold rounded-lg px-5 py-3 mt-2 hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95 text-sm md:text-base'>
                            {loading ? 'Sending Message...' : 'Send Message'}
                        </button>

                        {message && (
                            <p className={`text-sm text-center font-medium mt-1 ${message.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                                {message}
                            </p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;