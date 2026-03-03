export default function LinksPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Links</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
          Create Link
        </button>
      </div>
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <p className="text-gray-500">No links yet. Create your first link to get started.</p>
      </div>
    </div>
  );
}
