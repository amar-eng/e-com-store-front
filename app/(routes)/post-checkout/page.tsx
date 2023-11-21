'use client';

import { motion } from 'framer-motion'; // For animations
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const PostCheckout = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        // variants={variants}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className="flex items-center justify-center bg-white rounded-full p-5 shadow-lg"
      >
        <CheckCircle className="h-16 w-16 text-green-600" />
      </motion.div>

      <h1 className="mt-5 text-3xl font-semibold text-gray-800">
        Thank You for Your Purchase!
      </h1>

      <p className="mt-2 text-lg text-gray-600 text-center">
        A confirmation email has been sent to your inbox. <br />
        Please check your email for details about your purchase.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-5 px-5 py-2 bg-orange-600 text-white rounded-lg shadow"
        onClick={() => router.push(`/`)}
      >
        Continue Shopping
      </motion.button>
    </div>
  );
};

export default PostCheckout;
