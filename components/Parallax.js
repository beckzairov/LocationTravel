export default function Parallax({ backgroundImage, children }) {
    return (
      <div
        className="bg-fixed bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    );
  }
  