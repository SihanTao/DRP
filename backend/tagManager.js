import React from "react";
import { Alert } from "react-native";
import { share_all_tags_coll_name, share_all_tags_doc_name, share_coll_name, share_tags_coll_name } from "../constants/ShareCons";
import { addSingleDataToFireStore, deleteFieldInFireStore, deleteSingleDataFromFireStore, mergeSingleDataToFireStore, ReadDocFromFireStore } from "./databaseReadWrite";

/**
 * Automatically adds the doc(wiki) to database and register it with the tags.
 * Evenif you don't want to set noUpdateTag, you need to call this function as
 * "addDocAndTags(x, {})"
 * @param doc The doc(wiki) needs to have doc.tags
 * @param noUpdateTag
 *   defaults to false. If set to true, this function doesn't update tags.
 */
export async function addDocAndTags(doc) {
  const doc_recv = {}
  await ReadDocFromFireStore(doc_recv, {
    coll_name: share_coll_name,
    doc_name: doc.name,
  })
  if (doc_recv.data && doc_recv.data.tags) {  // if document already exists
    const tags = doc_recv.data.tags
    if (doc.tags) {
      Object.keys(doc.tags).map((tag) => {  // Bind new tags with doc
        if (!tags[tag]) {
          addDocUnderTag({ doc_name: doc.name, tag })
        }
      })
      Object.keys(tags).map((tag) => {  // Unbind deleted tags with doc
        if (!doc.tags[tag]) {
          deleteDocUnderTag({ doc_name: doc.name, tag })
        }
      })
    }
    await addSingleDataToFireStore(doc, {
      coll_name: share_coll_name,
      doc_name: doc.name,
    })
  } else {
    await addSingleDataToFireStore(doc, {
      coll_name: share_coll_name,
      doc_name: doc.name,
    })
    Object.keys(doc.tags).map((tag) => {
      addDocUnderTag({ doc_name: doc.name, tag })
    })
  }
}

export async function mergeDocAndTags(doc) {
  const doc_recv = {}
  await ReadDocFromFireStore(doc_recv, {
    coll_name: share_coll_name,
    doc_name: doc.name,
  })
  if (doc_recv.data && doc_recv.data.tags) {  // if document already exists
    const tags = doc_recv.data.tags
    if (doc.tags) {
      Object.keys(doc.tags).map((tag) => {  // Bind new tags with doc
        if (!tags[tag]) {
          addDocUnderTag({ doc_name: doc.name, tag })
        }
      })
      Object.keys(tags).map((tag) => {  // Unbind deleted tags with doc
        if (!doc.tags[tag]) {
          deleteDocUnderTag({ doc_name: doc.name, tag })
        }
      })
    }
    await mergeSingleDataToFireStore(doc, {
      coll_name: share_coll_name,
      doc_name: doc.name
    })
  } else {
    addDocAndTags(doc)
  }
}

export async function deleteDocAndTags({doc_name}) {
  const doc_recv = {}
  await ReadDocFromFireStore(doc_recv, {
    coll_name: share_coll_name,
    doc_name
  })
  const doc = doc_recv.data
  const tags = doc.tags
  Object.keys(tags).map((tag) => {
    deleteDocUnderTag({ doc_name, tag })
  })
  deleteSingleDataFromFireStore({
    coll_name: share_coll_name,
    doc_name
  })
}

// TODO: think about problems when updating doc with tags

export async function getAllTags(tags) {
  await ReadDocFromFireStore(tags, {
    coll_name: share_all_tags_coll_name,
    doc_name: share_all_tags_doc_name,
  })
}

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
  const refs = {}
  docs["data"] = {}
  await ReadDocFromFireStore(refs, {
    coll_name: share_tags_coll_name,
    doc_name: tag,
  })
  const docRefs = refs.data
  for (let doc_key of Object.keys(docRefs)) {
    const coll_name = docRefs[doc_key].coll_name
    const doc_name = docRefs[doc_key].doc_name
    const doc_recv = {}
    await ReadDocFromFireStore(doc_recv, {
      coll_name,
      doc_name,
    })
    docs.data[doc_name] = doc_recv.data
  }
}

/**
 * Reads all documents that has the tag. Documents are saved at docs.data
 * @param docs    used to save the results
 * @param tag     the tag
 */
export async function readDocRefsWithTag(docs, {tag}) {
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
export async function addDocUnderTag({ doc_name, tag }) {
  const newTagInfo = {}
  newTagInfo[doc_name] = {
    coll_name: share_coll_name,
    doc_name: doc_name,
  }
  await mergeSingleDataToFireStore(
    newTagInfo,
    {
      coll_name: share_tags_coll_name,
      doc_name: tag,
    }
  )
  await addTagToTags({tag})
}

/**
 * Deletes the document from the tag's collection in database.
 * @param doc_name document name
 * @param tag      tag name
 */
export async function deleteDocUnderTag({ doc_name, tag }) {
  await deleteFieldInFireStore({
    coll_name: share_tags_coll_name,
    doc_name: tag,
    field_name: doc_name,
  })
  await removeTagIfEmpty({tag})
}

/* THIS FUNCTION IS NOT TESTED YET */
/** Records the tag to a document that saves all tags in database */
async function addTagToTags({tag}) {
  const newTag = {};
  newTag[tag] = true;
  await mergeSingleDataToFireStore(
    newTag,
    {
      coll_name: share_all_tags_coll_name,
      doc_name: share_all_tags_doc_name,
    }
  )
}

/** Deletes the tag from all_tags if no document has this tag */
async function removeTagIfEmpty({tag}) {
  const docs = {}
  await readDocRefsWithTag(docs, {tag})
  if (docs.data) {
    if (Object.keys(docs.data).length == 0) {
      await deleteTagFromTags({tag})
      await deleteSingleDataFromFireStore({
        coll_name: share_tags_coll_name,
        doc_name: tag
      })
    }
  }
}

/** Deletes the tag from a document that saves all tags in database */
async function deleteTagFromTags({tag}) {
  await deleteFieldInFireStore({
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
  await readDocRefsWithTag(doc, {tag})
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
  await readDocRefsWithTag(tagDoc, {tag})
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

export async function docNotExists({doc_name}) {
  const existing_doc_recv = {}
  await ReadDocFromFireStore(existing_doc_recv, {
    coll_name: share_coll_name,
    doc_name: doc_name
  })
  return Object.keys(existing_doc_recv.data).length === 0
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