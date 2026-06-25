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
          w-32
          h-32
          rounded-full
          object-cover
          transition-all
          duration-500
          "
        />
      </motion.div>

      <h1 className="mt-3 text-3xl font-bold text-yellow-400">
        {name}
      </h1>

      <p className="mt-1 text-gray-300">
        {title}
      </p>

      <p className="text-gray-500 text-sm">
        {subtitle}
      </p>

    </div>
  );
}