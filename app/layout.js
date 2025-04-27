import "./globals.css";

export const metadata = {
  title: "อร่อยเด็ด - ร้านอาหารรสชาติเยี่ยม",
  description: "ร้านอาหารไทยรสชาติดั้งเดิม ใช้วัตถุดิบคุณภาพดี สดใหม่ทุกวัน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
