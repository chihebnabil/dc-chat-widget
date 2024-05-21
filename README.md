# DocsChatAI Chat Widget

`dc-chat-widget` is a and easy-to-use chat widget for your web applications.

## Before you start

Before you start using the chat widget, you need to:

- Create an account on [DocsChatAI.com](https://docschatai.com) 
- Upload at least one file the workspace (Folder)
- Copy the workspace (Folder) ID from [this page](https://docschatai.com/workspaces) by clicking on the three dots on the right side of the workspace (Folder) and selecting `Copy ID`.

## Installation

Install the package via npm:

```sh
npm install dc-chat-widget
```

or Using unpkg CDN:

```html
<script defer src="https://unpkg.com/dc-chat-widget"></script>
```

## Usage

```javascript
import "dc-chat-widget";
```

Then add the following tag to your HTML:

```html
<dc-chat-widget></dc-chat-widget>
```

## Configuration

You can configure the chat widget by passing the following attributes:

- `workspace-id`: The workspace (Folder) ID of your chatbot (DocsChatAI.com).
- `title`: The title of the chat widget.
- `subtitle`: The subtitle of the chat widget.
- `theme`: The hex color code of the chat widget.
- `btn-size`: The size of the chat widget button. Default is `50px`.
- `font-family`: The font family of the chat widget. Default is `Arial, Helvetica, sans-serif`.
- `actions`: quick actions to be displayed in the chat widget. Default is `[]`.

```html
<dc-chat-widget
  workplace-id="your-workplace-id"
  title="Your Title"
  subtitle="Your Subtitle"
  theme="#your-color-theme"
  actions='["Can I return a product if I lost the receipt?", "Do you offer in-store returns?", 
      "Can I track the status of my return?"]'
></dc-chat-widget>
```

## Constributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
