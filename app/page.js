import AppHeader from "@/components/AppHeader";
import IntroSection from "@/components/IntroSection";
import ProductSummationSection from "@/components/ProductSummationSection";
import OpenAIChatSection from "@/components/OpenAIChatSection";
import AppFooter from "@/components/AppFooter";

export default function Home() {
  return (
    <>
      <AppHeader title="認識 React States" />
      {/* 自我介紹產生器 */}
      <IntroSection />
      {/* 商品總價計算機 */}
      <ProductSummationSection />
      {/* 與AI聊天 */}
      <OpenAIChatSection />
      <AppFooter />
    </>
  );
}
