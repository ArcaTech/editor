import {
	EditorView,
	keymap,
	highlightSpecialChars,
	drawSelection,
	highlightActiveLine,
	dropCursor,
	rectangularSelection,
	crosshairCursor
} from "@codemirror/view";
import {
	defaultHighlightStyle,
	syntaxHighlighting,
	indentOnInput,
	bracketMatching,
	foldGutter,
	foldKeymap
} from "@codemirror/language";
import {
	defaultKeymap,
	history,
	historyKeymap
} from "@codemirror/commands";
import {
	searchKeymap,
	highlightSelectionMatches
} from "@codemirror/search";
import {
	autocompletion,
	completionKeymap,
	closeBrackets,
	closeBracketsKeymap
} from "@codemirror/autocomplete";
import { lintKeymap } from "@codemirror/lint";
import { EditorState } from "@codemirror/state";

import { markdown } from "lang-markdown";

let state = EditorState.create({
	doc: "# Title",
	extensions: [
		highlightSpecialChars(),
		history(),
		foldGutter(),
		drawSelection(),
		dropCursor(),
		EditorState.allowMultipleSelections.of(true),
		indentOnInput(),
		syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
		bracketMatching(),
		closeBrackets(),
		autocompletion(),
		rectangularSelection(),
		crosshairCursor(),
		highlightActiveLine(),
		highlightSelectionMatches(),
		keymap.of([
			...closeBracketsKeymap,
			...defaultKeymap,
			...searchKeymap,
			...historyKeymap,
			...foldKeymap,
			...completionKeymap,
			...lintKeymap
		]),

		markdown(),
	]
});

(window as any).view = new EditorView({
	state,
	parent: document.querySelector("#editor")!,
});
