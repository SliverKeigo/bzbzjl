interface ExitCardProps {
  onReturn: () => void;
}

export default function ExitCard({ onReturn }: ExitCardProps) {
  return (
    <div className="w-full max-w-[98vw] xs:max-w-[350px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[800px] xl:max-w-[1000px] min-h-[60vw] sm:min-h-[400px] md:min-h-[500px] rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#fa7268] to-[#fca16a] animate-fade-in">
      {/* X 图标 */}
      <div className="mb-6 sm:mb-8">
        <svg 
          className="w-14 h-14 sm:w-20 sm:h-20 text-red-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </div>

      {/* 标题 */}
      <div className="text-2xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6 text-center leading-tight">
        无法退出
      </div>

      {/* 副标题 */}
      <div className="text-base sm:text-xl font-bold text-white mb-8 sm:mb-12 text-center">
        资本的力量不允许你轻易逃脱
      </div>

      {/* 返回按钮 */}
      <div className="flex justify-center w-full">
        <button
          className="px-6 sm:px-10 md:px-12 py-3 sm:py-4 rounded-2xl border-2 border-white/40 bg-white/20 text-base sm:text-xl font-bold text-white flex items-center justify-center transition hover:bg-white/30"
          onClick={onReturn}
        >
          返回
        </button>
      </div>
    </div>
  );
}