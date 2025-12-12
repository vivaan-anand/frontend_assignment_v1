import { motion } from "framer-motion";

export default function ScoreCard() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#e8f7fc]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-[900px] h-[500px] bg-[#e8f7fc] border-4 border-[#d44a2a] rounded-xl flex flex-col items-center justify-center"
      >
        {/* Keep Learning Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-2 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-300"
        >
          Keep Learning!
        </motion.button>

        {/* Title */}
        <h2 className="mt-8 text-3xl font-semibold text-[#0a4d5e] italic">
          Your Final score is
        </h2>

        {/* Score Number */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[100px] font-bold text-[#0a4d5e] mt-4"
        >
          62<span className="text-4xl">%</span>
        </motion.div>

        {/* Start Again Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="mt-6 px-6 py-2 bg-yellow-300 rounded-lg shadow-md border border-black font-medium"
        >
          Start Again
        </motion.button>
      </motion.div>
    </div>
  );
}
