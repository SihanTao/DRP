import React from "react"
import { getAllTags } from "../backend/tagManager"

export const shared_tabs = {
  categories: []
}

/**
 * Get all valid tags from database and return a list of tabs
 * @param tabs tabs.categories gets the result
 */
export async function sharedTabs(tabs) {
  console.log("[i] sharedTabs.sharedTabs")
  const tags = {}
  await getAllTags(tags)
  tabs["categories"] = []
  if (tags.data) {
    Object.keys(tags.data).map((key) => {
      tabs.categories.push({id: key, title: key})
    })
  }
}