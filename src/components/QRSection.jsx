import QRCode from "react-qr-code";

export default function QRSection() {
  return (
    <div className="mt-8 text-center">

      <h3 className="text-yellow-400 mb-4">
        Quét để truy cập
      </h3>

      <div
        className="
        bg-white
        inline-block
        p-4
        rounded-xl
        "
      >
        <QRCode
          value="https://my-profile-two-xi.vercel.app"
          size={150}
        />
      </div>

    </div>
  );
}