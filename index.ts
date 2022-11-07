import { unified } from "unified";
import markdown from "remark-parse";
import { remarkToSlate } from "remark-slate-transformer";

const processor = unified().use(markdown).use(remarkToSlate);

const text = "# hello world";

const value = processor.processSync(text).result;
console.log(value);
