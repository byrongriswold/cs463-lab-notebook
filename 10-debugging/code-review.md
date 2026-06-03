<!-- prettier-ignore-start -->

## Code Review Exercise


### Issue #1: Submit/Reset inputs outside of form

The `<input>` elements with type `submit` and type `reset` are not inside
the `<form>` element. This is a significant issue because they are not associated with the form. Therefore, when `reset` is clicked, none of the form fields are cleared, and when `submit` is clicked, no form submission occurs. To fix the issue, we must place the two `<input>` elements inside the `<form>`.

For length purposes, only a few lines of code below the opening `<form>` tag
and above the closing `<form>` tag are shown. The rest is represented by `...`.

Initial code:

```html
<form id="RequestInfo" class="content-container form">
    <h1>Tell us what you want to learn more</h1>
        ...
    <textarea
        class="form-textarea form-element-container"
        name="message"
        id="message"
        cols="30"
        rows="10"
    ></textarea>
</form>
<div
    class="form space-evenly-distributed-row-container form-buttons-container"
    >
    <input class="form-button" type="submit" value="submit" />
    <input class="form-button" type="reset" value="reset" />
</div>
```

Updated code:

```html
<form id="RequestInfo" class="content-container form">
    <h1>Tell us what you want to learn more</h1>
        ...
    <textarea
        class="form-textarea form-element-container"
        name="message"
        id="message"
        cols="30"
        rows="10"
    ></textarea>
    <div
        class="form space-evenly-distributed-row-container form-buttons-container"
        >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
    </div>
</form>
```

### Issue #2: Multiple `<h1>` elements

The `index.html` file has an `<h1>` element for the heading of each section. In total, it has six different `<h1>` elements. This is an issue because a single web page should generally have only one `<h1>` for the main heading of the page. This is a semantic HTML issue, and also an accessibility issue, as it may be unclear to screen reader users what the page is mainly about. When there are multiple different `<h1>` elements, the hierarchical structure becomes less clear. There should generally be a single `<h1>` and other headers should then start at `<h2>`. It is clear on this web page, that the main topic is `Scottish Fold` and therefore it should be marked with an `<h1>`. All other section headers should use `<h2>`.

Again, for length pruposes, only the code where the issue occurs is shown. All surrounding code is represented by `...`.

Initial code:

```html
...
<h1 class="heading-1">Scottish Fold</h1>
...
<h1>Introduction</h1>
...
<h1 class="clear-margin-bottom">History</h1>
...
<h1>Characteristics</h1>
...
<h1>Cat Facts</h1>
...
<h1>Tell us what you want to learn more</h1>
...
```

Updated code:

```html
...
<h1 class="heading-1">Scottish Fold</h1>
...
<h2>Introduction</h2>
...
<h2 class="clear-margin-bottom">History</h2>
...
<h2>Characteristics</h2>
...
<h2>Cat Facts</h2>
...
<h2>Tell us what you want to learn more</h2>
...
```

### Issue #3: Missing main landmark

The `index.html` file does not contain a `<main>` element.
This is a semantic HTML issue, and it can also be considered an accessibility issue,
as `<main>` creates a landmark that helps screen reader users navigate to the core content of a web page. To fix the issue, we must add a `<main>` element to surround the primary content.

Again, for length purposes, only the code surrounding where the missing `<main>` opening and closing tags should be added is shown. Omitted code is represented by `...`. Otherwise, this example would require pasting 450+ lines of code.

Initial code:

```html
<body>
    <header>
        ...
    </header>

    <div class="dark-background-container section-below-navbar">
        <div class="space-evenly-distributed-row-container vertically-stacked-mid-screen-container content-container"
        >
            ...
        </div>
    </div>

    <footer class="footer">
        ...
    </footer>

</body>
```

Updated code:

```html
<body>
    <header>
        ...
    </header>

    <main>
        <div class="dark-background-container section-below-navbar">
            <div class="space-evenly-distributed-row-container vertically-stacked-mid-screen-container content-container"
            >
                ...
            </div>
        </div>
    </main>

    <footer class="footer">
        ...
    </footer>
</body>
```

<!-- prettier-ignore-end -->
