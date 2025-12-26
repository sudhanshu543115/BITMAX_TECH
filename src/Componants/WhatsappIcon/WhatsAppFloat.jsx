'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'

export default function WhatsAppFloat() {
    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative"
            >
                {/* Tooltip */}
                <div className="absolute bottom-full  mb-2! left-0 whitespace-nowrap bg-white text-[#295f98] px-3 py-1.5 rounded-full shadow-lg font-bold text-sm border border-gray-100 flex items-center gap-1">
                    Click Here.. 😉
                </div>

                {/* Button */}
                <a
                    href="https://wa.me/919211318269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:bg-[#20bd5a] transition-colors"
                >
                    <FaWhatsapp className="text-3xl text-white" />
                </a>
            </motion.div>
        </div>
    )
}
