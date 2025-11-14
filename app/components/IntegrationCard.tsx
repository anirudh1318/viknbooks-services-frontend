import { ChevronRight } from "lucide-react";

interface IntegrationCardProps {
  integration: any;
  onSelect?: (id: string) => void;
}

export default function IntegrationCard({ integration, onSelect }: IntegrationCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
      onClick={() => integration.status === 'Available' && onSelect?.(integration.id)}
    >
      {integration.popular && (
        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Popular
        </div>
      )}
      <div className={`w-16 h-16 ${integration.bgColor} rounded-xl flex items-center justify-center ${integration.textColor} mb-4 group-hover:scale-110 transition-transform`}>
        {integration.icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.name}</h3>
      <p className="text-gray-600 mb-4 text-sm">{integration.description}</p>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${integration.bgColor} ${integration.textColor}`}>
          {integration.category}
        </span>
        {integration.status === 'Available' ? (
          integration.id === 'whatsapp' ? (
            <button className="flex items-center space-x-1 text-green-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-green-600 font-semibold text-sm">Available</span>
          )
        ) : (
          <span className="text-gray-400 font-semibold text-sm">Coming Soon</span>
        )}
      </div>
    </div>
  );
}
