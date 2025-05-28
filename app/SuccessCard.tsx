interface SuccessCardProps {
  onReset: () => void;
  onShare?: () => void;
  timeSpent?: number;
}

export default function SuccessCard({ onReset, onShare, timeSpent = 15 }: SuccessCardProps) {
  return (
    <div className="w-full max-w-[98vw] xs:max-w-[350px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[640px] min-h-[60vw] sm:min-h-[400px] md:min-h-[500px] rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#fa7268] to-[#fca16a] animate-fade-in">
      {/* 动态小丑表情 */}
      <div className="text-5xl sm:text-7xl mb-4 animate-wiggle">🤡</div>

      {/* 标题 */}
      <div className="text-2xl sm:text-4xl font-extrabold text-white mb-6 text-center leading-tight">
        恭喜！做局成功！
      </div>

      {/* 副标题 */}
      <div className="text-base sm:text-xl font-bold text-white mb-4 text-center flex items-center justify-center flex-wrap gap-2">
        <span>你的时间成功被资本浪费了</span>
        <span className="bg-white/30 rounded-xl px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-xl font-extrabold">
          {timeSpent}秒
        </span>
      </div>

      {/* 说明 */}
      <div className="text-sm sm:text-lg text-white/90 mb-8 flex items-center gap-2">
        <span className="text-lg sm:text-xl">📊</span> 资本家笑了，韭菜哭了
      </div>

      {/* 按钮区 */}
      <div className="flex flex-row sm:flex-row gap-4 w-full max-w-full lg:max-w-2xl justify-center">
        <button
          className="flex-1 h-11 sm:h-12 md:h-14 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-sm sm:text-base md:text-lg font-bold shadow-lg flex items-center justify-center gap-3 transition text-gray-800 shimmer-effect"
          onClick={onReset}
        >
          <span className="text-base sm:text-lg md:w-auto md:text-xl">🔄再来一次</span> 
        </button>
        <button 
          className="flex-1 h-11 sm:h-12 md:h-14 md:w-auto rounded-2xl border-2 border-white/40 bg-white/20 text-sm sm:text-base md:text-lg font-bold text-white flex items-center justify-center gap-3 transition hover:bg-white/30 shimmer-effect"
          onClick={onShare}
        >
          <span className="text-base sm:text-lg md:text-xl">📢</span> 分享给朋友
        </button>
      </div>
    </div>
  );
}