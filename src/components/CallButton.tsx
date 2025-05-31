
import { PhoneCall } from 'lucide-react';

export const CallButton = () => {
  const handleCall = () => {
    window.location.href = 'tel:972820905';
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-24 right-6 bg-taller-blue text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40 animate-pulse"
      aria-label="Trucar al taller"
    >
      <PhoneCall className="h-6 w-6" />
    </button>
  );
};
