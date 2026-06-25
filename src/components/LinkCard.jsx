export default function LinkCard({
  title,
  icon: Icon,
  url,
}) {
  const getIconColor = () => {
    switch (title) {
      case "Facebook":
        return "#1877F2";

      case "TikTok":
        return "#FFFFFF";

      case "Zalo":
        return "#0068FF";

      case "Email":
        return "#EA4335";

      case "Phone":
        return "#22C55E";

      default:
        return "#FFD700";
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
      flex
      items-center
      gap-4

      p-4

      rounded-2xl

      border
      border-yellow-500/20

      bg-white/5

      backdrop-blur-xl

      hover:bg-yellow-500/10

      hover:scale-[1.02]

      transition-all
      duration-300
      "
    >
      <Icon
        size={24}
        style={{
          color: getIconColor(),
        }}
      />

      <span className="font-medium">
        {title}
      </span>

      <span className="ml-auto text-yellow-400">
        →
      </span>
    </a>
  );
}