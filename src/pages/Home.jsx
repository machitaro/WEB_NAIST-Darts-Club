import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { OpeningVideo } from "@/components/OpeningVideo";
import { Mainvisual } from "@/components/Mainvisual";
import { ContentSection } from "@/components/ContentSection";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export const Home = ({ menuItems }) => {

const CONTENT_SECTIONS = [
  {
    id: "about",
    title: "ABOUT",
    content: "NAISTダーツ倶楽部は奈良先端科学技術大学院大学の認定課外活動団体です。\n一投一投に込める想いとブルに命中した時の歓声が響き渡る瞬間は、何物にも代えがたいダーツの醍醐味です。\n毎週木曜日に研修ホールで活動を行っています。興味をお持ちの方はお気軽にご連絡ください。新しい仲間をいつでも歓迎します🕺🏽",
    img: "./img/about.jpg",
    page: { title: "contact →", link: "/contact" }
  },
  {
    id: "what",
    title: "WHAT'S DARTS?",
    content: "ダーツは円形の的（ダーツボード）に向かって矢（ダーツ）を投げ、得点を競う競技です。1300年代の中世イギリスに起源を持ち、兵士たちがワイン樽に向けて矢を投げて楽しんでいた娯楽から発展したと言われています。\nダーツは的の中心を狙う正確な技術、得点計算に基づく戦略的思考、そして緊張に打ち勝つ精神力が求められます。初心者から上級者までそれぞれのレベルで楽しめる親しみやすさを持ちながら、プロの試合ともなれば選手の緊張感が場内に満ちる奥深い競技として世界中で愛されています。",
    img: "./img/what.jpg",
    page: { title: "rule →", link: "/rule" }
  },
  {
    id: "access",
    title: "ACCESS",
    content: "〒630-0192\n奈良県生駒市高山町8916番地の5\n学際融合領域研究棟2号館1階\n研修ホール",
    img: "./img/access.jpg",
    page: { title: "contact →", link: "/contact" }
  }
];

  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const hasHash = window.location.hash !== '';

    if (hasHash) {
      setIsVideoEnded(true);
      setIsPlaying(false);
      return;
    }
  
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("ビデオの再生に失敗しました:", error);
        setIsPlaying(false);
        setIsVideoEnded(true);
      });
    }
  }, []);
  
  useEffect(() => {
    if (isVideoEnded) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      }, options);
  
      const sections = document.querySelectorAll('.fade-section');
      sections.forEach(section => {
        observer.observe(section);
      });
  
      return () => observer.disconnect();
    }
  }, [isVideoEnded]);
  
  const onClickToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onClickCloseMenu = () => setIsMenuOpen(false);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      
      setTimeout(() => {
        setIsPlaying(false); 
        setTimeout(() => {
          setIsVideoEnded(true);   
        }, ANIMATION.FADE_DURATION);
      }, ANIMATION.PAUSE_DURATION);
    }
  };

  const ANIMATION = {
    FADE_DURATION: 1500,
    PAUSE_DURATION: 1000
  };


  return (
    <>
      {!isVideoEnded && (
        <OpeningVideo
          fadeduration={ANIMATION.FADE_DURATION}
          videoRef={videoRef}
          onEnded={handleVideoEnd}
          isPlaying={isPlaying}
        />
      )}
      {isVideoEnded && (
        <div className="fade-section">
          <div className="relative h-screen flex flex-col">
            <Header onClickToggleMenu={onClickToggleMenu} />
            <Menu 
              isMenuOpen={isMenuOpen} 
              onClickCloseMenu={onClickCloseMenu} 
              menuItems={menuItems}
            />
            <Mainvisual/>
            <ScrollIndicator />
          </div>
          {CONTENT_SECTIONS.map(section => (
            <ContentSection
              key={section.id}
              id={section.id}
              title={section.title}
              content={section.content}
              img={section.img}
              page={section.page}
            />
          ))}
          <Footer />
        </div>
      )}
    </>
  );
};