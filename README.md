# AscendWebsiteDev

Source code for Ascend Website. Made with React and TypeScript

**For Ascend Board Members: Please read the instructions below if you want to update the website**

### Setup and Download Project

You'll need to have Git, VS Code, and Node.js installed

- Git is a Source Control Program that allows you to download, track changes, and update them to the website from your computer: https://git-scm.com/downloads
- VS Code is a text editor to update the website contents: https://code.visualstudio.com/download
- Node.js allows you to run the code to see a preview of the website on your computer: https://nodejs.org/en/download/prebuilt-installer

Once you install everything, you can download the code on your computer.

Find a folder where you want the code to be and open that in VS Code.

Then press `CTRL` + `~` (Control, then Tilde Key which is next to the 1 key on the left side of the keyboard). This opens `Terminal` which allows you to run git and npm commands (and alot of other stuff).

Go back to the GitHub repository page (the page that you're reading right now). Go to the right top side and click on `<> Code`.

This opens a dropdown menu containing the link to download the website with Git. Do not click on anything else, just copy the URL.

Then type this into the `Terminal` back in VS Code and press Enter:

```
git clone https://github.com/ColinWu0403/AscendWebsiteDev.git
```

This will create a copy of the project in the folder on your computer

### Change and Test Code

Now everything in the website's contents is in [src/constants/index.ts](src/constants/index.ts). Open the file in VS Code. You can see all the contents of the website that can be changed (Eg. board member info, event info, etc.)

Now just edit the file and save it (`CTRL` + `S`). This won't be update to the actual website yet.

**Please make sure you don't break the code with changes**

To make sure, once you saved, go back to `Terminal` and run:

```
npm install
```

This installs the dependencies to preview the most updated version of the project.

Then run:

```
npm run dev
```

This will run the code and a link (Typically [http://localhost:5173/](http://localhost:5173/)) where you can preview it in your browser.

Now once you're satisfied with your changes, you can now upload (in git terms is is "push") your changes back to the GitHub repo and the website itself will be automatically updated.

### Push Changes

In VS Code, go to the top left side and click on the `Source Control` button. You can see all the files that you've changed here in relation to the website (git tracks it).

I'll give instructions on how to do this in both through VS Code and `Terminal` using git.

**VS Code**

You will need to stage your changes first. To do this click on the `+` sign on all files you want to change (this stages it in the `Staged Changes` section).

Then on top type a message (Just put what you changed, eg. "Updated Board Member Information"). Then click `Commit` to add the update message.

Then just click on `Sync Changes` and that will send the updated code back to GitHub and Vercel (my website hosting service) will automatically update the website in a few seconds.

**Terminal using Git Commands**

The steps are the same, you just have to type it out and run all commands

You add any files you've changed to be staged (same as `Staged Changes`) by doing git add:

```
git add [filename]
```

or add all files that were changed

```
git add .
```

Then commit your changes (add what you updated) with git commit:

```
git commit -m "Your message here"
```

Then to `Sync Changes`, just do:

```
git push origin main
```
