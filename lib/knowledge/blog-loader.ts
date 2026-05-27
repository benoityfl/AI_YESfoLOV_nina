import fs from "fs";
import path from "path";

export function loadBlogFiles() {
  const dir = path.join(process.cwd(), "data/blog");

  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const slug = file.replace(".pdf", "");

    return {
      id: slug,
      title: slug,
      slug,
      url: `/data/blog/${file}`,
      excerpt: "",
      tags: [],
      themes: [],
    };
  });
}