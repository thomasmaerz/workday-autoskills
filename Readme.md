# Workday AutoSkills

A browser console script to automate the tedious entry of skills into Workday job applications.

Filling out the "Skills" section on Workday job applications can be a frustrating and repetitive process due to its UI design. This script saves you time by automatically entering a predefined list of skills for you.

## How It Works

The script finds the skill input field, types your skill, triggers the necessary UI events to register it, and confirms the entry. It loops through an array of your skills until they are all added.

## Prerequisites

- A chromium-based browser or Firefox.
- Basic familiarity with opening your browser's Developer Tools Console.

## Setup & Customization

1. Open `skills.js` in a text editor.
2. At the very top, locate the `skills` array.
3. Replace the default skills with your own personal list of skills:

```javascript
const skills = [
  "Docker",
  "JavaScript",
  "React",
  "Python",
  // Add your skills here...
];
```

## Usage

1. Navigate to the **"Skills"** section of the Workday job application you are filling out.
2. Click directly into the skill input text field so it is focused.
3. Open your browser's Developer Console:
   - **Windows / Linux:** `Ctrl` + `Shift` + `J` (Chrome) or `Ctrl` + `Shift` + `K` (Firefox)
   - **Mac:** `Cmd` + `Option` + `J` (Chrome) or `Cmd` + `Option` + `K` (Firefox)
4. Paste the entire customized contents of your `skills.js` file into the console.
5. Press **Enter** to execute the script. 
6. Watch as it automatically populates your skills!

## Disclaimer

Workday frequently updates its user interface. Depending on when you use this script, the input selector (`input[id^="skills--skills"]`) or the timing delays (`setTimeout`) may need adjustment. If your skills are being typed but not registered, try slightly increasing the timeout durations within the script to accommodate slower network connections or browser rendering times.