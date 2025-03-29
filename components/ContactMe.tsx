import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:yeminimatan@gmail?subject={formData.subject}&body=Name: ${formData.name}, email: ${formData.email}. ${formData.message}`;
    };
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="hidden md:block absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>
            <div className="space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need. <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
                </h4>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">yeminimatan@gmail.com</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className=" outline-none font-sans bg-slate-400/40 rounded-sm border-b md:px-4 py-4 border-[#242424] text-gray-300 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A] hover:border-[#F7AB0A]/40"
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="outline-none font-sans bg-slate-400/40 rounded-sm border-b md:px-4 py-4 border-[#242424] text-gray-300 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A] hover:border-[#F7AB0A]/40"
                            type="email"
                        />
                    </div>

                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="outline-none font-sans bg-slate-400/40 rounded-sm border-b md:px-4 py-4 border-[#242424] text-gray-300 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A] hover:border-[#F7AB0A]/40"
                        type="text"
                    />
                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="outline-none font-sans bg-slate-400/40 rounded-sm border-b md:px-4 py-4 border-[#242424] text-gray-300 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A] hover:border-[#F7AB0A]/40"
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F7AB0A] py-3 md:py-5 px-6 md:px-10 rounded-md text-black font-bold text-sm md:text-base"
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
