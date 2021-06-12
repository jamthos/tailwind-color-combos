//@ts-check
/** @typedef { import('../../types.d').StorageItem } StorageItem */
/** @typedef { import('../../types.d').ShipStorage } ShipStorage */

import { ShipStorage, StorageItem } from "../../types.d"

/** @type {ShipStorage} */
const storage = {
  max: undefined,
  items: [],
  dudes: "Hello",
}
Object.defineProperty(storage, "max", { writable: false, value: 5000 })
let currentStorage = undefined
function storageUsed() {
  if (currentStorage) {
    return currentStorage
  }
  currentStorage = 0
  for (let i = 0; i < storage.items.length; i++) {
    currentStorage += storage.items[i].weigth
  }
  return currentStorage
}

/**
 * @param {StorageItem} item
 */
function add(item) {
  if (storage.max - item.weight >= storageUsed()) {
    storage.items.push(item)
    currentStorage += item.weight
  }
}
