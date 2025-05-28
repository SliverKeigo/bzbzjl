"use client";
import Image from "next/image";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern"
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import SuccessCard from "./SuccessCard";
import ExitCard
 from "./ExitCard";

export default function Home() {
  const { theme } = useTheme()
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const [isDone, setIsDone] = useState(false);
  const [lastStep, setLastStep] = useState(0);
  const [showExit, setShowExit] = useState(false);

  const progressSteps = [
    "正在准备资本布局...",
    "正在分析市场情况...",
    "正在调动资金流向...",
    "正在操控舆论风向...",
    "正在布置关键节点...",
    "正在启动收割程序...",
    "正在实施最终计划...",
    "做局即将完成...",
  ];

  // 计算当前应该显示到第几条
  const currentStep = Math.floor((progress / 100) * progressSteps.length);

  // 进度条动画
  useEffect(() => {
    if (showProgress) {
      setProgress(0);
      setIsDone(false);
      const start = Date.now();
      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = Math.min(100, (elapsed / 15000) * 100);
        setProgress(percent);
        if (percent >= 100 && progressRef.current) {
          clearInterval(progressRef.current);
          setIsDone(true);
        }
      }, 100);
      return () => {
        if (progressRef.current) clearInterval(progressRef.current);
      };
    }
  }, [showProgress]);

  useEffect(() => {
    if (currentStep !== lastStep) {
      setLastStep(currentStep);
    }
  }, [currentStep, lastStep]);

  // 重置
  const handleReset = () => {
    setShowProgress(false);
    setIsDone(false);
    setProgress(0);
  };

  // 分享功能
  const handleShare = () => {
    // 这里可以添加分享逻辑
    console.log("分享功能");
  };

  const handleExit = () => {
    setShowExit(true);
  };

  // 从退出页面返回
  const handleReturn = () => {
    setShowExit(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <InteractiveGridPattern />
      <div className="absolute inset-0 flex items-center justify-center">
        {isDone ? (
          // 完成状态 - 使用独立的成功卡片组件
          <div className="max-w-[500px] w-full min-h-[500px] rounded-3xl shadow-xl">
            <SuccessCard
              onReset={handleReset}
              onShare={handleShare}
              timeSpent={15}
            />
          </div>
        ) : showExit ? (
          // 退出状态 - 使用退出卡片组件
          <div className="max-w-[500px] w-full min-h-[500px] rounded-3xl shadow-xl">
            <ExitCard onReturn={handleReturn} />
          </div>
        ) : (
          // 初始状态和进度状态
          <MagicCard
            gradientColor={theme === "dark" ? "#6C4DD6" : "#8B5CF6"}
            className="relative max-w-[500px] w-full min-h-[500px] rounded-3xl flex flex-col items-center bg-white shadow-xl p-8"
          >
            {/* 头像 */}
            <div className="flex justify-center w-full mb-8">
              <div className="rounded-full shadow-lg ring-4 ring-white overflow-hidden w-24 h-24 bg-white">
                <Image src="/avatar.png" width={96} height={96} alt="avatar" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 标题 */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-center text-[#6C4DD6] tracking-wide">资本做局器</h1>
            </div>

            {/* 按钮区/进度条区 */}
            {showProgress ? (
              <div className="flex flex-col items-center w-full max-w-[300px] mt-auto mb-8">
                <span className="mb-2 text-lg font-medium text-[#6C4DD6]">做局进度</span>
                <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner relative flex items-center shimmer-effect">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 text-sm font-bold text-[#6C4DD6] select-none">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="mt-6 w-full text-center text-[#6C4DD6] text-base font-medium min-h-[1.5em] relative h-6">
                  <span
                    key={currentStep}
                    className="absolute left-1/2 -translate-x-1/2 w-full animate-fade-in-up"
                  >
                    {progressSteps[currentStep]}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8 justify-center w-full min-w-[300px] max-w-[600px] mt-auto mb-8">
                <button
                  className="w-full h-14 text-lg font-bold flex items-center justify-center gap-3 rounded-2xl shadow-lg text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition shimmer-effect"
                  onClick={() => setShowProgress(true)}
                >
                  🎯 开始做局
                </button>
                <button className="w-full h-14 text-lg font-bold flex items-center justify-center gap-3 rounded-2xl shadow-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition border border-gray-200  shimmer-effect"
                  onClick={handleExit}
                >
                  🚪 退出
                </button>
              </div>
            )}
          </MagicCard>
        )}
      </div>
    </div>
  )
}