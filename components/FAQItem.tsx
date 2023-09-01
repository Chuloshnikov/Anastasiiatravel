import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div
        className='flex flex-col gap-2 max-w-[800px] p-4 [bg-[#749CBA] text-yellow-900 mx-auto cursor-pointer'
        >
         <motion.div
        className="text-white text-lg"
        initial={false}
        onClick={toggleOpen}
        
      >
        {question}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="answer text-white"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQItem;