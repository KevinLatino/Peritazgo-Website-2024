import React from 'react';
import { Link } from 'react-router-dom';
import { MagicMotion } from "react-magic-motion";
import { motion } from 'framer-motion';

const CardComponent = ({ title, route, description, icons }) => {
  return (
    <>
      <MagicMotion>
        <Link to={route}>
          <motion.article
            whileHover={{ scale: 1.1 }}
            className='bg-[#494a4e29] border-[#444d5c] border border-1 rounded-2xl w-72 h-72 p-4'
          >
            <header className='text-[#f5e1c8] font-bold'>{title}</header>
            <hr className='h-px bg-[#444d5c] my-2.5 border-none' />
            <section className='text-[#ffffff] text-lg font-sans'>
              <p>{description}</p>
              <div className='flex justify-center bg-[#494a4e29] my-2 rounded-xl w-28'>
                {icons}
              </div>
            </section>
          </motion.article>
        </Link>
      </MagicMotion>
    </>
  );
}

export { CardComponent };
