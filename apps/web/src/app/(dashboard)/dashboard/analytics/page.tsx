export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">Clicks Today</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">This Week</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">This Month</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">All Time</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
      </div>
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-semibold mb-4">Click Trends</h2>
        <p className="text-gray-500">No analytics data available yet.</p>
      </div>
    </div>
  );
}
