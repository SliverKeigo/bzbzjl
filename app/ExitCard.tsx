interface ExitCardProps {
  onReturn: () => void;
}

export default function ExitCard({ onReturn }: ExitCardProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#fa7268] to-[#fca16a] rounded-3xl shadow-xl p-23 animate-fade-in">
      {/* X 图标 */}
      <div className="mb-8">
        <svg 
          className="w-20 h-20 text-red-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </div>

      {/* 标题 */}
      <div className="text-4xl font-extrabold text-white mb-6 text-center leading-tight">
        无法退出
      </div>

      {/* 副标题 */}
      <div className="text-xl font-bold text-white mb-12 text-center">
        资本的力量不允许你轻易逃脱
      </div>

      {/* 返回按钮 */}
      <div className="flex justify-center w-full">
        <button
          className="px-12 py-4 rounded-2xl border-2 border-white/40 bg-white/20 text-xl font-bold text-white flex items-center justify-center transition hover:bg-white/30"
          onClick={onReturn}
        >
          返回
        </button>
      </div>
    </div>
  );
}