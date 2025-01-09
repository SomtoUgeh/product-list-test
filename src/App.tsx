import React from 'react';
import type { Product } from './types';

function App() {
  // TODO: Implement state management for:
  // - products
  // - loading state
  // - error handling
  // - search term
  // - sorting
  // - category filtering

  // TODO: Implement data fetching from https://dummyjson.com/products

  // TODO: Implement filtering and sorting logic

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product List</h1>
        
        {/* TODO: Implement search input */}
        
        {/* TODO: Implement category filter */}
        
        {/* TODO: Implement price sorting */}

        {/* TODO: Implement product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your product cards here */}
        </div>
      </div>
    </div>
  );
}

export default App;