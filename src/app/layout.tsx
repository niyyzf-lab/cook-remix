"use client";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Navigator from "./_Component/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className="flex flex-col h-screen">
            <div className="flex flex-col">
              <Icon
                icon="solar:sun-line-duotone"
                className="hover:text-yellow-400 self-end mx-2 mt-2 text-2xl"
              />
            </div>
            <div className="flex-grow flex w-full">{children}</div>
            <div>
              <Navigator />
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}