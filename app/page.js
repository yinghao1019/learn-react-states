import Navbar from "@/components/Navbar";
import AppHeader from "@/components/AppHeader";
import SectionIntro from "@/components/SectionIntro";
import SectionProductSummation from "@/components/SectionProductSummation";
import SectionFortuneDrawer from "@/components/SectionFortuneDrawer";
import SectionOpenAIChat from "@/components/SectionOpenAIChat";
import AppFooter from "@/components/AppFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <AppHeader title="認識 React States" />
      {/* 自我介紹產生器 */}
      <SectionIntro />
      {/* 商品總價計算機 */}
      <SectionProductSummation />
      {/* 抽張幸運籤 */}
      <SectionFortuneDrawer />
      {/* 與AI聊天 */}
      <SectionOpenAIChat />
      <AppFooter />
    </>
  );
}
