import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import { exception } from "console";
import remark from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";

const workDirectory = path.join(process.cwd(), "content", "work");

type IContentType = "work";

/**
 * Get IDs of all markdown post
 * @param {string} contentType Type of content to get ids
 */

export const getAllContentIds = (contentType: IContentType) => {
  let filenames;
  let baseDir;

  // determine where to look for content types
  switch (contentType) {
    case "work":
      baseDir = workDirectory;
      filenames = fs.readdirSync(workDirectory);
      break;

    default:
      throw new exception("You have to provide a content type");
  }

  // return the slug of all the content IDs
  return filenames.map((filename) => {
    const filePath = path.join(baseDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const matterResult = matter(fileContent);

    return {
      params: {
        // This is where we switch it up to use slug instead of the filename for generating pages
        // id: filename.replace(/\.md$/, ""),
        id: matterResult.data.slug,
      },
    };
  });
};

/**
 * Get data for a given post id
 * @param {string} id ID of the post being passed
 * @param {string} contentType Type of content
 */

export const getContentData = async (id: string, contentType: IContentType) => {
  let contentTypeDirectory;
  let filenames;
  switch (contentType) {
    case "work":
      filenames = fs.readdirSync(workDirectory);
      contentTypeDirectory = workDirectory;
      break;

    default:
      throw new exception("You have to provide a content type");
  }

  // loop through all the content types and compare the slug to get the filename
  const match = filenames.filter((filename) => {
    const filePath = path.join(contentTypeDirectory, filename);

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const matterResult = matter(fileContent);
    const { slug } = matterResult.data;

    return slug === id;
  });

  // use the returned path to get the fullpath and read the file content
  const fullPath = path.join(contentTypeDirectory, match[0]);
  // const fullPath = path.join(contentTypeDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .use(remarkPrism)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    previewImage: matterResult.data.previewImage || "",
    description: matterResult.data.description || "",
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || "",
  };
};

/**
 * Get content list for a particular content type
 * @param {string} contentType Type of content
 */
export const getContentList = (contentType: IContentType) => {
  let contentFiles;
  let contentDir;

  switch (contentType) {
    case "work":
      contentFiles = fs.readdirSync(workDirectory);
      contentDir = workDirectory;
      break;
  }

  const content = contentFiles
    .filter((content) => content.endsWith(".md"))
    .map((content) => {
      const path = `${contentDir}/${content}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });

      const { data } = matter(rawContent);

      return {
        ...data,
        previewImage: data.previewImage || "/images/placeholder.png",
        id: uuid(),
      };
    });

  return content.sort(sortByDate);
};

/**
 * Sorts content by their dates
 * @param a {Date} - Date of post 1
 * @param b {Date} - Date of post 2
 */
const sortByDate = (a, b) => {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
};
