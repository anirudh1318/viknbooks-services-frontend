import { MessageCircle, Mail, CreditCard, ShoppingCart, Calendar, Cloud, Database, Truck, Package } from "lucide-react";

export const integrations = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    icon: <MessageCircle className="w-8 h-8" />,
    description: 'Send invoices, reminders, and updates directly to customers',
    category: 'Communication',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    popular: true,
    status: 'Available'
  },
  {
    id: 'email',
    name: 'Email Marketing',
    icon: <Mail className="w-8 h-8" />,
    description: 'Automate email campaigns and customer communications',
    category: 'Communication',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    popular: false,
    status: 'Coming Soon'
  },
  // Add more integrations here...
];
