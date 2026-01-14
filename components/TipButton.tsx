import React from 'react';

interface TipButtonProps {
  amounts: number[];
  selected?: number;
  onTip: (amount: number) => void;
}

const TipButton: React.FC<TipButtonProps> = ({ amounts = [1, 5, 10, 50], selected, onTip }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl backdrop-blur-sm border border-white/10">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => onTip(amount)}
          className={`px-4 py-3 rounded-xl font-bold text-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-2xl transform ${
            selected === amount
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white ring-4 ring-blue-200/50 shadow-2xl scale-105 hover:scale-110'
              : 'bg-white/10 text-white/90 hover:bg-white/20 hover:scale-105 ring-1 ring-white/20 hover:ring-white/40'
          }`}
        >
          ${amount}
        </button>
      ))}
    </div>
  );
};

export default TipButton;
