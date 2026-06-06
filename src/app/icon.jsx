import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#27272c", // Tumhara contact form waala dark background
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff", // W white text
          fontWeight: "700",
          borderRadius: "6px", // Chota sa smooth border radius
          border: "1px solid rgba(255, 255, 255, 0.1)", // Halka sa border outline
        }}
      >
        R<span style={{ color: "#00ff99" }}>K</span> {/* K ya dot ko tum apne accent color me rakh sakte ho */}
      </div>
    ),
    { ...size }
  );
}