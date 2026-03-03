export default function UTMBuilderPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">UTM Builder</h1>
      <div className="max-w-2xl space-y-6">
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Website URL</label>
            <input
              type="url"
              placeholder="https://example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Source</label>
            <input
              type="text"
              placeholder="e.g. google, newsletter, twitter"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Medium</label>
            <input
              type="text"
              placeholder="e.g. cpc, email, social"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Name</label>
            <input
              type="text"
              placeholder="e.g. spring_sale"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Term</label>
            <input
              type="text"
              placeholder="e.g. running+shoes (optional)"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Campaign Content</label>
            <input
              type="text"
              placeholder="e.g. logolink (optional)"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-background-dark"
            />
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-semibold mb-2">Generated URL</h2>
          <p className="text-sm text-gray-500 font-mono break-all">
            Enter a URL and campaign parameters above
          </p>
        </div>
      </div>
    </div>
  );
}
