# eslint-plugin-comment-prompt

commit code for prompt comment

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-comment-prompt`:

```sh
npm install eslint-plugin-comment-prompt --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-comment-prompt` and add `comment-prompt` to the `plugins` key:

```js
import commentPrompt from "eslint-plugin-comment-prompt";

export default [
    {
        plugins: {
             'comment-prompt': commentPrompt
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import commentPrompt from "eslint-plugin-comment-prompt";

export default [
    {
        plugins: {
             'comment-prompt': commentPrompt
        },
        rules: {
            // 默认 每 20行 代码 需要加一行注释 (有效代码注释比 20)
            "comment-prompt/rule-name": ["error", 20]
        }
    }
];
```