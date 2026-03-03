export default function QRCodesPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">QR Codes</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
          Generate QR Code
        </button>
      </div>
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <p className="text-gray-500">No QR codes yet. Create a link to generate QR codes.</p>
      </div>
    </div>
  );
}
