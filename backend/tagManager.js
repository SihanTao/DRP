import React from "react";
import { Alert } from "react-native";

// TODO
export function addDocUnderTag() {

}

// TODO
export function deleteDocUnderTag() {

}

// TODO
export function checkDocTag() {

}

// TODO
export function filterDocsUnderTag() {

}

// TODO
export function filterDocsUnderTags() {

}

/** Determines if data.tags.tag exists */
export function dataHasTag(data, { tag }) {
  return data.tags[tag]
}


function tagsAddTag(tags, { tag }) {
  tags[tag] = true
}

function tagsRmvTag(tags, { tag }) {
  tags[tag] = undefined
}

/** Make sure data.tags.tag exists */
export function dataAddTag(data, { tag }) {
  if (data.tags) {
    tagsAddTag(data.tags, { tag })
  } else {
    const tags = {}
    tagsAddTag(tags, { tag })
    data["tags"] = tags
  }
}

/** Make sure data.tags.tag doesn't exist */
export function dataRmvTag(data, { tag }) {
  if (data.tags) {
    tagsRmvTag(data.tags, { tag })
  } else {
    const tags = {}
    tagsRmvTag(tags, { tag })
    data["tags"] = tags
  }
}

/** Just for debug purpose */
export function alertTrue({x}) {
  if (x) {
    Alert.alert("exists")
  } else {
    Alert.alert("not exist")
  }
}