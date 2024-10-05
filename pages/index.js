import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [favicon, setFavicon] = useState('🍛');

  useEffect(() => {
    const changeFavicon = () => {
      setFavicon(prevFavicon => prevFavicon === '🍛' ? '🌯' : '🍛');
    };

    const intervalId = setInterval(changeFavicon, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Curry or Burrito</title>
        <meta name="description" content="Meet people for Curry or for Burrito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`} />
      </Head>
      <div style={{maxWidth: 600}}>
        <p>Curry or Burrito</p>
        <b>Login/Signup here:</b><br/>
        <input placeholder="place email here"/><button>Join</button>

        <p>Curry or Burrito is a tool to meet people. Instead of lengthy text conversations, you can only send one message to the new people you meet: "Curry or Burrito". This is arguably the most important question you can ask.</p>
        <p>Curry or Burrito is starting only for people in the bay area</p>

        <p><b>requests you've received:</b></p>
        <p>not logged in
        </p>
        <p><b>requests you've sent:</b></p>
        <p>not logged in
        </p>
        <p><b>current users:</b></p>
        <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
          <p style={{margin: 0}}>thomas. 19. soma.</p>
          <button>curry or burrito</button>
        </div>
      </div>
    </>
  );
}