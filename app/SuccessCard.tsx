interface SuccessCardProps {
  onReset: () => void;
  onShare?: () => void;
  timeSpent?: number;
}

export default function SuccessCard({ onReset, onShare, timeSpent = 15 }: SuccessCardProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#fa7268] to-[#fca16a] rounded-3xl shadow-xl p-16 animate-fade-in">
      {/* 动态小丑表情 */}
      <div className="text-7xl mb-4 animate-wiggle">🤡</div>

      {/* 标题 */}
      <div className="text-4xl font-extrabold text-white mb-6 text-center leading-tight">
        恭喜！做局成功！
      </div>

      {/* 副标题 */}
      <div className="text-xl font-bold text-white mb-4 text-center flex items-center justify-center flex-wrap gap-2">
        <span>你的时间成功被资本浪费了</span>
        <span className="bg-white/30 rounded-xl px-4 py-2 text-xl font-extrabold">
          {timeSpent}秒
        </span>
      </div>

      {/* 说明 */}
      <div className="text-lg text-white/90 mb-8 flex items-center gap-2">
        <span className="text-xl">📊</span> 资本家笑了，韭菜哭了
      </div>

      {/* 按钮区 */}
      <div className="flex gap-4 w-full max-w-[400px] justify-center">
        <button
          className="flex-1 h-16 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-xl font-bold shadow-lg flex items-center justify-center gap-3 transition text-gray-800"
          onClick={onReset}
        >
          <span className="text-2xl">🔄</span> 再来一次
        </button>
        <button 
          className="flex-1 h-16 rounded-2xl border-2 border-white/40 bg-white/20  text-xl font-bold text-white flex items-center justify-center gap-3 transition hover:bg-white/30"
          onClick={onShare}
        >
          <span className="text-2xl">📢</span> 分享给朋友
        </button>
      </div>
    </div>
  );
}