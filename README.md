# Factorial

This is a math utility that can calculate factorial for large numbers. You can enter any value from 0 to 9999 into the input box. After pressing `Add For Calculation`, the app puts the number into the output queue and starts calculating its factorial. It will show the result after completion.

## TODO (1 hour and 30 minutes)

### Initialize

- Make it a Git repo.
- Commit what we already have with an "Initialize" message.
- Apply your changes. We'll check the diff later.

### Review & Fix

- Review the code as much as possible and fix anything that should be fixed in your opinion. Issues **might** be in code styles, performance, logic, etc. You'll decide which issues (if any) should be fixed first during these 30 minutes.
- You can assume "the logic" under `utils/index.js` is correct. But you might want to check the other aspects, like code styles.
- Commit your fixes as "Fix #01". Assume the next item (the main issue) is not part of this task, so your commit should contain all necessary fixes except the next one. We suggest spending about 30 minutes for this commit.
- One of the main issues in the app is the UI getting blocked when it's calculating the factorial for large numbers. Don't include the fix for this issue under the previous commit. Commit as "Fix #02".
  - Investigate the issue and find at least two solutions for this. You should be able to explain how and why each solution works.
  - Use Web Workers to fix the issue.
  - You should be able to explain why async codes are not a solution for such cases.
  - This is the expected behavior:
    - When you enter a new number into the list, UI shouldn't be blocked.
    - You should be able to enter numbers even if there are calculations already running in our queue.
    - Calculations should be done based on the order of entered numbers; the calculation for the first number should be done first, and then we should move on to the next number. The numbers should be visible in the list even if their calculation is not started yet.
    - For each number in the list, if calculating, we should have a loading (by specifying the percentage). We don't need the percentage value to be exact.
    - Use a progress bar instead of a simple text for the percentage.
- When done, please send the repo (excluding the `node_modules`) back to the interviewer and inform them so they can review your changes.

## Notes

- You're free to install any library/package/tool you want.
- You're free to search for anything on the web.
- It's expected of you to understand and explain all the changes you applied.
- If there are any issues with your internet connection, you shouldn't have seen this project at all; it should've been communicated before the meeting. Unfortunately, we might not be able to proceed if you received the project, and then for some reason, you can't send us your changes in time.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
