import Link from "next/link";
import { integrations } from "@/lib/integrations";

interface Props {
  params: { id: string };
}

export default function IntegrationDetailPage({ params }: Props) {
  const integration = integrations.find(i => i.id === params.id);

  if (!integration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Integration not found</h1>
          <Link href="/" className="mt-4 inline-block text-blue-600">Back to Integrations</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-sm text-blue-600">← Back</Link>
      <h1 className="text-3xl font-bold mt-4">{integration.name}</h1>
      <p className="mt-2 text-gray-600">{integration.description}</p>
      <p className="mt-4 text-sm text-gray-500">Category: {integration.category}</p>
      <div className="mt-6">
        {integration.status === 'Available' ? (
          <Link href={integration.id === 'whatsapp' ? '/whatsapp' : `/integration/${integration.id}`} className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Started</Link>
        ) : (
          <span className="px-4 py-2 bg-gray-200 text-gray-500 rounded-lg">Coming Soon</span>
        )}
      </div>
    </main>
  );
}

