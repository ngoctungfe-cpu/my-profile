import { motion } from "framer-motion";

export default function Hero({
  avatar,
  name,
  title,
  subtitle,
}) {
  return (
    <div className="text-center">

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px #FFD700",
            "0 0 60px #FFD700",
            "0 0 20px #FFD700",
          ],
        }}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="mx-auto w-fit rounded-full cursor-pointer"
      >
        <img
          src={avatar}
          alt={name}
          className="
          w-48
          h-48
          rounded-full
          object-cover
          transition-all
          duration-500
          "
        />
      </motion.div>

      <h1 className="mt-6 text-4xl font-bold text-yellow-400">
        {name}
      </h1>

      <p className="mt-3 text-gray-300">
        {title}
      </p>

      <p className="text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}