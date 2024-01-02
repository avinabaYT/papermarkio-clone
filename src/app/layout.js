import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Papermark",
    description: "Papermark | The Open Source DocSend Alternative",
};

export default function RootLayout({ children }) {
    console.log("inter", inter.className);
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
