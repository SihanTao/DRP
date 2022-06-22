import React from "react";
import { Alert } from "react-native";
import { share_all_tags_coll_name, share_all_tags_doc_name, share_coll_name, share_tags_coll_name } from "../constants/ShareCons";
import { addSingleDataToFireStore, deleteFieldInFireStore, mergeSingleDataToFireStore, ReadDocFromFireStore } from "./databaseReadWrite";

/**
 * Automatically adds the doc(wiki) to database and register it with the tags.
 * @param doc The doc(wiki) needs to have doc.tags
 */
export function addDocAndTags(doc) {
  Object.keys(doc.tags).map((tag) => {
    addDocUnderTag({ doc_name: doc.name, tag })
  })
  addSingleDataToFireStore(doc, {
    coll_name: share_coll_name,
    doc_name: doc.name,
  })
}

// TODO: think about problems when updating doc with tags

/**
 * Returns all relevant tags of the given documents.
 * @param {*} doc_names names of documents {name1:true, name2:true...}
 * @param {*} result    result.tags will be the return value
 */
export async function allRelevantTags(doc_names, result) {
  result["tags"] = {}
  const tags = result.tags
  for (let doc_name of Object.keys(doc_names)) {
    const doc_res = {}
    await ReadDocFromFireStore(doc_res, {
      coll_name: share_coll_name,
      doc_name
    })
    const doc = doc_res.data
    Object.keys(doc.tags).map((tag) => {
      tags[tag] = true
    })
  }
}

/**
 * Reads all documents that has the tag. Documents are saved at docs.data
 * @param docs    used to save the results
 * @param tag     the tag
 */
export async function readDocsWithTag(docs, {tag}) {
  await ReadDocFromFireStore(docs, {
    coll_name: share_tags_coll_name,
    doc_name: tag,
  })
}

/**
 * Register the document with the tag in database. Note that data.name is the key
 * @param doc_name  the document (or piece of data)
 * @param tag       the tag
 */
export function addDocUnderTag({ doc_name, tag }) {
  const newTagInfo = {}
  newTagInfo[doc_name] = {
    coll_name: share_coll_name,
    doc_name: doc_name,
  }
  mergeSingleDataToFireStore(
    newTagInfo,
    {
      coll_name: share_tags_coll_name,
      doc_name: tag,
    }
  )
  addTagToTags({tag})
}

/**
 * Deletes the document from the tag's collection in database.
 * @param doc_name document name
 * @param tag      tag name
 */
export function deleteDocUnderTag({ doc_name, tag }) {
  deleteFieldInFireStore({
    coll_name: share_tags_coll_name,
    doc_name: tag,
    field_name: doc_name,
  })
  removeTagIfEmpty({tag})
}

/* THIS FUNCTION IS NOT TESTED YET */
/** Records the tag to a document that saves all tags in database */
function addTagToTags({tag}) {
  const newTag = {};
  newTag[tag] = true;
  mergeSingleDataToFireStore(
    newTag,
    {
      coll_name: share_all_tags_coll_name,
      doc_name: share_all_tags_doc_name,
    }
  )
}

/* THIS FUNCTION IS NOT TESTED YET */
/** Deletes the tag from all_tags if no document has this tag */
async function removeTagIfEmpty({tag}) {
  const docs = {}
  await readDocsWithTag(docs, {tag})
  if (docs.data) {
    if (Object.keys(docs.data).length == 0) {
      deleteTagFromTags({tag})
    }
  }
}

/* THIS FUNCTION IS NOT TESTED YET */
/** Deletes the tag from a document that saves all tags in database */
function deleteTagFromTags({tag}) {
  deleteFieldInFireStore({
    coll_name: share_all_tags_coll_name,
    doc_name: share_all_tags_doc_name,
    field_name: tag,
  })
}

/**
 * Returns whether the document is under the tag.
 * @param doc_name document name
 * @param tag      tag name
 * @returns {boolean} A boolean value
 */
export async function checkDocTag({ doc_name, tag }) {
  const doc = {}
  await readDocsWithTag(doc, {tag})
  if (doc.data) {
    if (doc.data[doc_name]) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

/**
 * Filters documents that doesn't has the tag in docs (in place filter)
 * @param docs  The docs that will be filtered
 * @param tag   The tag used to filter
 */
export async function filterDocsUnderTag(docs, {tag}) {
  const tagDoc = {}
  await readDocsWithTag(tagDoc, {tag})
  Object.keys(docs).map((doc_name) => {
    if (tagDoc) {
      if (tagDoc.data[doc_name]) {
        // do nothing if both tags contain the same doc
      } else {
        docs[doc_name] = undefined
      }
    } else {
      docs[doc_name] = undefined
    }
  })
}

/**
 * Filters documents that doesn't has the tags in docs (in place filter)
 * @param docs  The docs that will be filtered
 * @param tags  The tags used to filter
 */
export async function filterDocsUnderTags(docs, tags) {
  const keys = Object.keys(tags)
  for (let tag of Object.keys(tags)) {
    await filterDocsUnderTag(docs, {tag})
  }
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