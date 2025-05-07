'use client';

// Function to get all menu categories
export function getCategories() {
  const menuData = require('../data/menu.json');
  return menuData.categories;
}

// Function to get all menu items
export function getAllMenuItems() {
  const menuData = require('../data/menu.json');
  return menuData.items;
}

// Function to get menu items by category
export function getMenuItemsByCategory(category) {
  const menuData = require('../data/menu.json');
  if (category === 'all') {
    return menuData.items;
  }
  return menuData.items.filter(item => item.category === category);
}

// Function to get featured menu items
export function getFeaturedMenuItems() {
  const menuData = require('../data/menu.json');
  return menuData.items.filter(item => item.featured);
}

// Function to get a menu item by ID
export function getMenuItemById(id) {
  const menuData = require('../data/menu.json');
  return menuData.items.find(item => item.id === id);
}
