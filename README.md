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
import comment-prompt from "eslint-plugin-comment-prompt";

export default [
    {
        plugins: {
            comment-prompt
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import comment-prompt from "eslint-plugin-comment-prompt";

export default [
    {
        plugins: {
            comment-prompt
        },
        rules: {
            "comment-prompt/rule-name": "error"
        }
    }
];
```