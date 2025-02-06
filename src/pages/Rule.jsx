import { useState, useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { GameCarousel } from "../components/GameCarousel";
import { RuleContent } from "../components/RuleContent";

export const Rule = ({ menuItems }) => {
  const gameRules = [
    {
      title: "COUNT-UP",
      sections: {
        appeal: {
          title: "ゲームの魅力",
          points: [
            "シンプルなルール",
            "自己ベスト更新時の達成感",
            "数値で実感できる技術の向上"
          ]
        },
        win: {
          title: "勝利条件",
          points: [
            "8ラウンド終了時点で、持ち点が相手より高いこと",
          ]
        },
        flow: {
          title: "ゲームの流れ",
          points: [
            "持ち点0からスタート",
            "各ラウンド3本のダーツを投げる",
            "獲得した点数を持ち点に加算する",
            "全プレイヤーが8ラウンドを投げ終えたら終了"
          ]
        }
      }
    },
    {
      title: "01",
      sections: {
        appeal: {
          title: "ゲームの魅力",
          points: [
            "ピンポイントでエリアを狙うときの緊張感",
            "トリプル、ダブル、ブルで勝負を決めた時の高揚感",
            "残り点数に応じた柔軟なアレンジ"
          ]
        },
        win: {
          title: "勝利条件",
          points: [
            "持ち点をピッタリ0点にすること",
            "全ラウンド終了時点で持ち点が相手より低いこと"
          ]
        },
        flow: {
          title: "ゲームの流れ",
          points: [
            "301（または501、701、901、1101、1501）点からスタート",
            "各ラウンド3本のダーツを投げる",
            "獲得した得点を持ち点から引く",
            "持ち点が0を下回ったら「BUST」となり、前のラウンド終了時点の持ち点にリセット",
            "いずれかのプレイヤーが勝利条件1を達成するか全プレイヤーが全ラウンドを投げ終えたら終了"
          ]
        }
      }
    },
    {
      title: "CRICKET",
      sections: {
        appeal: {
          title: "ゲームの魅力",
          points: [
            "攻守の切り替えによる戦略性",
            "相手の状況に応じた駆け引き",
            "最後まで残る逆転の可能性"
          ]
        },
        win: {
          title: "勝利条件",
          points: [
            "全てのクリケットナンバー（15-20とブル）をクローズ&持ち点が相手より高いこと",
            "全ラウンド終了時点で持ち点が最も高いこと"
          ]
        },
        flow: {
          title: "ゲームの流れ",
          points: [
            "各ラウンド3本のダーツを投げる",
            "クリケットナンバーに3マークで「オープン」となり、以降そのエリアに矢が当たると得点が入る ※シングル…1マーク ダブル…2マーク トリプル…3マーク",
            "オープンしたエリアに3マークで「クローズ」となり、以降そのエリアは無効となる",
            "いずれかのプレイヤーが勝利条件1を達成するか全プレイヤーが全ラウンドを投げ終えたら終了"
          ]
        }
      }
    }
  ];

  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrentGameIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <MainLayout menuItems={menuItems}>
      <div className="flex-col justify-center mx-auto md:mt-5">
        <GameCarousel 
          games={gameRules}
          setApi={setApi}
        />
        <RuleContent gameData={gameRules[currentGameIndex]} />
      </div>
    </MainLayout>
  );
};