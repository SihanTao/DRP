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

export function dataHasTag(data, { tag }) {
  return data.tags[tag]
}

// TODO
export function dataAddTag(data, { tag }) {
  if (data.tags) {
    tagsAddTag(data.tags, { tag })
  } else {
    const tags = {}
    tagsAddTag(tags, { tag })
    data["tags"] = tags
  }
}

function tagsAddTag(tags, { tag }) {
  tags[tag] = true
}

// TODO
export function dataDeleteTag() {

}

export function alertTrue({x}) {
  if (x) {
    Alert.alert("exists")
  } else {
    Alert.alert("not exist")
  }
}