'use client';

import React, { useState, useEffect } from "react";
import {
  Warehouse,
  Package,
  ChevronRight,
  ChevronDown,
  Box,
  Search,
} from "lucide-react";
import godownsData from "./godowns.json";
import itemsData from "./items.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Godown {
  id: string;
  name: string;
  parent_godown: string | null;
}

interface Item {
  item_id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
  status: string;
  godown_id: string;
  brand: string;
  attributes: {
    [key: string]: any;
  };
  image_url: string;
}

interface GodownNode extends Godown {
  children: GodownNode[];
  items: Item[];
}

interface GodownHierarchyProps {
  onItemSelect?: (item: Item) => void;
}

const GodownHierarchy: React.FC<GodownHierarchyProps> = ({ onItemSelect }) => {
  const [hierarchy, setHierarchy] = useState<GodownNode[]>([]);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  useEffect(() => {
    const buildHierarchy = (godowns: Godown[]): GodownNode[] => {
      const godownMap: { [key: string]: GodownNode } = {};
      const rootNodes: GodownNode[] = [];

      godowns.forEach((godown) => {
        godownMap[godown.id] = { ...godown, children: [], items: [] };
      });

      godowns.forEach((godown) => {
        if (godown.parent_godown === null) {
          rootNodes.push(godownMap[godown.id]);
        } else {
          const parent = godownMap[godown.parent_godown];
          if (parent) {
            parent.children.push(godownMap[godown.id]);
          }
        }
      });

      itemsData.forEach((item) => {
        const godown = godownMap[item.godown_id];
        if (godown) {
          godown.items.push(item);
        }
      });

      return rootNodes;
    };

    setHierarchy(buildHierarchy(godownsData));
  }, []);

  const toggleNode = (id: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = itemsData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const renderNode = (node: GodownNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    return (
      <div key={node.id} style={{ marginLeft: `${level * 16}px` }}>
        <div
          className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => toggleNode(node.id)}
        >
          {node.children.length > 0 || node.items.length > 0 ? (
            isExpanded ? (
              <ChevronDown size={16} className="text-gray-400 mr-2" />
            ) : (
              <ChevronRight size={16} className="text-gray-400 mr-2" />
            )
          ) : (
            <span className="w-4 mr-2"></span>
          )}
          <Warehouse size={16} className="text-gray-400 mr-2" />
          <span className="text-sm">{node.name}</span>
        </div>
        {isExpanded && (
          <>
            {node.children.map((child) => renderNode(child, level + 1))}
            {node.items.map((item) => renderItem(item))}
          </>
        )}
      </div>
    );
  };

  const renderItem = (item: Item) => (
    <button
      key={item.item_id}
      className={`ml-8 flex items-center p-2 hover:bg-gray-700 rounded ${
        selectedItem?.item_id === item.item_id ? "bg-gray-600" : ""
      }`}
      onClick={() => handleItemClick(item)}
    >
      <Package size={14} className="text-gray-400 mr-2" />
      <div className="flex flex-col text-left">
        <span className="text-sm">{item.name}</span>
        <span className="text-xs text-gray-400">
          Qty: {item.quantity} | Price: ${item.price.toFixed(2)} | Status:{" "}
          {item.status}
        </span>
      </div>
    </button>
  );

  return (
    <>
      <div className="mb-6 mt-12 lg:mt-0">
        <h2 className="text-2xl font-bold mb-4">Search here</h2>
        <form onSubmit={handleSearch} className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-700 text-white placeholder-gray-400 border-gray-600"
          />
          <Button type="submit" className="w-full">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
      <div className="text-white overflow-y-auto max-h-[calc(100vh-200px)] p-4">
        <div className="flex items-center mb-4">
          <Box size={24} className="text-gray-400 mr-2" />
          <h2 className="text-xl font-semibold">
            {searchResults.length > 0 ? "Search Results" : "Godown Hierarchy"}
          </h2>
        </div>
        {searchResults.length > 0 ? (
          searchResults.map((item) => renderItem(item))
        ) : (
          hierarchy.map((node) => renderNode(node))
        )}
      </div>
    </>
  );
};

export default GodownHierarchy;