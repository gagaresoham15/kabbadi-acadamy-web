'use client';

import React, { useState, useMemo } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  title?: string;
  data: T[];
  columns: Column<T>[];
  searchKey?: keyof T;
  searchPlaceholder?: string;
  filterKey?: keyof T;
  filterOptions?: string[];
  filterPlaceholder?: string;
  onAddNew?: () => void;
  addNewLabel?: string;
  pageSize?: number;
}

export function DataTable<T extends { id?: string | number }>({
  title,
  data,
  columns,
  searchKey,
  searchPlaceholder = 'Search records...',
  filterKey,
  filterOptions = [],
  filterPlaceholder = 'All Categories',
  onAddNew,
  addNewLabel = 'Add New',
  pageSize = 6,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered & Searched data
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filter matching
      if (filterKey && filterValue !== 'ALL') {
        const itemVal = String(item[filterKey] || '');
        if (itemVal.toLowerCase() !== filterValue.toLowerCase()) {
          return false;
        }
      }

      // Search matching
      if (searchKey && searchTerm.trim() !== '') {
        const val = String(item[searchKey] || '').toLowerCase();
        return val.includes(searchTerm.toLowerCase());
      }

      return true;
    });
  }, [data, filterKey, filterValue, searchKey, searchTerm]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  return (
    <div className="bg-[#171F2B] border border-white/5 rounded-2xl overflow-hidden shadow-card space-y-4 p-5 sm:p-6">
      {/* Top Bar: Title, Search, Filter & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {title && <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>}

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          {/* Search box */}
          {searchKey && (
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-[#AAB2BD] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={searchPlaceholder}
                className="w-full bg-[#101C2C] border border-white/10 rounded-full pl-9 pr-3 py-1.5 text-xs text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A] transition-all"
              />
            </div>
          )}

          {/* Filter dropdown */}
          {filterKey && filterOptions.length > 0 && (
            <div className="relative">
              <select
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full sm:w-auto bg-[#101C2C] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF6B1A] cursor-pointer"
              >
                <option value="ALL">{filterPlaceholder}</option>
                {filterOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#101C2C]">{opt}</option>
                ))}
              </select>
            </div>
          )}

          {/* Add New Button */}
          {onAddNew && (
            <Button size="sm" glow onClick={onAddNew} className="text-xs px-4 w-full sm:w-auto justify-center">
              <Plus className="w-3.5 h-3.5 mr-1" /> {addNewLabel}
            </Button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#101C2C]/50">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#121A24] text-[#AAB2BD] uppercase tracking-wider font-semibold border-b border-white/5">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={`py-3.5 px-4 ${col.className || ''}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-[#AAB2BD]">
                  No matching records found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIdx) => (
                <tr key={row.id ? String(row.id) : rowIdx} className="hover:bg-white/[0.02] transition-colors">
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className={`py-3 px-4 ${col.className || ''}`}>
                      {col.cell ? col.cell(row) : col.accessorKey ? String(row[col.accessorKey] ?? '') : null}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between text-xs text-[#AAB2BD] pt-2">
        <span>
          Showing {filteredData.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to{' '}
          {Math.min(currentPage * pageSize, filteredData.length)} of {filteredData.length} records
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg bg-[#101C2C] border border-white/5 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2 font-bold text-white">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg bg-[#101C2C] border border-white/5 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
