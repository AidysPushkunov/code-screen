interface LinedCodeNodeTheme {
    block?: {
        base?: EditorThemeClassName;
        extension?: EditorThemeClassName;
    };
    line?: {
        base?: EditorThemeClassName;
        extension?: EditorThemeClassName;
    };
    numbers?: EditorThemeClassName;
    highlights?: Record<string, EditorThemeClassName>;
}

export { LinedCodeNodeTheme }