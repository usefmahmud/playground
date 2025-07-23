import VirtualizedList from "@/components/features/virtualized-list/virtualized-list";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VirtualizedListPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [itemsCount, setItemsCount] = useState(100);
  const [withVirtualization, setWithVirtualization] = useState(true);

  useEffect(() => {
    const generatedItems = Array.from(
      { length: itemsCount },
      (_, i) => `Item ${i + 1}`
    );
    setItems(generatedItems);
  }, [itemsCount]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with navigation */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-slate-300"></div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold text-slate-900">
                  Virtualized List
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Virtualized List Example
          </h2>
          <p className="text-slate-600 mb-6">
            This example demonstrates a virtualized list component that only
            renders the visible items in a long list, improving performance.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="text-center font-bold text-lg">
                items: {itemsCount}
              </div>
              <input
                type="range"
                className="w-full my-5 mb-10"
                min={1}
                value={itemsCount}
                max={100000}
                onChange={(e) => setItemsCount(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="inline-flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  checked={withVirtualization}
                  onChange={(e) => setWithVirtualization(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-sm text-slate-700">
                  Enable Virtualization
                </span>
              </label>
            </div>
          </div>
          <div className="border flex justify-center border-slate-200 rounded-lg p-4 bg-slate-50">
            <VirtualizedList items={items} withVirtualization={withVirtualization} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualizedListPage;
