import QRCode from "react-qr-code";

export default function GameQR() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-1">
      <div className="bg-white p-2 rounded-xl shadow-lg">
        <QRCode value="https://bubble-game-kappa-black.vercel.app" size={100} />
      </div>
      <span className="text-[10px] text-yellow-400 font-semibold text-center leading-tight">
        Quét để chơi
        <br />
        game giải trí
      </span>
    </div>
  );
}
