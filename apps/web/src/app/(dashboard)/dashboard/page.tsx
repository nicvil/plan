export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">Total Links</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">Total Clicks</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">Active QR Codes</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
      </div>
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Links</h2>
        <p className="text-gray-500">No links yet. Create your first link to get started.</p>
      </div>
    </div>
  );
}
